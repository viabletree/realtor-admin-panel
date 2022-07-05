import AccountCircleIcon from '@mui/icons-material/AccountCircle';
//import ShowProperty from './ShowProperty';
import PropertyList from './PropertySellerList';
import { ListGuesser,EditGuesser } from 'react-admin';
import PropertyCreate from './PropertySellerCreate';
import PropertyEdit from './PropertySellerEdit';

const resource = {
  list: PropertyList,
  // show: ShowProperty,
  // icon: AccountCircleIcon,
   create: PropertyCreate,
   edit: PropertyEdit
};

export default resource;
