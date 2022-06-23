import { useState } from 'react';
import './SendMailToUser.css';
import PropTypes from 'prop-types';
import { BASE_URL } from '../../constants';

import {
  required,
  Button,
  SaveButton,
  TextField,
  useCreate,
  useNotify,
  FormWithRedirect,
} from 'react-admin';

import IconCancel from '@material-ui/icons/Cancel';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

function SendMailToUser(props) {
  const [subject, setSubject] = useState(props.subject);
  const [msg, setMsg] = useState(props.msg);
  const [showDialog, setShowDialog] = useState(false);
  const [{ loading }] = useCreate('messages');
  const notify = useNotify();

  const handleClick = (e) => {
    e.stopPropagation();
    setShowDialog(true);
  };

  const handleCloseClick = (e) => {
    e.stopPropagation();
    setShowDialog(false);
  };

  const handleSubmit = async (values) => {

    console.log(values.reportedTo.email);
    console.log(subject);
    console.log(msg);

    const token = localStorage.getItem('auth');

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      body: JSON.stringify({ to: values.reportedTo.email, subject, msg })
    };
    fetch(BASE_URL+'/send-email', requestOptions)
      .then(response => response.json())
      .then(data => {
        if ( data.status ){
          setShowDialog(false);
          notify(`Mail to ${values.reportedTo.email} Sent Successfully`);
        }else{
          notify(`Can't send email. Please contact developer.`);
        }
      });
  };

  return (
    <>
      <Button onClick={handleClick} label="Send Warning Mail"></Button>
      <Dialog
        fullWidth
        open={showDialog}
        onClose={handleCloseClick}
        onClick={(e) => e.stopPropagation()}
        disableBackdropClick={true}
      >
        <DialogTitle>
          {`Send Warning Mail`}
        </DialogTitle>

        <FormWithRedirect
          resource="postreports"
          save={handleSubmit}
          render={({ handleSubmitWithRedirect, pristine, saving }) => (
            <>
              <DialogContent>
                <div className="form-box">
                  <label>To: </label>
                  <TextField source="reportedTo.email" label="To" validate={required()} fullWidth multiline onClick={(e) => e.stopPropagation()}/>
                  <label>Subject: </label>
                  <input className="form-control" type="text" multiline="true" value={subject} onChange={e => setSubject(e.target.value)} />
                  <label>Message: </label>
                  <textarea multiline="true" value={msg} onChange={e => setMsg(e.target.value)}></textarea>
                </div>
              </DialogContent>
              <DialogActions>
                <Button
                  label="Cancel"
                  onClick={handleCloseClick}
                  disabled={loading}
                >
                  <IconCancel />
                </Button>
                <SaveButton
                  handleSubmitWithRedirect={handleSubmitWithRedirect}
                  pristine={pristine}
                  saving={saving}
                  disabled={loading}
                  label="Send"
                  onClick={(e) => e.stopPropagation()}
                />
              </DialogActions>
            </>
          )}
        />
      </Dialog>
    </>
  );
}

SendMailToUser.propTypes = {
  subject: PropTypes.string,
  msg: PropTypes.string,
  onChange: PropTypes.func
};

export default SendMailToUser;
