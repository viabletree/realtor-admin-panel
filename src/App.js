import { Admin, Resource, defaultTheme } from 'react-admin';

import { createHashHistory } from 'history';
import customDataProvider from './providers/customDataProvider';
import authProvider from './providers/authProvider';
import Users from './Users';
import Properties from './Properties';
import PropertyTypes from './PropertyTypes';
import PropertyBuyers from './PropertyBuyers';
import PropertySellers from './PropertySellers';
import Notes from './Notes';
import Showings from './Showings';

import { Layout } from './layout';

const history = createHashHistory();

// const theme = {
//   ...defaultTheme,
//   palette: {
//       type: 'dark', // Switching the dark mode on is a single property value change.
//   },
// };
const App = () => (
  <Admin
  
    dataProvider={customDataProvider}
    authProvider={authProvider}
    history={history}
    layout={Layout}
  >
    <Resource name="users" {...Users} />
    <Resource name="properties" {...Properties} />
    <Resource name="property_types" {...PropertyTypes} />
    <Resource name="property_buyers" {...PropertyBuyers} />
    <Resource name="property_sellers" {...PropertySellers} />
    <Resource name="notes" {...Notes} /> 
    <Resource name="showings" {...Showings} /> 
  </Admin>
);

export default App;
