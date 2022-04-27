import React from "react";
import ReactDOM from 'react-dom';
import styles from './Estilos.css';

import Button from '@mui/material/Button';

function App() {
  return <Button variant="contained">Hello World</Button>;
}

export default class Transacciones extends React.Component{

       
      render(){
        
        return <div>
                <h1 className="colorTransacciones">TRANSACCIONES</h1>
                <Button variant="contained" color="primary">TRANSACCIONES</Button>
                </div>
        }
  }