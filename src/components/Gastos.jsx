import React from 'react';
import styles from './Estilos.css';
import '../App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import './EstiloGastos.css';
import ListaDesplegable from './ListaDesplegable';

export default class Gastos extends React.Component{

  constructor(props) {
    super(props);
    this.campoCantidad = React.createRef("");
    this.campoTipo = React.createRef("");
    this.campoDescripcion = React.createRef("");
    this.campoFecha = React.createRef("");
    this.state={listaGastos: []};
  }

  lecturaValor() {
    
    let listaActual=this.state.listaGastos;
    listaActual.push(this.campoCantidad.current.value, this.campoTipo.current.value, this.campoDescripcion.current.value, this.campoFecha.current.value);
    this.setState({listaGastos: listaActual});
    console.log(listaActual);

    console.log("Cantidad introducida: " + this.campoCantidad.current.value);
    console.log("Tipo introducido: " + this.campoTipo.current.value);
    console.log("Descripcion introducida: " + this.campoDescripcion.current.value);
    console.log("Fecha introducida: " + this.campoFecha.current.value);

  }

      render(){

        return (
                
        /*function MaterialUIPickers() {
        const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
                              
        const handleChange = (newValue) => {
        setValue(newValue);
        };*/


        //ESTO VA EN "Fecha:"
        /*
        <LocalizationProvider dateAdapter={AdapterDateFns}>
                   <Stack spacing={3}>
                     <DesktopDatePicker
                        label="Date desktop"
                        inputFormat="MM/dd/yyyy"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                     />
                   </Stack>
                </LocalizationProvider>
        */


        <Box component="form" sx={{
        '& > :not(style)': { m:1,  width: '45ch' },
      }}noValidate autoComplete="off">

        <div className="fondoG">
         
                <h1 className="colorGastos">- GASTOS -</h1>

                <h2>Cantidad: </h2>
                <TextField id="cantidadG" label="Cantidad" variant="standard" inputRef={this.campoCantidad}/>
                
                <h2>Tipo: </h2>
                <TextField id="tipoG" label="Tipo" variant="standard" inputRef={this.campoTipo}/>

                <h2>Descripción: </h2>
                <TextField id="descripcionG" label="Descripción" variant="standard" inputRef={this.campoDescripcion}/>

                <h2>Fecha: </h2>
                <TextField id="fechaG" label="Fecha" variant="standard" inputRef={this.campoFecha}/>
                
                <h2>Moneda: </h2>
                <ListaDesplegable/>
  
                <Button className="guardar" variant="contained" color="success" type="button" onClick={this.lecturaValor.bind(this)}>Guardar</Button>
                <Button variant="contained" color="error">Cancelar</Button>

        </div>

        <div className="lista">     
            
                <p>
                    Aquí irían los datos de las transacciones:
                </p>

                                  
                  {this.state.listaGastos.map( 
                    function muestraCantidad(elemento) {
                      return (
                        <div>Cantidad: {elemento}</div>,
                        <div>Tipo: {elemento}</div>,
                        <div>Descripción: {elemento}</div>,
                        <div>Fecha: {elemento}</div>
                      );
                    }
                    )
                  
                  }

              
        
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


