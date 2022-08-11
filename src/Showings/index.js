import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShowingsList from './ShowingsList';
import ShowingsCreate from './ShowingsCreate';
import { ListGuesser, ShowGuesser } from 'react-admin';

import ShowingsEdit from './ShowingsEdit';
import ShowNotes from './ShowNotes';
import EventNoteIcon from '@mui/icons-material/EventNote';

const resource = {
  list: ShowingsList,
  show: ShowNotes,
  icon: EventNoteIcon,
  create: ShowingsCreate,
  edit: ShowingsEdit
};

export default resource;
