import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShowProperty from './ShowProperty';
import PropertyList from './PropertyList';
import { ListGuesser } from 'react-admin';
import PropertyCreate from './PropertyCreate';
import PropertyEdit from './PropertyEdit';

const resource = {
  list: ListGuesser,
  // show: ShowProperty,
  // icon: AccountCircleIcon,
  // create: PropertyCreate,
//  edit: PropertyEdit
};

export default resource;
