import { Layout, Sidebar } from "react-admin";
import Menu from "./Menu";
import AppBar from "./AppBar";

const CustomSidebar = (props) => (
  <Sidebar {...props} size={200} className={"customSidebar"} open={true} />
);

const layout = (props) => {
  return (
    <Layout {...props} sidebar={CustomSidebar} menu={Menu} appBar={AppBar} />
  );
};
export default layout;
