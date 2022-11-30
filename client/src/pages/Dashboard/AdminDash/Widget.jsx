import React from "react";
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp} from "@fortawesome/free-solid-svg-icons";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBillTrendUp } from "@fortawesome/free-solid-svg-icons";
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import './wid.css';

const Widget = ({ type,value }) => {

  let data;

  //temporary
  const amount = 100
  const diff = 20
  switch(type){
    case "earning":
      data={
        title: "EARNING",
        isMoney: true,
        link: "last_pay",
        icon: (
          <FontAwesomeIcon icon={faMoneyBillTrendUp} style={{
            color: "goldenrod",
            backgroundColor: "rgba(218, 165, 32, 0.2)",
            borderRadius: "5px",
          }}/>
        ),
        val: value,
      };
    break;
    case "users":
      data={
        title: "USERS",
        isMoney: false,
        link: "user",
        icon: (
          <FontAwesomeIcon icon={faUser} style={{
            color: "crimson",
            backgroundColor: "rgba(255, 0, 0, 0.2)",
            borderRadius: "5px",
            
          }}/>
        ),
        val: value,
      };
    break;
    case "products":
      data={
        title: "PRODUCTS",
        isMoney: false,
        link: "total_product",
        icon: (
          <FontAwesomeIcon icon={faTags} style={{
            color: "green",
            backgroundColor: "rgba(0, 128, 0, 0.2)",
            borderRadius: "5px",
            
          }}/>
        ),
        val: value,
      };
    break;
    case "sales":
      data={
        title: "SALES",
        isMoney: false,
        link: "sales",
        icon: (
          <FontAwesomeIcon icon={faSackDollar} style={{
            color: "purpule",
            backgroundColor: "rgba(128, 0, 128, 0.2)",
            borderRadius: "5px",
            
          }}/>
        ),
        val: value,
      };
    break
    default:
      break;
  }



  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"}{data.val}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive"> 
        <FontAwesomeIcon icon={faChevronUp} />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  )
};

export default Widget