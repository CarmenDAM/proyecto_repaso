import React from 'react';
//import './Estilos.css';
import './EstiloCambioMoneda.css';
import { BASE_API_URL } from '../data/Constants.js';
import axios from 'axios';
//import Vue from 'vue';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { useEffect, useState } from "react";

//https://open.er-api.com/v6/latest/EUR

export default class CambioMoneda extends React.Component {

    constructor(props) {
        super(props);
        this.campoMoneda1 = React.createRef("");
        this.campoMoneda2 = React.createRef("");
               
      }
    
    render() {

            /*const [Moneda, setMoneda] = useState("");
            const handleClick = () => {
                fetchMoneda()
              }
            const fetchMoneda = () => {
              fetch("https://open.er-api.com/v6/latest/EUR")
                .then((response) => response.json())
                .then((data) => setMoneda(data.Moneda));
            }
            useEffect(() => {
                fetchMoneda()
            }, []); */


            
            


    return(
        
      <div>
        <Box component="form" noValidate autoComplete="off">
        <div>

            <div>
        <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel htmlFor="grouped-native-select">Moneda Original</InputLabel>
            <Select native defaultValue="" id="moneda1" label="moneda">
            <option aria-label="None" value="" />
            <optgroup label="Monedas:">
                <option value={1}>Moneda 1</option>
                <option value={2}>Moneda 2</option>
            </optgroup>
            
            </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel htmlFor="grouped-native-select">Moneda Convertida</InputLabel>
            <Select native defaultValue="" id="moneda2" label="moneda">
            <option aria-label="None" value="" />
            <optgroup label="Monedas:">
                <option value={1}>Moneda 1</option>
                <option value={2}>Moneda 2</option>
            </optgroup>
            
            </Select>
        </FormControl>
        </div>

            <div>
                <TextField id="monedaConvertir" label="Cantidad a Convertir" variant="standard" inputRef={this.campoMoneda1} />
                <Button id="convertir" variant="contained" type="button">Convetir</Button>
            </div>

            <div>
                <TextField id="monedaConvertida" label="Cantidad Convertida" variant="standard" inputRef={this.campoMoneda1} />
            </div>
      </div>


      {/*<div  className="App">
      <h3>Intento cargar API</h3>
      <hr />
      <h6>{Moneda}</h6>
      <hr />
      <button onClick= {() => handleClick()}>Prueba:</button>
         
    </div>*/}
      

      </Box>
  </div>
        
    );
    }
}

