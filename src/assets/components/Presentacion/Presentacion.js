import './presentacion.css'
import { useState, useEffect } from 'react'
import axios from 'axios';

function Presentacion() {
    let [presentacion, setPresentacion] = useState(false)
    let [skills, setSkills] = useState([])
    let [proyectos, setProyectos] = useState([])
    let [certificados, setCertificados] = useState([])
    const [hoveredItem, setHoveredItem] = useState(null);

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
            .get('/certificados')
            .then((response) => {
                setCertificados(response.data);
            })
            .catch((e) => {
                console.log(e);
            })
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
            onMouseOut={handleMouseOut} href={proyecto.url} target='_blank'>
                <li className='proyectos-items-contenido' key={i}>
                    <h3>{proyecto.name}</h3>
                    <p>Grado de complejidad: {proyecto.NC}</p>
                </li>
            </a>

        );
    });

    let sectionSkill = skills.map((skill, i) => {
        const isRelatedToHighlightedProject = proyectos.some(proyecto => {
            console.log(proyecto.skills.includes(skill.idRef))
            return proyecto._id === hoveredItem && proyecto.skills.includes(skill.idRef);
        });

        return (
            <li className={`nombre-lista skills-items ${isRelatedToHighlightedProject ? '' : 'related-skill'}`} key={i}>
                {skill.name}
            </li>
        )
    });

    let sectionCursos = certificados.map((x, i) => {
        return (
            <li className='nombre-lista' key={i} >{x.name}</li>
        )
    })

    return (
        <div className='body-presentacion grid-container' id='presentacionContenedor'>

            <div className='contenedor-presentacion grid-item'>
                <h1>Lautaro David Alvarez</h1>
                <h3>{`\<DesarrolladorWebFullStack\n nivel={JR}\n \>`}</h3>
                <h3>{`\<DiseñadorUXUI\n nivel={JR}\n \>`}</h3>
            </div>

            <div className='animacion-presentacion grid-item'>
                <button onClick={() => setPresentacion(!presentacion)} className='btn-presentacion btn-formato'>{presentacion ? '-' : '+'}</button>
            </div>

            <div className='proyectos-presentacion grid-item'>
                <ul>
                    {sectionProyectos}
                </ul>
            </div>

            <div className='skills-presentacion grid-item'>
                <ul>
                    {sectionSkill}
                </ul>
            </div>

            <div className={`carta-presentacion ${presentacion ? 'activePresentacion' : ''}`} >

                <section className='seccion-presentacion'>
                    <div className='contenedor-titulo-presentacion'>
                        <h1>Carta de Presentacion</h1>
                    </div>

                    <div className='contenedor-presentacion-contenido'>
                        <h3>Soy una persona proactiva, organizada y responsable, con excelentes relaciones interpersonales. Me destaco por el buen trabajo en equipo, la rápida toma de decisiones y el manejo de la presión. Busco un puesto de desarrollador desafiante para continuar con mi carrera profesional.</h3>
                    </div>

                </section>
                <button className='btn-descarga-cv'>Descargar Cv</button>

            </div>
        </div>
    )
}

export default Presentacion