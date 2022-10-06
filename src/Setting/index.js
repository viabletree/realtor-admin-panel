import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingList from './SettingList';
import SettingCreate from './SettingCreate';
import { ListGuesser,ShowGuesser } from 'react-admin';

import SettingEdit from './SettingEdit';
import ShowSetting from './ShowSetting';
import SettingsIcon from '@mui/icons-material/Settings';

const resource = {
  list: SettingList,
  show: ShowSetting,
  icon: SettingsIcon,
 // create: SettingCreate,
  edit: SettingEdit
};

export default resource;
