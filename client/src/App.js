import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Detail } from "./pages/Detail/Detail.jsx";
import Home from "./pages/Home/Home.jsx";
import Payment from "./components/Payment/Payment.jsx";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";
import Profile from "./pages/profile/Profile.jsx";
import ShopingCard from "./pages/ShopingCard/ShopingCard.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail/:id" component={Detail} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/payment" component={Payment} />
          <PrivateRoute path="/shoping" component={ShopingCard}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
