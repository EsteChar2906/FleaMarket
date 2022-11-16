import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Detail } from "./pages/Detail/Detail.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./pages/Home/Home.jsx";
import Profile from "./components/Profile/Profile.jsx";
import "./App.css";
import { FormUser } from "./components/FormUser/FormUser.jsx";
import Landing from "./pages/Landing/Landing.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

        <Route exact path="/">
            <Landing />
          </Route>

          <Route exact path="/profileUser">
            <Profile />
          </Route>

          <Route path="/home">
            <NavBar />
            <Home />
          </Route>

          <Route path="/detail/:id">
            <NavBar />
            <Detail />
          </Route>

          <Route exact path="/FormUser">
            <FormUser />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
