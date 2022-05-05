import React from 'react';

import styles from './Estilos.css';
import '../App.css';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


import ListaDesplegable from './ListaDesplegable';




function App() {
  return <Button variant="contained">Hello World</Button>,
         <Button variant="contained">Hello World</Button>;
         
}


/*const currencies = [
  {value: 'USD',
    label: '$',
  },
  {value: 'EUR',
    label: '€',
  },
  {value: 'BTC',
    label: '฿',
  },
  {value: 'JPY',
    label: '¥',
  },
];*/



export default class Gastos extends React.Component{

      render(){
        
        return (
        
        <Box component="form" sx={{
        '& > :not(style)': { m:1,  width: '25ch' },
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
                <ListaDesplegable/>
  
                <Button className="guardar" variant="contained" color="success">Guardar</Button>
                <Button variant="contained" color="error">Cancelar</Button>

        </div>

        <div className="lista">     
            
                <p>
                    Aquí irían los datos de las transacciones:
                </p>
        
        
                <p>
                    Un soneto me manda hacer Violante
                    que en mi vida me he visto en tanto aprieto;
                    catorce versos dicen que es soneto;
                    burla burlando van los tres delante.

                    Yo pensé que no hallara consonante,
                    y estoy a la mitad de otro cuarteto;
                    mas si me veo en el primer terceto,
                    no hay cosa en los cuartetos que me espante.

                    Por el primer terceto voy entrando,
                    y parece que entré con pie derecho,
                    pues fin con este verso le voy dando.

                    Ya estoy en el segundo, y aun sospecho
                    que voy los trece versos acabando;
                    contad si son catorce, y está hecho.
                </p>
              
          </div>
            
        </Box>

                );  
        }
  }

