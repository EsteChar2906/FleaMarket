import {Link} from 'react-router-dom';

function Landing(props) {
  return (
    <div>
      <header>
        <h1>Beinvenidos a FleaMarkek</h1>
        <h3>Contribuye a la economía circular y ahorra como loco</h3>
      </header>
      <Link to="/home">
        <button>Vamos</button>
      </Link>
    </div>
  )
}

export default Landing;