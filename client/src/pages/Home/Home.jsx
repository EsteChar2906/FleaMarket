import Cards from "./../../components/Cards/Cards.jsx";
import FilterCat from "../../components/FilterCategory/FiltCat";
import FilterUsed from "../../components/FilterUsed/FilterUsed";

import "./Home.css";
import { useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import "./Home.css";


function Home() {
  
  const { getAccessTokenSilently } = useAuth0();
  const conectApiByToken = async () => {
    try {
      const token = await getAccessTokenSilently();
      const apiReponse = await axios.get(`http://localhost:3001/api/getToken`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(token);
      return apiReponse.data;
    } catch (error) {
      return { message: error.message };
    }
  };

  useEffect(() => {
    conectApiByToken();
  }, []);

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
