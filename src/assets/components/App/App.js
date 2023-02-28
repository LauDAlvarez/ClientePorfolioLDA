import {  BrowserRouter } from 'react-router-dom';
import Conocimiento from '../Conocimiento/Conocimiento';
import Contacto from '../Contacto/Contacto';
import NavBar from '../NavBar/NavBar';
import Presentacion from '../Presentacion/Presentacion';
import Skills from '../skills/Skills';
import Sobremi from '../SobreMi/SobreMi';
import './app.css';



function App() {
 
  return (
    <BrowserRouter>
      <div className="contenedor-app">
        <NavBar/>
        <div className='contenedor-de-componentes'>
          <div className='contenedor-componente' id='idpresentacion'>
            <Presentacion/>
          </div>
          <div className='contenedor-componente'  id='idsobremi'>
            <Sobremi/>
          </div>
          <div className='contenedor-componente'  id='idconocimiento'>
            <Conocimiento/>
          </div>
          <div className='contenedor-componente'  id='idskills'>
            <Skills/>
          </div>
          <div className='contenedor-componente'  id='idcontacto'>
            <Contacto/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;


