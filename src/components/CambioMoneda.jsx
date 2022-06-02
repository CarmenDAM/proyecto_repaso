import React from 'react';
//import './Estilos.css';
import './EstiloCambioMoneda.css';
import { BASE_API_URL } from '../data/Constants.js';
import axios from 'axios';
//import Vue from 'vue';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

//https://open.er-api.com/v6/latest/EUR

export default class CambioMoneda extends React.Component {

    constructor(props) {
        super(props);
        this.campoMoneda1 = React.createRef("");
        this.campoMoneda2 = React.createRef("");
               
      }
    
    render() {

       
        /*new Vue({
            el: '#app',
            data () {
              return {
                info: null
              }
            },
            mounted () {
              axios
                .get('https://open.er-api.com/v6/latest/EUR')
                .then(response => (this.info = response))
            }
          })*/

    return(
      
        <Box component="form" noValidate autoComplete="off">
        <div>

        <h2>Moneda: </h2>
            <TextField id="monedaConvertir" label="Moneda a Convertir" variant="standard" inputRef={this.campoMoneda1} />
            <Button id="convertir" variant="contained" type="button">Covetir</Button>

        <div>
            <TextField id="monedaConvertida" label="Moneda Convertida" variant="standard" inputRef={this.campoMoneda1} />
            </div>
      </div>
    </Box>
    
        
    );
    }
}