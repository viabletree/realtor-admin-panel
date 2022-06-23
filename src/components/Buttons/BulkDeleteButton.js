import { Fragment, useState } from 'react';
import { PropTypes } from 'prop-types';
import {
  Button,
  Confirm,
  useDeleteMany,
  useRefresh,
  useNotify,
  useUnselectAll
} from 'react-admin';

const BulkDeleteButton = ({ selectedIds, resourceName }) => {
  const [open, setOpen] = useState(false);
  const refresh = useRefresh();
  const notify = useNotify();
  const unselectAll = useUnselectAll();
  const [deleteMany, { loading }] = useDeleteMany(resourceName, selectedIds, {
    onSuccess: () => {
      refresh();
      notify(`${resourceName} deleted`);
      unselectAll(resourceName);
    },
    onFailure: (error) => {
      notify(`Error: ${resourceName} not deleted. ${error}`, 'warning');
    }
  });

  const handleClick = () => setOpen(true);
  const handleDialogClose = () => setOpen(false);

  const handleConfirm = () => {
    deleteMany();
    setOpen(false);
  };

  return (
    <Fragment>
      <Button label="ra.action.delete" onClick={handleClick} />
      <Confirm
        isOpen={open}
        loading={loading}
        title={`Delete ${resourceName}`}
        content="Are you sure you want to delete these items?"
        onConfirm={handleConfirm}
        onClose={handleDialogClose}
      />
    </Fragment>
  );
};

BulkDeleteButton.propTypes = {
  selectedIds: PropTypes.array,
  resourceName: PropTypes.string
};

export default BulkDeleteButton;
