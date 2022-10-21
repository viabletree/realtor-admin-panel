import { Admin, Resource, defaultTheme, Login } from "react-admin";
import { Route } from "@mui/icons-material";

import { createHashHistory } from "history";
import customDataProvider from "./providers/customDataProvider";
import authProvider from "./providers/authProvider";
import Users from "./Users";
import Properties from "./Properties";
import PropertyTypes from "./PropertyTypes";
import PropertyBuyers from "./PropertyBuyers";
import PropertySellers from "./PropertySellers";
import Notes from "./Notes";
import Setting from "./Setting";
import Faqs from "./Faqs";
import Showings from "./Showings";
import Subscriptions from "./Subscriptions";
import Reports from "./Reports";

import englishMessages from "ra-language-english";
import polyglotI18nProvider from "ra-i18n-polyglot";
import customRoutes from "./customRoutes";


import { Layout } from "./layout";
import MyLoginPage from "./Login";
import ForgotPassword from "./ForgotPassword";

const history = createHashHistory();

const englishCustomMessages = englishMessages;
englishCustomMessages.ra.message.invalid_form =
  "Kindly fill out the missing fields";

const messages = {
  en: englishCustomMessages,
};
const i18nProvider = polyglotI18nProvider((locale) => messages[locale]);

const App = () => (
  <Admin
    loginPage={MyLoginPage}
    i18nProvider={i18nProvider}
    dataProvider={customDataProvider}
    authProvider={authProvider}
    history={history}
    layout={Layout}
    customRoutes={customRoutes}

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
    <Resource name="reports" {...Reports} />
  </Admin>
);

export default App;
