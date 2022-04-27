import React from "react";
import ReactDOM from 'react-dom';
import styles from './Estilos.css';

import Button from '@mui/material/Button';

function App() {
  return <Button variant="contained">Hello World</Button>;
}

export default class Ingresos extends React.Component{

       
      render(){
        
        return <div>
                <h1 className="colorIngresos">+ INGRESOS +</h1>
                <Button variant="contained" color="success">INGRESOS</Button>
                </div>
        }
  }