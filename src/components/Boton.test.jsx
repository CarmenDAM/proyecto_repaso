import React from 'react';
//import '@testing-library/jest-dom/extend-expect';
import {fireEvent, render, prettyDOM} from '@testing-library/react';
import Boton from './Boton';

test('Tests unitarios boton', ()  => {
    // Definimos una función para pasar al botón
    //const funcionTest = () => {console.log("Test del botón")};
    // O mockeamos la función
    const funcionTest = jest.fn();
    const botonTest = render(<Boton text="Test del botón" onClickButton={funcionTest} />);

    // Mockeamos la consola 
    //console.log = jest.fn();
    // Testeando elemento
    const boton = botonTest.getByText("Test del botón");
    console.log(prettyDOM(boton));
    //.click();
    fireEvent.click(boton);
    expect(funcionTest).toHaveBeenCalledTimes(1);
    // Testeando llamada a la función del botón (imprime en consola)
    //expect(console.log.mock.calls[0][0]).toBe('Test del botón');

});
