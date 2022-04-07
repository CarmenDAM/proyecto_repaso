import React from "react";
import './MiPrimerComponenteClase.css';

export default class MiPrimerComponenteClase extends React.Component{

constructor(props){
  super(props);
  this.nombre=props.nombre;
  this.apellido=props.apellido;
  this.color=props.color;
}

  render(){
    return(
        <div className={this.color}>
          <h2>Este es un componente en forma de clase {this.nombre} {this.apellido}</h2>
        </div>
    );
  }
}
