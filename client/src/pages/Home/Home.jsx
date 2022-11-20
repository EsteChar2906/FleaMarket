import Cards from "./../../components/Cards/Cards.jsx";
import FilterCat from "../../components/FilterCategory/FiltCat";
import FilterUsed from "../../components/FilterUsed/FilterUsed";
import "./Home.css";
import { useSelector } from "react-redux";



function Home() {


  return (
    <div>
      <div className="contenedor-filtros">
        <FilterCat />
        <FilterUsed />
      </div>
      <Cards />
    </div>
  );
}

export default Home;
