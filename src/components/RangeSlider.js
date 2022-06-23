import { useState } from 'react';
import { TextInput } from 'react-admin';
import PropTypes from 'prop-types';

import Slider from '@mui/material/Slider';
import {useFormState, useForm} from 'react-final-form';

const RangeSlider = () => {

  const {values} = useFormState();
  const form = useForm();
  const [ageValue,setAgeValue] = useState(values.ages && values.ages.length ? values.ages : [0,100]);

  values.ages = ageValue;

  const handleChange = (event,newValue) => {
    setAgeValue(newValue);
    values.ages = newValue;
    form.blur('ages');
    form.focus('ages');
  };

  return (
    <div style={{width:'100%',marginBottom: 50}}>
      <label style={{color: '#666'}}>Select Age Limit: </label>
      <Slider value={ageValue} onChange={handleChange} valueLabelDisplay="on" disableSwap style={{marginLeft: 200,width: '50%',padding:5}} />
      <div style={{display:'none'}}><TextInput source="ages"/></div>
    </div>
  );
};

RangeSlider.propTypes = {
  record: PropTypes.object
};

export default RangeSlider;
