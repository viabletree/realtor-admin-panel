import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  avatar: {
    height: 30,
    width: 30
  }
});

const ImageAvatar = (props) => {
  const classes = useStyles();
  const styles = classes.avatar;

  return <Avatar className={styles} src={props.record && props.record.photo ? props.record.photo : (props.record && props.record.info && props.record.info.photo ? props.record.info.photo : (props.record.image ? props.record.image : ''))} />;
};
ImageAvatar.propTypes = {
  record: PropTypes.object
};

ImageAvatar.defaultProps = {
  label: 'Image',
  addLabel: true
};

export default ImageAvatar;
