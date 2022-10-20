import logoImage from "./assets/logo.svg";

const paperStyle = { padding: 20, width: 280, margin: "0 auto" };
const avatarStyle = { backgroundColor: "#41AF9A" };
const btnStyle = {
  margin: "8px 0",
  backgroundColor: "rgb(33 32 71)",
  color: "#fff",
};
const gridStyle = {
  display: "flex",
  minHeight: "100vh",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "flex-start",
  backgroundColor: "rgb(33 32 71)",
};
const logo = <img src={logoImage} width="100" height="50" />;

export { paperStyle, avatarStyle, btnStyle, gridStyle, logo };
