import { useState } from 'react'
import './App.css'
import Saludo from './exercises/Ex01/saludo';
import Composicion from './exercises/Ex02/Composicion';
import Usuario from './exercises/Ex03/Usuario';
import PanelLogin from './exercises/Ex04/PanelLogin';
import RenderizarLista from './exercises/Ex05/RenderizarLista';
import ListaUsuarios from './exercises/Ex06/ListaUsuarios';


/* const usuarios = [
  { id: 1, nombre: "María" },
  { id: 2, nombre: "Juan" },
  { id: 3, nombre: "Laura" }
]; */

const usuarios = [
{ id: 1, nombre: 'Ana', activo: true },
{ id: 2, nombre: 'Carlos', activo: false },
{ id: 3, nombre: 'Sofía', activo: true }
];


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Saludo nombre="Juan"/> */}
      {/* <Composicion/> */}
      {/* <Usuario nombre="Ana" edad={28}/> */}
      {/* <PanelLogin logueado={true}/> */}
      {/* <RenderizarLista usuarios={usuarios}/> */}
      <ListaUsuarios usuarios={usuarios}/>




    </div>
  );
}

export default App
