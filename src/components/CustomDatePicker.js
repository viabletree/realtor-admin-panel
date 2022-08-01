import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { DateField } from 'react-admin';

const useStyles = makeStyles({

});

const CustomDatePicker = (props) => {
  const classes = useStyles();
  const styles = classes.avatar;
  const contractLenderDate = props.record.contract_to_lender_date;
  console.log({ date: contractLenderDate });
  return <DateField
    className={styles}
    source={contractLenderDate}
  />
  // return <Avatar className={styles} src={props.record && props.record.photo ? props.record.photo : (props.record && props.record.info && props.record.info.photo ? props.record.info.photo : (props.record.image ? props.record.image : ''))} />;
};
CustomDatePicker.propTypes = {
  record: PropTypes.object
};

CustomDatePicker.defaultProps = {
  label: 'Image',
  addLabel: true
};

export default CustomDatePicker;
