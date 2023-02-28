import './presentacion.css'
import { useState, useEffect } from 'react'
import  axios  from 'axios';

function Presentacion(){
    let [presentacion, setPresentacion ] = useState(false)            
    let [ skill, setSkills ] = useState([])            
    let [certificados, setCertificados ] = useState([])   
    let utilidades = [];        
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

    useEffect( ()=>{
        axios
            .get('/certificados')
            .then( (response) => {
                setCertificados(response.data);
            })
            .catch( (e)=>{
                console.log(e);
            })
        axios
            .get('/conocimientos')
            .then( res =>{
                setSkills(res.data);
            })
            .catch( e =>{
                console.log(e);
            })
    },[])

    let sectionSkill = skill.map( (x , i) =>{
            return(
                <li className='nombre-lista' key={i}>{x.nombre}</li>
            )
    })
    let sectionCursos = certificados.map( (x , i) =>{
            return(
                <li className='nombre-lista' key={i}>{x.title}</li>
            )
    })
    
    

    return(
        <div className='body-presentacion'>
            <div className='contenedor-presentacion'>    
                <h1>Lautaro David Alvarez</h1>
                <h3>{`\<DesarrolladorWebFullStack\n nivel={jr}\n \>`}</h3>
            </div>
            <div className='animacion-presentacion'>
                <button onClick={() => setPresentacion(!presentacion)} className='btn-presentacion btn-formato'>+</button>
            </div>
            <div className={`carta-presentacion ${presentacion? 'activePresentacion':''}`} >
                <section className='seccion-presentacion'>
                    <div className='contenedor-titulo-presentacion'>
                        <h1>Resumen de PortFolio</h1>
                        <h3>{`\<DesarrolladorWebFullStack\n nivel={jr}\n \>`}</h3>
                    </div>
                    <div className='contenedor-presentacion-contenido'>
                        <div className='contenedor-cursos-presentacion' >
                            <h2>Cursos</h2>
                            <ul className='lista-cursos'>
                                {sectionCursos}
                            </ul>
                        </div>
                        <div className='contenedor-skill-presentacion'>
                            <h2>Skills</h2>
                            <ul className='lista-skill'>
                                {sectionSkill}
                            </ul>
                        </div>
                    </div>
                </section>
                <button className='btn-descarga-cv'>Descargar Cv</button>
            </div>
        </div>
    )
}

export default Presentacion