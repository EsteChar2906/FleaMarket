import Cards from './../../components/Cards/Cards.jsx'
import './Home.css'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import Pagination from '../../components/Pagination/Pagination.jsx'


function Home() {
  return (
    <main>
      <section>
        <div className="block__nav">
          <Header />
        </div>
      </section>
      <section className="block__pagination">
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
