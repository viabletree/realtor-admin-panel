import * as React from 'react';
//import { ImageField } from 'react-admin';
import { TimeInput } from "react-admin-date-inputs2";

import PropTypes from 'prop-types';

const TimePicker = ({ record, source }) => {
  if (typeof record === 'string') {
    record = {
      [source]: record,
    };
  }
  return <TimeInput record={record} source={source} />;
};

TimePicker.propTypes = {
    record: PropTypes.object,
    label: PropTypes.string,
  };
  
export default TimePicker;