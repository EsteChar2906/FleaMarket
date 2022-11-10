import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import {Detail} from './components/Detail/Detail.jsx'
import Landing from './pages/Landing/Landing.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import "./App.css"


// Dummy components (They should be delete later)
// const NavBar = () => <h1>NavBar</h1>;
const Home = () => <h1>Home</h1>;
//const Detail = () => <h1>Detail</h1>;

function App() {
  return (

    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
