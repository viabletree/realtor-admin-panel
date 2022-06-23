import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShowProperty from './ShowProperty';
import UsersList from './UsersList';
import { ListGuesser } from 'react-admin';
import PropertyCreate from './PropertyCreate';
import UserEdit from './PropertyEdit';

const resource = {
  list: ListGuesser,
  show: ShowUser,
  icon: AccountCircleIcon,
  create: UserCreate,
  edit: UserEdit
};

export default resource;
