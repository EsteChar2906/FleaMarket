import Cards from './../../components/Cards/Cards.jsx'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import Pagination from '../../components/Pagination/Pagination.jsx'
// import styles from './Home.module.css'


function Home() {
  return (
    <main>
      <section>
        <div>
          <Header />
        </div>
      </section>
      <section>
        <Pagination />
      </section>
      <section>
        <div>
          <Cards />
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </main>
  )
}

export default Home
