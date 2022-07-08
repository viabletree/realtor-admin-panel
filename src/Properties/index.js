import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShowProperty from './ShowProperty';
import PropertyList from './PropertyList';
import { ListGuesser,ShowGuesser } from 'react-admin';
import PropertyCreate from './PropertyCreate';
import PropertyEdit from './PropertyEdit';
import CottageIcon from '@mui/icons-material/Cottage';

const resource = {
  list: PropertyList,
  show: ShowProperty,
  icon: CottageIcon,
  create: PropertyCreate,
  edit: PropertyEdit
};

export default resource;
