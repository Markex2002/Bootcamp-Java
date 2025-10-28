import { useState } from 'react'
import './App.css'
import MensajePersonalizado from './exersices/Ex01/MensajePersonalizado'
import Tarjeta from './exersices/Ex02/Tarjeta'
import Cabecera from './exersices/Ex02/Cabecera'
import Panel from './exersices/Ex03/Panel'
import ToggleVisibilidad from './exersices/Ex04/ToggleVisibilidad'
import FormControlled from './exersices/Ex05/FormControlled'
import FormNoControlled from './exersices/Ex05/FormNoControlled'
import SelectorColor from './exersices/Ex06/SelectorColor'
import CajaColor from './exersices/Ex06/CajaColor'


function App() {
  const [count, setCount] = useState(0)
  const mensaje = useState("Tienes 3 mensajes nuevos");
  const [color, setColor] = useState("");

  return (
    <div>
      {
        //Ejercicio 1
        /* 
        <MensajePersonalizado color='green' texto='Hola me llamo hipopotamo'/> */


        //Ejercicio 2
        /*<Tarjeta>
          <Cabecera>Bienvenido a mi Tarjeta</Cabecera>
          <p className="mt-3 text-gray-700">
            Este es un ejemplo de composición en React usando la prop <code>children</code>.  
            Puedes colocar cualquier contenido dentro de la tarjeta.
          </p>
        </Tarjeta> */


        //Ejercicio 3
        //<Panel mensaje={mensaje}></Panel>


        //Ejercicio 4
        //<ToggleVisibilidad></ToggleVisibilidad>

        //Ejercicio5
        //<FormControlled></FormControlled>
        //<FormNoControlled></FormNoControlled>

        //Ejercicio6
        <>
        <CajaColor color={color} />
        <SelectorColor onColorChange={setColor} />
        </>
      }
    </div>
  )
}

export default App
