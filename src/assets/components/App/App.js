import {  BrowserRouter } from 'react-router-dom';
import Conocimiento from '../Conocimiento/Conocimiento';
import NavBar from '../NavBar/NavBar';
import Presentacion from '../Presentacion/Presentacion';
import './app.css';
import Footer from '../Footer/footer';



function App() {

  return (
    <BrowserRouter>
      <div className="contenedor-app">
        <NavBar/>
        <div className='contenedor-de-componentes '>
          <div className='contenedor-componente con-pre' 
            id='idpresentacion'><Presentacion/>
          </div>
          <div className='contenedor-componente'  
            id='idconocimiento'><Conocimiento/>
          </div>
        </div>
        <div id='idcontacto' >
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;


