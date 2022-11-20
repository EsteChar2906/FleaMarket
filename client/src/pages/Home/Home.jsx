import Cards from './../../components/Cards/Cards.jsx'
import './Home.css'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import Pagination from '../../components/Pagination/Pagination.jsx'
import { useSelector } from 'react-redux'

function Home() {
  return (
    <main>
      <section>
        <div className="block__nav">
          <Header />
        </div>
      </section>
      <section>
        <Pagination />
      </section>
      <section>
        <div>
          <Cards className="block__cards" />
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </main>
  )
}

export default Home
