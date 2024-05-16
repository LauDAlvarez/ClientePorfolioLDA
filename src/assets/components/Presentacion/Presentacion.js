import './presentacion.css'
import cv from '../../exports/CurriculumLautaroDavidAlvarezESP.pdf'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { IoLogoNodejs, IoLogoReact, IoLogoAngular, IoLogoHtml5, IoLogoCss3, IoLogoGithub, IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiMongodb, SiMysql, SiRetool, SiFigma, SiAdobeillustrator, SiAdobepremierepro, SiTypescript, SiAdobephotoshop } from "react-icons/si";

function Presentacion() {
    let [presentacion, setPresentacion] = useState(false)
    let [skills, setSkills] = useState([])
    let [proyectos, setProyectos] = useState([])
    const [hoveredItem, setHoveredItem] = useState(null);
    const icons = {
        1: <IoLogoJavascript />,
        2: <SiExpress />,
        3: <IoLogoNodejs />,
        4: <IoLogoReact />,
        5: <IoLogoAngular />,
        6: <SiMongodb />,
        7: <SiMysql />,
        8: <SiRetool />,
        9: <SiFigma />,
        10: <SiAdobeillustrator />,
        11: <SiAdobepremierepro />,
        12: <SiAdobephotoshop />,
        13: <SiTypescript />,
        14: <IoLogoGithub />,
        15: <IoLogoHtml5 />,
        16: <IoLogoCss3 />,
    }


    useEffect(() => {
        function handleClickOutside(event) {
            const cartaPresentacion = document.querySelector('.carta-presentacion');
            const btnPresentacion = document.querySelector('.btn-presentacion');

            if (
                cartaPresentacion &&
                !cartaPresentacion.contains(event.target) &&
                event.target !== btnPresentacion
            ) {
                setPresentacion(false);
            }
        }

        document.body.addEventListener('click', handleClickOutside);

        return () => {
            document.body.removeEventListener('click', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        axios
            .get('/skills')
            .then((response) => {
                setSkills(response.data);
            })
            .catch((e) => {
                console.log(e);
            })
        axios
            .get('/proyectos')
            .then(res => {
                setProyectos(res.data);
            })
            .catch(e => {
                console.log(e);
            })
    }, [])

    const handleMouseOver = (id) => {
        setHoveredItem(id);
    };

    const handleMouseOut = () => {
        setHoveredItem(null);
    };

    let sectionProyectos = proyectos.map((proyecto, i) => {
        return (
            <a className={`lista-proyectos proyectos-items ${hoveredItem === proyecto._id ? 'hovered' : 'noHovered'}`}
                onMouseOver={() => handleMouseOver(proyecto._id)}
                onMouseOut={handleMouseOut} href={proyecto.url} 
                target='_blank'>

                <li className='proyectos-items-contenido' 
                    key={proyecto._id}>
                    <h3>{proyecto.name}</h3>
                    <p>Grado de complejidad: {proyecto.NC}</p>
                </li>

            </a>
        );
    });

    let sectionSkill = skills.map((skill, i) => {
        const proyectosComunSkills = proyectos.some(proyecto => {
            return proyecto._id === hoveredItem && proyecto.skills.includes(skill.idRef);
        });
        return (

            <li className={`nombre-lista skills-items ${proyectosComunSkills ? 'skillCoincidencia' : 'related-skill'}`} 
                key={skill.id}>
                {skill.name}{icons[i + 1]}
            </li>
            
        )
    });

    return (
        <div className='body-presentacion' 
            id='presentacionContenedor'>

            <div className='contenedor-presentacion grid-item'>
                <h1>Lautaro David Alvarez</h1>
                <h3>{`\<DesarrolladorWebFullStack\n nivel={JR}\n \>`}</h3>
                <h3>{`\<DiseñadorUXUI\n nivel={JR}\n \>`}</h3>
            </div>
            <div className='animacion-presentacion grid-item'>
                <button onClick={() => setPresentacion(!presentacion)} 
                        className='btn-presentacion btn-formato'>{presentacion ? '-' : '+'}
                </button>
            </div>
            <div className='proyectos-presentacion grid-item'>
                <h2>Proyectos</h2>
                <ul>
                    {sectionProyectos}
                </ul>
            </div>
            <div className='skills-presentacion grid-item'>
                <h2>Skills</h2>
                <ul>
                    {sectionSkill}
                </ul>
            </div>
            <div className={`carta-presentacion ${presentacion ? 'activePresentacion' : ''}`} >
                <section className='seccion-presentacion'>
                    <div className='contenedor-titulo-presentacion'>
                        <h2 className='titulo-presentacion-carta'>Carta de Presentacion</h2>
                    </div>
                    <div className='contenedor-presentacion-contenido'>
                        <h3 className='presentacion-contenido-carta'>Soy una persona proactiva, organizada y responsable, con excelentes relaciones interpersonales. Me destaco por el buen trabajo en equipo, la rápida toma de decisiones en momentos de presión. Busco un puesto de desarrollador desafiante para continuar con mi carrera profesional.</h3>
                    </div>
                </section>
                <a href={cv} 
                    target='_blank' 
                    download="CurriculumLautaroDavidAlvarezESP.pdf"><button className='btn-descarga-cv'>Descargar Cv</button>
                </a>
            </div>

        </div>
    )
}

export default Presentacion