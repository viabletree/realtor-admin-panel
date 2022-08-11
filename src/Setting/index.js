import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingList from './SettingList';
import SettingCreate from './SettingCreate';
import { ListGuesser,ShowGuesser } from 'react-admin';

import SettingEdit from './SettingEdit';
import ShowSetting from './ShowSetting';
import SettingIcon from '@mui/icons-material/Quiz';


const resource = {
  list: SettingList,
  show: ShowSetting,
  icon: SettingIcon,
 // create: SettingCreate,
  edit: SettingEdit
};

export default resource;
