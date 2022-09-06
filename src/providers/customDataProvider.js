import { fetchUtils } from "react-admin";
import { stringify } from "query-string";
import _ from "lodash";
import { BASE_URL, getResourcePath, LOCALHOST_URL } from "../constants";
import moment from "moment";

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({
      Accept: "application/json",
    });
  }
  const token = localStorage.getItem("auth");
  options.headers.set("Authorization", `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};
const sentImageToS3 = async (files) => {
  if (files && files.length) {
    let exts = "";

    files.forEach((item, i) => {
      if (item.rawFile) {
        if (i > 0) {
          exts += ",";
        }
        exts += item.rawFile.name.split(".")[1];
      }
    });

    const response = await fetch(BASE_URL + "/upload/sign?ext=" + exts);
    const { data } = await response.json();

    let imageUrls = [];

    if (data && data.length) {
      for (let a = 0; a < data.length; a++) {
        await fetch(data[a], {
          method: "PUT",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          body: files[a].rawFile,
        });
        const imageUrl = data[a].split("?")[0];
        imageUrls.push(imageUrl);
      }
    }

    return imageUrls;
  }
};

const multiMediaUploadToServer = async (file) => {
  let fileExt = "";
  let typeOfUris = _.cloneDeep(file);
  typeOfUris.forEach((item, i) => {
    if (item.rawFile) {
      if (i > 0) {
        fileExt += ",";
      }
      fileExt += item.rawFile.name.split(".")[1];
    }
  });

  let comingSignedUri = [];

  try {
    await fetch(`${LOCALHOST_URL}api/v1/aws/sign-url?folder=&ext=${fileExt}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        comingSignedUri = result.data;
      });
  } catch (error) {
    console.log("PIC Error", error);
  }

  if (!_.isEmpty(comingSignedUri)) {
    const uploadMedia = [];
    comingSignedUri.forEach((res, index) => {
      uploadMedia.push(uploadToS3BySigned(file, res, index));
    });

    let mediaUpload = file;

    await Promise.all(uploadMedia).then((uploadedImgs) => {
      uploadMedia.map((_, index) => {
        mediaUpload[index]["path"] = uploadedImgs[index];
      });
    });
    console.log({ mediaUpload });
    const ulrArrays = mediaUpload.map((obj) => obj.path);
    return ulrArrays.length === 1 ? ulrArrays[0] : ulrArrays;
  }
  return "mediaUpload";
};

async function uploadToS3BySigned(file, item, index) {
  let imageUrl = null;
  await fetch(item, {
    method: "PUT",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: file[index],
  })
    .then((result) => {
      imageUrl = result.url.split("?")[0];
    })
    .catch((err) => console.error("err", err));

  return imageUrl;
}

