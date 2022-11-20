import Cards from './../../components/Cards/Cards.jsx'
import FilterCat from '../../components/FilterCategory/FiltCat'
import FilterUsed from '../../components/FilterUsed/FilterUsed'
import './Home.css'
import NavBar from '../../components/NavBar/NavBar.jsx'
import { useSelector } from 'react-redux'

function Home() {
  return (
    <div>
      <div className="block__nav">
        <NavBar />
      </div>
      <div className='block__filters'>
        <FilterCat />
        <FilterUsed/>
      </div>
      <div >
        <Cards className='block__cards'/>
      </div>
    </div>
  )
}

export default Home
