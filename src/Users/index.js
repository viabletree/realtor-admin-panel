import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShowUser from './ShowUser';
import UsersList from './UsersList';
import { ListGuesser } from 'react-admin';
import UserCreate from './UserCreate';
import UserEdit from './UserEdit';

const resource = {
  list: ListGuesser,
  show: ShowUser,
  icon: AccountCircleIcon,
  create: UserCreate,
  edit: UserEdit
};

export default resource;
