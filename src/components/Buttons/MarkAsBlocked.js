import { useDispatch } from 'react-redux';
import {
  useNotify,
  fetchStart,
  fetchEnd,
  useRefresh,
} from 'react-admin';
import { BASE_URL } from '../../constants';
import Button from '@material-ui/core/Button';
import BlockIcon from '@material-ui/icons/Block';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import PropTypes from 'prop-types';

const MarkAsBlocked = ({ record }) => {
  const { isBlocked } = record;
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem('auth') || '';
  const refresh = useRefresh();

  const notify = useNotify();
  const handleBlockedButtonClick = (e) => {
    e.stopPropagation();
    dispatch(fetchStart()); // start the global loading indicator
    const updatedRecord = { block: !record.isBlocked };
    fetch(`${BASE_URL}/users/${record.id}`, {
      headers: {
        // staging: true,
        'Content-type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      method: 'PUT',
      body: JSON.stringify(updatedRecord),
    })
      .then((response) => {
        refresh();
        if (response.status === 200) {
          notify(`${record.name} ${isBlocked ? `Un-Blocked Successfully` : `Blocked Successfully`}`, 'info');
        } else {
          response.json().then((data)=>{
            notify(`${data.message}`, 'error');
          });
        }
      })
      .catch((e) => console.log(e))
      .finally(() => {
        dispatch(fetchEnd()); // stop the global loading indicator
      });
  };
  return (
    (<Button color="secondary" size="small" onClick={handleBlockedButtonClick} style={{ color: isBlocked ? 'red' : 'blue' }} startIcon={isBlocked ? <BlockIcon /> : <CheckCircleIcon />}>{!isBlocked ? 'Block User' : 'Un-Block User'}</Button>)
  );
};

MarkAsBlocked.propTypes = {
  record: PropTypes.object
};

export default MarkAsBlocked;
