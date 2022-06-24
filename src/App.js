import { Admin, Resource, defaultTheme } from 'react-admin';

import { createHashHistory } from 'history';
import customDataProvider from './providers/customDataProvider';
import authProvider from './providers/authProvider';
import Users from './Users';
import Properties from './Properties';
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
    history={history}
    layout={Layout}
  >
    <Resource name="users" {...Users} />
    <Resource name="properties" {...Properties} />
  </Admin>
);

export default App;
