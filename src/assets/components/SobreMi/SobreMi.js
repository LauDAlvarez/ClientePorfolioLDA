import './sobreMi.css'
import { motion }  from 'framer-motion';
import { useRef } from 'react';

function Sobremi(){
    const constraintsRef = useRef(null);
    return(
        <motion.div className='contenedor-sobremi' ref={constraintsRef} >
                <motion.div className='contenedor-experiencia' drag dragConstraints={constraintsRef} >
                    <h1>Mi Experiencia</h1>
                    <h3>Acutalmente me encuentro en la busqueda de mi primer trabajo como desarrollador junior, para poder juntar experiencia en un ambiente serio y de presion. Para mi es un desafio mas en mi carrera que me gustaria embarcarme si se me presenta la posibilidad. 
                    Me encuetro totalmente abierto a la oportunidad de recibir algun tipo de capacitacion.
                    </h3>
                </motion.div>
                <motion.div className='contenedor-estudio' drag dragConstraints={constraintsRef}>
                    <h1>Mi Estudio</h1>
                    <h3>Desde que comence en este mundo de la Programacion me sorprendio el alcance que uno puede lograr con simples lineas de codigo. Con ese pensamiento empece a capacitarme de manera autodidacta con video, foros, webs, entre un monton de sitios mas!
                    Gracias a la comunidad de FreeCodeCamp pude empezar a ver contenidos relacionados con el desarrollo web. Alli pude capacitarme y conseguir mis dos cetificados, el de "JavasCript y Estructura de datos"  y el de "Web Responsive Design".
                    Posterior a ambas certificaciones, decidi realizar un curso como "Desarrollador Full Stack" en DigitalHouse, para poder unificar e incorporar contenidos. El beneficio que le pude sacar al curso fue muy grato, ya que logre aprender a desenvolverme como desarrollador, a trabajar en equipo, pensar proyectos y resolver desafios que se fueron presentando a lo largo de la cursada, ademas pudo abrirme ampliamente en el conocimiento a nuevas tecnologias.</h3>
                </motion.div>
        </motion.div>
    );
}

export default Sobremi;
