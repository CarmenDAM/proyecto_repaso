import React from "react";
import ReactDOM from 'react-dom';
import styles from './Estilos.css';
import '../App.css';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';



function App() {
  return <Button variant="contained">Hello World</Button>,
         <Button variant="contained">Hello World</Button>;
         
}

export default class Gastos extends React.Component{

       
      render(){
        
        return (
                   
        <Box component="form" sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}noValidate autoComplete="off">

        <div className="fondoG">
                <h1 className="colorGastos">- GASTOS -</h1>
                <h2>Cantidad: </h2>
                <TextField id="cantidad" label="Cantidad" variant="standard" />
                <h2>Tipo: </h2>
                <TextField id="tipo" label="Tipo" variant="standard" />
                <h2>Descripción: </h2>
                <TextField id="descripción" label="Descripción" variant="standard" />
                <h2>Fecha: </h2>
                <h2>Moneda: </h2>

                <Button className="guardar" variant="contained" color="success">Guardar</Button>
                <Button variant="contained" color="error">Cancelar</Button>
                
        </div>
            </Box>
                );
                
                             
        }
  }


  