import AccountCircleIcon from '@mui/icons-material/AccountCircle';
//import ShowProperty from './ShowProperty';
import PropertyList from './PropertySellerList';
import { ListGuesser,EditGuesser,ShowGuesser } from 'react-admin';
import PropertyCreate from './PropertySellerCreate';
import PropertyEdit from './PropertySellerEdit';
import PropertyShow from './PropertySellerShow';
import SellIcon from '@mui/icons-material/Sell';

const resource = {
  list: PropertyList,
   show: PropertyShow,
   icon: SellIcon,
   create: PropertyCreate,
   edit: PropertyEdit
};

export default resource;
