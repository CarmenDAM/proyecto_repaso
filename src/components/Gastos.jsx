import React from "react";
import ReactDOM from 'react-dom';
import styles from './Estilos.css';

import Button from '@mui/material/Button';

function App() {
  return <Button variant="contained">Hello World</Button>,
         <Button variant="contained">Hello World</Button>;
}

export default class Gastos extends React.Component{

       
      render(){
        
        return <div>
                <h1 className="colorGastos">- GASTOS -</h1>
                <h2>Cantidad: </h2>
                <h2>Tipo: </h2>
                <h2>Descripción: </h2>
                <h2>Fecha: </h2>
                <h2>Moneda: </h2>
                <Button className="guardar" variant="contained" color="success">Guardar</Button>
                <Button variant="contained" color="error">Cancelar</Button>
                </div>
        }
  }


  