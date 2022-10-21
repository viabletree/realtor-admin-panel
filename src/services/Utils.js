/* eslint-disable no-else-return */
/* eslint-disable prefer-template */
/* eslint-disable class-methods-use-this */
// @flow
import _ from "lodash";
import moment from "moment";
import { BASE_URL } from "../constants";

class Util {
  keyExtractor = (item, index) => index.toString();

  /**
   *
   * @param {string} phone
   * @return {string}
   */
  formatPhone = (phone) => {
    return phone;
    return `+${phone}`;
  };

  isValidURL(url) {
    // eslint-disable-next-line no-useless-escape
    const re =
      /^(http|https|fttp):\/\/|[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}(:[0-9]{1,5})?(\/.*)?$/;
    return re.test(url);
  }

  isValidHttpsURL(url) {
    // eslint-disable-next-line no-useless-escape
    const re =
      /^(https|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
    return re.test(url);
  }

  isTimeFormat(time) {
    // eslint-disable-next-line no-useless-escape

    const re =
      /^([1-9]|([012][0-9])|(3[01]))\/([0]{0,1}[1-9]|1[012])\/[0-9]{4} [012]{0,1}[0-9]:[0-6][0-9]$/;
    let bol = re.test(time);
    return bol;
  }

  isEmailValid(email) {
    // eslint-disable-next-line no-useless-escape
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.trim());
  }
  isPasswordValid(password) {
    return password.length > 5;
  }
  isValidName(name) {
    return /^[a-zA-Z ]*$/.test(name);
  }

  isValidPassword(pswd) {
    return /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}).*$/.test(
      pswd
    );
  }

  capitalizeFirstLetter(string) {
    if (string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return "";
  }

  getFormattedDateTime = (date, format) => {
    if (date) return moment(date).format(format);
    return "";
  };

  getDateObjectFromString = (date, format) => {
    if (date) return moment(date, format).toDate();
    return "";
  };

  isNumber(val) {
    return /^\d+$/.test(val);
  }

  generateGetParameter(obj) {
    let final = "?";
    for (const key in obj) {
      final = `${final}${key}=${obj[key]}&`;
    }
    final = final.slice(0, -1);
    return final;
  }

  isValidMobileNumber(str) {
    if (!str) return false;
    const isnum = /^\d+$/.test(str);

    if (str.length < 15 && str.length > 9 && isnum) {
      return true;
    }
    return false;
  }

  isValidUKMobileNumber(str) {
    if (!str) return false;
    str = str.replace(/ /g, "");
    let mobileNumber = str.replace("+", "");
    // Number begins with 44
    if (mobileNumber.charAt(0) == "4" && mobileNumber.charAt(1) == "4") {
      mobileNumber = "0" + mobileNumber.slice(2);
    }
    // return /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/.test(mobileNumber);
    return /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/.test(
      mobileNumber
    );
  }

  // async getReq() {
  //   let options = Object.assign({ method: 'POST' });
  //   options.credentials = 'include';
  //   options.headers = {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //     dataType: 'json'
  //   };
  //   let data = {};
  //   options.body = JSON.stringify(data);
  //   const response = await fetch(
  //     `https://kiffgo-development.herokuapp.com/b/login-website`,
  //     options
  //   );
  //   const responseJson = await response.json();
  //   return responseJson._csrf;
  // }
  generateGuid() {
    const S4 = () =>
      (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    return (
      S4() +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      S4() +
      S4()
    );
  }

  deg2rad(deg) {
    return deg * (Math.PI / 180);
  } // function for getting radians from degrees

  isEven = (n) => n % 2 === 0;

  isOdd = (n) => Math.abs(n % 2) === 1;

  penceToPoundsWithDecimal = (value) =>
    value > 0 ? `£ ${(value / 100).toFixed(2)}` : `£ 0`;

  unitFormat = (value, unit, isSuffix) => {
    if (isSuffix) {
      return `${value} ${unit}`;
    } else {
      return `${unit} ${value}`;
    }
  };

  getMiles(i) {
    if (i) {
      if (i > 90) {
        return Math.round(i * 0.000621371192 * 10) / 10;
      }
      // when value is less than 90 it gived 0 miles so we override that value with 0.1
      return 0.1;
    }

    return 0;
  }

  getCurrentUrl = () => {
    return window.location.origin;
  };

  checkValueExits = (value, defaults = "") => {
    if (value) {
      return value;
    }
    return defaults;
  };

  addFocusListener = (onFocus) => {
    window.removeEventListener("focus", onFocus);

    setTimeout(() => {
      window.addEventListener("focus", onFocus);
    }, 500);
  };

  mmToMeter = (mm) => {
    let result = 0;

    result = mm / 1000;
    result = result.toFixed(2);
    return result + "m";
  };

  makeAddressString = (AddressText, businessName) => {
    let index = AddressText.indexOf(businessName);
    let newStr = AddressText.replace(businessName, "");

    let bol = true;
    while (bol) {
      if (newStr[index] === " " || newStr[index] === ",") {
        newStr = newStr.replace(newStr[index], "");
      } else {
        bol = false;
      }
    }
    return newStr;
  };

  getSingularPluralText(quantity, text) {
    return quantity > 1 ? `${text}s` : text;
  }

  getFormattedPhone = (phone) => {
    // const first2Numbers = phone.substring(0, 2);
    // const next4Numbers = phone.substring(2, 6);
    // const remainingNumbers = phone.substring(6, phone.length);
    // return `+${first2Numbers} ${next4Numbers} ${remainingNumbers}`;
    return `+${phone}`;
  };

  checkDev = () => {
    return process.env.REACT_APP_ENV === "dev";
  };

  /**
   *@description use this method to generate random moment date start from to day to any date in future
   * @param {moment} end
   * @returns moment
   */
  randomDate = (end) => {
    const start = new Date();
    const date = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    ).toISOString();

    return date;
  };
}

export default new Util();
