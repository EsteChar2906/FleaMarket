import { useDispatch } from "react-redux";
import {
  sortByPrice
} from '../../store/actions/index.js';

const Sort = () => {
  const dispatch = useDispatch();

  const handleSort = (e) => {
    e.preventDefault();
    if(e.target.value === "Desorden"){
      dispatch(sortByPrice(""));
    }else{
      dispatch(sortByPrice(e.target.value))
    }
  };

  return (
    <div>
      <label htmlFor="sort">Sort by price: </label>
        <select id="sort" onChange={handleSort}>
          <option value="Desorden">---</option>
          <option value="asc">Min to Max</option>
          <option value="desc">Max to Min</option>
        </select>
    </div>
    )
}

export default Sort;