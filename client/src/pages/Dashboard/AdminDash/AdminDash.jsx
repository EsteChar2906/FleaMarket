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
import { getOrders, getProducts, getUsers} from "../../../store/actions/index";
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

// const scores = [2500,4030,3000,4000,300,150,7300];
const labels = ["S1","S2","S3","S4","S5","S6","S7","S8","S9","S10","S11","S12","S13"]

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
  const users = useSelector(state => state.users); //traer todos los usuarios
  const orders = useSelector(state => state.orders); //traer todo los ordenes
  
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getUsers());
    dispatch(getOrders());
  },[dispatch]);

  
  // const arrPrice = localStorage.getItem("total_price");
  const countSales = []
  const todoPrecio = orders.map(e => e.price);
  
  let gananciatotal = 0; 
  let contadorOrder = 0;
  for (let i = 0; i < todoPrecio.length; i++) {
    gananciatotal = gananciatotal + todoPrecio[i];
    contadorOrder++
    countSales.push("S" + contadorOrder.toString() );
  };
  
  // console.log(countSales);
  
  
  const allUsers = users.length; //para tener la cantidad de usuarios 
  

  const data = useMemo(function (){
    return{
      datasets: [
        {
          label: "Sales",
          data: todoPrecio,
          tension: 0.2,
          borderColor: "rgb(75,192,192)", //color 
          //pointRadius: 6, //tamaño del punto
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
        <Widget type="earning" value={gananciatotal}/>
        <Widget type="users" value={allUsers}/>
        <Widget type="products" value={products.limit} />
        <Widget type="sales" value={contadorOrder}/>
      </div>
      <div className="container_bar">
        <Bar data={data} options={options}
        />
      </div>
    </div>
  )
}