
import './navBar.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';



function NavBar() {
    let [botonHome, setBotonHome] = useState('< Dev={JR} Design={JR} />')
    const handleClick = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        sectionElement.scrollIntoView({ behavior: 'smooth' });
    };
    useEffect( ()=>{
        window.addEventListener("scroll", function () {

            var posicion = window.pageYOffset;
            if (posicion >= 200) {
                // Cambiar el contenido del elemento
                setBotonHome('< Lautaro David Alvarez nivel={JR} />');
            } else {
                // Restaurar el contenido original del elemento
                setBotonHome( '< Dev={JR} Design={JR} />');
            }
        })
    },[])
    return (
            <div className='contenedor-navbar'>  
                <ul className='contenedor-link'>
                    <Link className={'li-ul-link'}   onClick={()=>handleClick('idpresentacion')} to={'/'} exact='true' ><span  id='botonHome' className="button_top">{botonHome}</span></Link>
                </ul>
                <div className='nav-selector' />
                <ul className='contenedor-link'>
                    <Link className={'li-ul-link'} onClick={()=>handleClick('idconocimiento')} to={'/certificados'}  exact='true'><span className="button_top">Cursos</span></Link>
                    <Link className={'li-ul-link'} onClick={()=>handleClick('idcontacto')} to={'/contacto'}  exact='true'><span className="button_top">Contacto</span></Link>
                </ul>
            </div>
    );
}

export default NavBar;


