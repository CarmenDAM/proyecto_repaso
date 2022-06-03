import React, { useRef } from 'react';
import Boton from './Boton';
import { Container,Form } from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import { Users } from "./Users";
import './EstilosLogin.css';

export default function Login(){
  
  const history = useHistory();
  const nameInput = useRef();
  const pwdInput = useRef();

  /*
  //Quería incluir un mensaje de error en caso de loguearse con un usuario no registrado
  var popupWindow = null;
  constructor(url) {
    super(url);
  }

  function ventana(url) {
    popupWindow = window.open(url,'Usuario no registrado');
  }*/

  const logUser = () => {

    const user = Users.find(item => item.name === nameInput.current.value && item.password === pwdInput.current.value);

    if (user !== undefined) {
      localStorage.setItem('loggedIn', true);
      history.push("/home");
    } /*else  {
      ventana(url);
  }*/
}

  return (
    <>
     <h1>🔒 Inicio de sesión 🔒</h1>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label id="NUser">Nombre de usuario: </Form.Label>
            <Form.Control ref={nameInput} type="text" placeholder="Usuario" />
            <Form.Text className="text-muted"/>     
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label id="pass">Contraseña: </Form.Label>
            <Form.Control ref={pwdInput} type="password" placeholder="Contraseña" />
            </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check id="check" type="checkbox" label="Mantener la sesión iniciada" />
          </Form.Group>
          <Boton id="BotonLogin" text="Login" onClickButton={logUser} />
        </Form>
      </Container>
    </>
  );
}