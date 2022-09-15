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
import Setting from './Setting';
import Faqs from './Faqs';
import Showings from './Showings';
import Subscriptions from './Subscriptions';


import englishMessages from 'ra-language-english';
import polyglotI18nProvider from 'ra-i18n-polyglot';

import { Layout } from './layout';

const history = createHashHistory();

const englishCustomMessages = englishMessages;
englishCustomMessages.ra.message.invalid_form = 'Kindly fill out the missing fields';

const messages = {
    'en': englishCustomMessages,
};
const i18nProvider = polyglotI18nProvider(locale => messages[locale]);

const App = () => (
  <Admin
    i18nProvider={i18nProvider}
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
    <Resource name="setting" {...Setting} /> 
    <Resource name="faqs" {...Faqs} />
    <Resource name="showings" {...Showings} />
    <Resource name="subscriptions" {...Subscriptions} /> 

  </Admin>
);

export default App;
