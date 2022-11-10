import Cards from './../../components/Cards/Cards.jsx';

//Dummy components
const Filter1 = () => <h1>Filtro por categoria</h1>
const Filter2 = () => <h1>Filtro por nuevo o usado</h1>

function Home() {
  return (
    <div>
      <Filter1 />
      <Filter2 />
      <Cards />
    </div>  
  )
}

export default Home;