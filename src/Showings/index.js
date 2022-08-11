import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShowingsList from './ShowingsList';
import ShowingsCreate from './ShowingsCreate';
import { ListGuesser, ShowGuesser } from 'react-admin';

import ShowingsEdit from './ShowingsEdit';
import ShowNotes from './ShowNotes';
import EventShowIcon from '@mui/icons-material/Preview';

const resource = {
  list: ShowingsList,
  show: ShowNotes,
  icon: EventShowIcon,
 // create: ShowingsCreate,
  edit: ShowingsEdit
};

export default resource;
