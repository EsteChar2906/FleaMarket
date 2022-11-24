import { Redirect, Route } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import AuthContext from "../../context/authProvider";
import { useContext } from "react";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { userStorage } = useContext(AuthContext);
  const { user } = useAuth0();
  return (
    <Route {...rest}>
      {userStorage || user ? <Component /> : <Redirect to="/" />}
    </Route>
  );
};

export default PrivateRoute;
