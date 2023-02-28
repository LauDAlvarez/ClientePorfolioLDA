
import './navBar.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
var elemento = document.getElementById("botonHome");



function NavBar() {
    let [botonHome, setBotonHome] = useState('< Dev={jr} />')
    const handleClick = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        sectionElement.scrollIntoView({ behavior: 'smooth' });
    };
    useEffect( ()=>{
        window.addEventListener("scroll", function () {

            var posicion = window.pageYOffset;
            if (posicion >= 900) {
                // Cambiar el contenido del elemento
                setBotonHome('< Lautaro David Alvarez nivel={jr} />');
            } else {
                // Restaurar el contenido original del elemento
                setBotonHome( '< Dev={jr} />');
            }
        })
    },[])
    return (
            <div className='contenedor-navbar'>  
                <ul className='contenedor-link'>
                    <Link className={'li-ul-link'}   onClick={()=>handleClick('idpresentacion')} to={'/'} exact='true' ><span  id='botonHome' className="button_top">{botonHome}</span></Link>
                    <Link className={'li-ul-link'} onClick={()=>handleClick('idsobremi')} to={'/sobremi'} exact='true'><span className="button_top">Sobre mi!</span></Link>
                </ul>
                <div className='nav-selector' />
                <ul className='contenedor-link'>
                    <Link className={'li-ul-link'} onClick={()=>handleClick('idconocimiento')} to={'/certificados'}  exact='true'><span className="button_top">Conocimientos</span></Link>
                    <Link className={'li-ul-link'} onClick={()=>handleClick('idskills')} to={'/skills'}  exact='true'><span className="button_top">Skills</span></Link>
                    <Link className={'li-ul-link'} onClick={()=>handleClick('idcontacto')} to={'/contacto'}  exact='true'><span className="button_top">Hablemos!</span></Link>
                </ul>
            </div>
    );
}

export default NavBar;


