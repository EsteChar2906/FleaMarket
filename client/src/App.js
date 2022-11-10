import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

// Dummy components (They should be delete later)
const NavBar = () => <h1>NavBar</h1>;
const Home = () => <h1>Home</h1>;
const Detail = () => <h1>Detail</h1>;

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
