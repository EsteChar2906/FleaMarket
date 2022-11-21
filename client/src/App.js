import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Detail } from "./pages/Detail/Detail.jsx";
import Home from "./pages/Home/Home.jsx";
import Payment from "./components/Payment/Payment.jsx";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";
import Profile from "./pages/profile/Profile.jsx";
import ShopingCard from "./pages/ShopingCard/ShopingCard.jsx";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/detail/:id">
            <Detail />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

          {/*<Route path="/payment">
            <Payment />
          </Route>*/}

          <Route path="/shoping">
          <ShopingCard/>
          </Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
