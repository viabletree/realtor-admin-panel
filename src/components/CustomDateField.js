import { DateField, useRecordContext } from 'react-admin';
import moment from 'moment';


const CustomDateField = (props) => {
    const record = useRecordContext(props);
    const {label, source} = props;
    if(moment(record[source]).isValid() ){
      return <DateField label={label} source={source} />;
    }else{
      return <span> - </span>;
    }
  };
  CustomDateField.defaultProps = {
    label: "",
    addLabel: true,
    source: "",
  
  };

export default CustomDateField;
