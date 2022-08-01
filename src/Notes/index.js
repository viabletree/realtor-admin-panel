import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotesList from './NotesList';
import NotesCreate from './NotesCreate';
import { ListGuesser,ShowGuesser } from 'react-admin';

import NotesEdit from './NotesEdit';
import ShowNotes from './ShowNotes';
import EventNoteIcon from '@mui/icons-material/EventNote';

const resource = {
  list: NotesList,
  show: ShowNotes,
  icon: EventNoteIcon,
  create: NotesCreate,
  edit: NotesEdit
};

export default resource;
