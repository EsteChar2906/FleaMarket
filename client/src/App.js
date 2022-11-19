import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Detail } from "./pages/Detail/Detail.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./pages/Home/Home.jsx";
import Payment from "./components/Payment/Payment.jsx";
import Landing from "./pages/Landing/Landing.jsx";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>

          <Route path="/home">
            <NavBar />
            <Home />
          </Route>

          <Route path="/detail/:id">
            <NavBar />
            <Detail />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/payment">
            <Payment />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
