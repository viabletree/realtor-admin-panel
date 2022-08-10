import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FaqsList from './FaqsList';
import FaqsCreate from './FaqsCreate';
import { ListGuesser,ShowGuesser } from 'react-admin';

import FaqsEdit from './FaqsEdit';
import ShowFaqs from './ShowFaqs';
import FaqsIcon from '@mui/icons-material/Quiz';


const resource = {
  list: FaqsList,
  show: ShowFaqs,
  icon: FaqsIcon,
  create: FaqsCreate,
  edit: FaqsEdit
};

export default resource;
