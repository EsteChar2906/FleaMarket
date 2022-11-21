import { Redirect, Route } from "react-router";

const user = window.localStorage.getItem("user");

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest}>{user ? <Component /> : <Redirect to="/" />}</Route>
  );
};

export default PrivateRoute;