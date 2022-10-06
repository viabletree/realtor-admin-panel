import AccountCircleIcon from '@mui/icons-material/AccountCircle';
//import SettingList from './SettingList';
//import SettingCreate from './SettingCreate';
import { ListGuesser,ShowGuesser } from 'react-admin';

import SubscriptionsEdit from './SubscriptionsEdit';
import SubscriptionsList from './SubscriptionsList';
import SubscriptionsShow from './SubscriptionsShow';
import LoyaltyIcon from '@mui/icons-material/Loyalty';


const resource = {
  list: SubscriptionsList,
  show: SubscriptionsShow,
  icon: LoyaltyIcon,
 // create: SettingCreate,
  edit: SubscriptionsEdit
};

export default resource;
