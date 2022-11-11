import Cards from './../../components/Cards/Cards.jsx';
import FilterCat from '../../components/FilterCategory/filtCat';
import FilterUsed from '../../components/FilterUsed/FilterUsed';
import "./Home.css"

//Dummy components
// const Filter1 = () => <h1>Filtro por categoria</h1>
// const Filter2 = () => <h1>Filtro por nuevo o usado</h1>

function Home() {
  return (
    <div>
      <div className='contenedor-filtros'>
        <FilterCat />
        <FilterUsed />
      </div>
      
      <Cards />
    </div>  
  )
}

export default Home;