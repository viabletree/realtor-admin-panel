import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShowProperty from './PropertyBuyerShow';
import PropertyBuyerList from './PropertyBuyerList';
import { ListGuesser, ShowGuesser,EditGuesser, CreateGuesser } from 'react-admin';
import PropertyCreate from './PropertyBuyerCreate';
import PropertyBuyerEdit from './PropertyBuyerEdit';
import PropertyBuyerShow from './PropertyBuyerShow';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const resource = {
  list: PropertyBuyerList,
   show: PropertyBuyerShow,
   icon: ShoppingCartIcon,
   create: PropertyCreate,
   edit: PropertyBuyerEdit
};

export default resource;
