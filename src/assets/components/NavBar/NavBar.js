
import './navBar.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { IoMenu, IoSchool, IoPaperPlane, IoClose } from 'react-icons/io5'


function NavBar() {
    var [anchoVentana, setAnchoVentana] = useState(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth)
    let [botonHome, setBotonHome] = useState('< Dev={JR} Design={JR} />')
    let [toggleBurger, setToggleBurger] = useState(false)
    console.log(toggleBurger)
    const handleClick = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        sectionElement.scrollIntoView({ behavior: 'smooth' });
    };
    useEffect(() => {
        window.addEventListener('resize', function () {
            setAnchoVentana(this.window.innerWidth)
        });
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", function () {
            var posicion = window.pageYOffset;
            if (posicion >= 200) {
                setBotonHome('< Lautaro David Alvarez nivel={JR} />');
            } else {
                setBotonHome('< Dev={JR} Design={JR} />');
            }
        })
    }, [])
    return (
        <div className='contenedor-navbar'>
            <ul className={`contenedor-link ${anchoVentana < 800 ? 'invisible' : ''}`}>
                <Link className={'li-ul-link'} 
                    onClick={() => handleClick('idpresentacion')} 
                    to={'/'} exact='true' ><span id='botonHome' className="button_top">{botonHome}</span>
                </Link>
            </ul>
            <ul className={`contenedor-link ${anchoVentana < 800 ? 'invisible' : ''}`}>
                <Link className={'li-ul-link'}
                    onClick={() => handleClick('idconocimiento')}
                    to={'/certificados'} exact='true'><span
                        className="button_top"><IoSchool className='iconLink' />Cursos</span>
                </Link>
                <Link className={'li-ul-link'}
                    onClick={() => handleClick('idcontacto')}
                    to={'/contacto'} exact='true'><span
                        className="button_top"><IoPaperPlane className='iconLink' />Contacto</span>
                </Link>
            </ul>
            <div className={`contenedor-burger-navbar ${anchoVentana < 800 ? '' : 'invisible'} `}>
                <IoClose className={`li-ul-link ${toggleBurger ? '' : 'invisible'}`}
                    onClick={() => setToggleBurger(!toggleBurger)}
                />
                <IoMenu className={`li-ul-link ${toggleBurger ? 'invisible' : ''}`}
                    onClick={() => setToggleBurger(!toggleBurger)}
                />
                <ul className={`contenedor-link-brg ${!toggleBurger ? 'invisible ' : ''}`} >
                    <Link className={'li-ul-link'}
                        onClick={() => handleClick('idpresentacion')}
                        to={'/'}
                        exact='true'><span id='botonHome' className="button_top">{botonHome}</span>
                    </Link>
                    <Link className={'li-ul-link'}
                        onClick={() => handleClick('idconocimiento')}
                        to={'/certificados'}
                        exact='true'><span className="button_top">Cursos</span>
                    </Link>
                    <Link className={'li-ul-link'}
                        onClick={() => handleClick('idcontacto')}
                        to={'/contacto'} exact='true'><span
                            className="button_top">Contacto</span>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;


