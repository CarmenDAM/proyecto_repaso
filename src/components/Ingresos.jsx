import React from 'react';
import styles from './Estilos.css';
import '../App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import './EstiloIngresos.css';
import ListaDesplegable from './ListaDesplegable';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default class Ingresos extends React.Component {

  constructor(props) {
    super(props);
    this.campoCantidad = React.createRef("");
    this.campoTipo = React.createRef("");
    this.campoDescripcion = React.createRef("");
    this.campoFecha = React.createRef("");
    this.state = { listaIngresos: [] };
  }

  lecturaValor() {

    let listaActual = this.state.listaIngresos;
    listaActual.push({
      cantidad: this.campoCantidad.current.value,
      tipo: this.campoTipo.current.value,
      descripcion: this.campoDescripcion.current.value,
      fecha: this.campoFecha.current.value,
      /*moneda: this.campoMoneda.current.value*/
    });
    this.setState({ listaIngresos: listaActual });
    console.log(listaActual);

  }

  render() {

    return (


      <Box component="form" noValidate autoComplete="off">
        {/*sx={{
        '& > :not(style)': { m:1,  width: '45ch' },
      }}*/}
        <div className="fondoI">

          <h1 className="colorIngresos">+ INGRESOS +</h1>

          <h2>Cantidad: </h2>
          <TextField id="cantidadI" label="Cantidad" variant="standard" inputRef={this.campoCantidad} />

          <h2>Tipo: </h2>
          <TextField id="tipoI" label="Tipo" variant="standard" inputRef={this.campoTipo} />

          <h2>Descripción: </h2>
          <TextField id="descripcionI" label="Descripción" variant="standard" inputRef={this.campoDescripcion} />

          <h2>Fecha: </h2>
          <TextField id="fechaI" label="Fecha" variant="standard" inputRef={this.campoFecha} />

          <h2>Moneda: </h2>
          <ListaDesplegable />

          <Button className="guardar" variant="contained" color="success" type="button" onClick={this.lecturaValor.bind(this)}>Guardar</Button>
          <Button variant="contained" color="error">Cancelar</Button>

        </div>

        <div className="lista">

          <p>Lista de ingresos:</p>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Cantidad</TableCell>
                  <TableCell align="right">Tipo</TableCell>
                  <TableCell align="right">Descripción</TableCell>
                  <TableCell align="right">Fecha</TableCell>
                  {/*<TableCell align="right">Moneda</TableCell>*/}
                </TableRow>
              </TableHead>
              <TableBody>

                {this.state.listaIngresos.map((elemento) => (
                  <TableRow
                    key={elemento.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">{elemento.cantidad}</TableCell>
                    <TableCell align="right">{elemento.tipo}</TableCell>
                    <TableCell align="right">{elemento.descripcion}</TableCell>
                    <TableCell align="right">{elemento.fecha}</TableCell>
                    {/*<TableCell align="right">{elemento.moneda}</TableCell>*/}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>


        </div>

      </Box>


    );
  }
}


