import React, { useEffect, useMemo } from "react"; 
import {useDispatch, useSelector} from "react-redux"
import Widget from "./Widget";
import './widget.css';
//instalar: npm i react-chartjs-2
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";
import {Bar} from "react-chartjs-2";
import { getProducts, getUsers} from "../../../store/actions/index";
import { useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const scores = [2500,4030,3000,4000,300,150,7300];
const labels = ["D1","D2","D3","D4","D5","D6","D7"]

const options = {
  fill: false,
  responsive: true,
  scales:{
    y: {
      min: 0,
    },
  },
  plugins:{ //para que aparesca o no el label arriba del grafico
    legend:{
      display: true,
    },
  },
};

const arrScore = [];
export default function Admin(){

  const dispatch = useDispatch();
  const products = useSelector(state => state.products); //tener la cantidad de productis 
  const users = useSelector(state => state.users);
  
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getUsers())
    // arrScore.push(arrPrice)
  },[dispatch])


  const arrPrice = localStorage.getItem("total_price");
  console.log(arrScore);
  
  // console.log(arrPrice);
  // const sumaPrice = () => {
  //   let priceTotal;
  //   for(let i = 0 ; i < arrPrice.length; i++){
  //     priceTotal = priceTotal + arrPrice[i];
  //   };
  //   return priceTotal;
  // }
  
  
  const allUsers = users.length; //para tener la cantidad de usuarios 
  

  const data = useMemo(function (){
    return{
      datasets: [
        {
          label: "Sales",
          data: scores,
          tension: 0.2,
          borderColor: "rgb(75,192,192)", //color 
          // pointRadius: 2, //tamaño del punto
          // pointBackgroundColor: "rgb(75,192,192)",
          backgroundColor: "rgb(75,192,192,0.3)",
        }
      ],
      labels
    };
  },[])
  return(
    <div className="container_admin">
      <div className="widget_box">
        <Widget type="earning" value={arrPrice}/>
        <Widget type="users" value={allUsers}/>
        <Widget type="products" value={products.limit} />
        <Widget type="sales" value={10}/>
      </div>
      <div className="container_bar">
        <Bar data={data} options={options}
        />
      </div>
    </div>
  )
}