export default {
  getList: (resource, params) => {
    const mResource = getResourcePath(resource);

    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter),
    };
    const url = `${BASE_URL}/${mResource}?${stringify(query)}`;

    return httpClient(url).then(({ headers, json }) => ({
      data: json.data,
      total: parseInt(headers.get("content-range").split("/").pop(), 10),
    }));
  },

  getOne: (resource, params) => {
    const mResource = getResourcePath(resource);
    return httpClient(`${BASE_URL}/${mResource}/${params.id}`).then(
      ({ json }) => {
        var newDateObj = new Date();

        var dateOnly = moment(newDateObj).format("YYYY-MM-DD");

        var wholeDateFrom = dateOnly + " " + json.data.availability_from;
        var wholeDateTo = dateOnly + " " + json.data.availability_to;

        json.data.availability_from = wholeDateFrom;
        json.data.availability_to = wholeDateTo;
        return {
          data: json.data,
          id: params.id,
        };
      }
    );
  },

  getMany: (resource, params) => {
    const mResource = getResourcePath(resource);
    const query = {
      filter: JSON.stringify({ id: params.ids }),
      sort: "[]",
      range: "[]",
    };
    const url = `${BASE_URL}/${mResource}?${stringify(query)}`;
    return httpClient(url).then(({ json }) => ({ data: json.data }));
  },

  getManyReference: (resource, params) => {
    const mResource = getResourcePath(resource);
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };
    const url = `${BASE_URL}/${mResource}?${stringify(query)}`;

    return httpClient(url).then(({ headers, json }) => ({
      data: json.data,
      total: parseInt(headers.get("content-range").split("/").pop(), 10),
    }));
  },

  update: async (resource, params) => {
    const mResource = getResourcePath(resource);
    if (
      _.has(params, "data") &&
      _.has(params.data, "mediaUrls") &&
      params.data.mediaUrls.length
    ) {
      let files = params.data.mediaUrls.filter((item) => {
        return item.rawFile;
      });

      let urls = await sentImageToS3(files);
      params.data.mediaUrls = params.data.mediaUrls.filter((item) => {
        return !_.has(item, "rawFile");
      });
      params.data.mediaUrls = params.data.mediaUrls.map((item) => {
        let url = item;
        if (_.has(item, "media_url")) {
          url = item.media_url;
        }
        return url;
      });
      if (urls && urls.length) {
        for (let a = 0; a < urls.length; a++) {
          params.data.mediaUrls.push(urls[a]);
        }
      }
    }

    if (resource === "users") {
      // availability from time conversion
      var availability_from_time = params?.data?.availability_from;

      if (!_.isString(availability_from_time)) {
        var momentConversionFrom = moment(availability_from_time).format(
          "HH:mm:ss"
        );
        params.data.availability_from = momentConversionFrom;
      }

      // availability to time conversion
      var availability_to_time = params?.data?.availability_to;
      if (!_.isString(availability_to_time)) {
        var momentConversionTo =
          moment(availability_to_time).format("HH:mm:ss");
        params.data.availability_to = momentConversionTo;
      }

      if (
        _.has(params, "data") &&
        _.has(params.data, "profile_image") &&
        _.isObject(params.data.profile_image)(
          params.data.profile_image.length || params.data.profile_image.src
        )
      ) {
        params.data.profile_image = await multiMediaUploadToServer(
          params.data.profile_image.src
            ? [params.data.profile_image]
            : params.data.profile_image
        );
      }
    }

    return httpClient(`${BASE_URL}/${mResource}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json.data }));
  },

  updateMany: (resource, params) => {
    const mResource = getResourcePath(resource);
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return httpClient(`${BASE_URL}/${mResource}?${stringify(query)}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json.data }));
  },

  create: async (resource, params) => {
    const mResource = getResourcePath(resource);

    if (
      _.has(params, "data") &&
      _.has(params.data, "property_images") &&
      (params.data.property_images.length || params.data.property_images.src)
    ) {
      params.data.property_images = await multiMediaUploadToServer(
        params.data.property_images.src
          ? [params.data.property_images]
          : params.data.property_images
      );
    }

    if (resource === "users") {
      // availability from time conversion
      var availability_from_time = params?.data?.availability_from;
      var momentConversionFrom = moment(availability_from_time).format(
        "HH:mm:ss"
      );
      params.data.availability_from = momentConversionFrom;

      // availability to time conversion
      var availability_to_time = params?.data?.availability_to;
      var momentConversionTo = moment(availability_to_time).format("HH:mm:ss");
      params.data.availability_to = momentConversionTo;
      if (
        _.has(params, "data") &&
        _.has(params.data, "profile_image") &&
        (params.data.profile_image.length || params.data.profile_image.src)
      ) {
        params.data.profile_image = await multiMediaUploadToServer(
          params.data.profile_image.src
            ? [params.data.profile_image]
            : params.data.profile_image
        );
      }
    }

    return httpClient(`${BASE_URL}/${mResource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({
      data: { ...params.data, id: json.data.id },
    }));
  },

  delete: (resource, params) => {
    const mResource = getResourcePath(resource);
    return httpClient(`${BASE_URL}/${mResource}/${params.id}`, {
      method: "DELETE",
    }).then(({ json }) => ({ data: json.data }));
  },

  deleteMany: (resource, params) => {
    const mResource = getResourcePath(resource);
    const query = {
      filter: { id: params.ids },
    };

    return httpClient(`${BASE_URL}/${mResource}?${stringify(query)}`, {
      method: "DELETE",
      body: JSON.stringify(query),
    }).then(({ json }) => ({ data: json.data }));
  },
};
