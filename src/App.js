import { Admin, Resource, defaultTheme } from 'react-admin';

import { createHashHistory } from 'history';
import customDataProvider from './customDataProvider';
import authProvider from './providers/authProvider';
import Users from './Users';
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
    // theme={theme}
    authProvider={authProvider}
    dataProvider={customDataProvider}
    history={history}
    layout={Layout}
  >
    <Resource name="users" {...Users} />
  </Admin>
);

export default App;
