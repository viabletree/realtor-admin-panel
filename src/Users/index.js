import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import UsersList from './UsersList';
import UserCreate from './UserCreate';
import UserEdit from './UserEdit';
import ShowUser from './ShowUser';

const resource = {
  list: UsersList,
  show: ShowUser,
  icon: AccountCircleIcon,
  create: UserCreate,
  edit: UserEdit
};

export default resource;
