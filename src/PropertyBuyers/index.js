import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShowProperty from './PropertyBuyerShow';
import PropertyBuyerList from './PropertyBuyerList';
import { ListGuesser, ShowGuesser,EditGuesser, CreateGuesser } from 'react-admin';
import PropertyCreate from './PropertyBuyerCreate';
import PropertyBuyerEdit from './PropertyBuyerEdit';
import PropertyBuyerShow from './PropertyBuyerShow';

const resource = {
  list: PropertyBuyerList,
   show: PropertyBuyerShow,
  // icon: AccountCircleIcon,
   create: PropertyCreate,
   edit: PropertyBuyerEdit
};

export default resource;
