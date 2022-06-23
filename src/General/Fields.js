import * as React from 'react';
import { ImageField } from 'react-admin';
import PropTypes from 'prop-types';

const PreviewImage = ({ record, source }) => {
  if (typeof record === 'string') {
    record = {
      [source]: record,
    };
  }
  return <ImageField record={record} source={source} />;
};

PreviewImage.propTypes = {
  record: PropTypes.object,
  label: PropTypes.string,
};

export default PreviewImage;