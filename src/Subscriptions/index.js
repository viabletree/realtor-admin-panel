import AccountCircleIcon from '@mui/icons-material/AccountCircle';
//import SettingList from './SettingList';
//import SettingCreate from './SettingCreate';
import { ListGuesser,ShowGuesser } from 'react-admin';

import SubscriptionsEdit from './SubscriptionsEdit';
import SubscriptionsList from './SubscriptionsList';
import SubscriptionsShow from './SubscriptionsShow';
import SettingIcon from '@mui/icons-material/Quiz';


const resource = {
  list: SubscriptionsList,
  show: SubscriptionsShow,
  icon: SettingIcon,
 // create: SettingCreate,
  edit: SubscriptionsEdit
};

export default resource;
