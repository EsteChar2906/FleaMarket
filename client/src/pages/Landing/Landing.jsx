import {Link} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {loadProducts} from '../../actions/index';

function Landing(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <header>
        <h1>Beinvenidos a FleaMarkek</h1>
        <h3>Contribuye a la economía circular y ahorra como loco</h3>
      </header>
      <Link to="/home">
        <button onClick={() => dispatch(loadProducts())}>Vamos</button>
      </Link>
    </div>
  )
}

export default Landing;