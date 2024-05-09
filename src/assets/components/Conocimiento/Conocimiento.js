import './conocimiento.css'
import imgs from '../../exports/exportImages'
import { useEffect, useState } from 'react';
import axios from 'axios'


function Conocimiento() {

    let [certificados, setCertificados] = useState([]);
    let [viewCertificado, setView] = useState(false);
    let [activeIndex, setActiveIndex] = useState(null);



    useEffect(() => {
        axios
            .get('/certificados')
            .then((response) => {
                setCertificados(response.data);

            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    let previewCertificado = certificados.map((certf, i) => {
        return (
            <li key={i}
                onClick={() => { setActiveIndex(i); setView(!viewCertificado) }}
                className={`boton-certificado ${activeIndex === i ? '' : 'unactiveBtn'}`}
            >
                <h3>{certf.name}</h3>
                <h4>{certf.reference}</h4>
            </li>
        );
    });

    function cardCertificacion() {
        let imgCert;
        let certificadoSelected;

        certificados.forEach((x, i) => {
            if (activeIndex === i) {
                certificadoSelected = x;
                imgs.forEach((img) => {
                    if (img.includes(x._id)) {
                        imgCert = img;
                    }
                })
            }
        })

        // if(certificadoSelected){
        //     let listHab = certificadoSelected.skills.toString().split(',');
        //     let seccionHabilidades = listHab.map( (x,i)=>{
        //         return (
        //             <li key={i} className='item-habilidad'>{x.name}</li>
        //         )
        //     })
        console.log(typeof imgCert)
        if (viewCertificado) {
            return (
                <div className="card-certificado">
                    <img src={imgCert} alt="Imagen de certificado" />
                    <div className='info-certificado'>
                        <div className='contenedor-info-certificado'>
                            <span>
                                <label>Titulo de Certificación </label>
                                <h1>{certificadoSelected.name}</h1>
                            </span>
                            <span>
                                <label>Sitio de Certificación </label>
                                <h3>{certificadoSelected.reference}</h3>
                            </span>
                            <span>
                                <label>Duración </label>
                                <h3>{certificadoSelected.duration}</h3>
                            </span>
                        </div>
                        <div className='contenedor-habilidades'>
                            <h1>Comentario</h1>
                            <ul className='contenedor-habilidades scroll-habilidades'>
                                <h3 className='comentario-certf'>{certificadoSelected.comment}</h3>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
    }
    // }

    return (
        <div className='contenedor-titulo-conocimiento'>
            <h2>Cursos</h2>
            <br></br>
            <br></br>
            <div className='contenedor-conocimiento'>
                <div className="contenedor-preview-certificado">
                    <ul>{previewCertificado}</ul>
                </div>
                <div
                    className={`vista-certificado ${viewCertificado ? 'activeView' : ''}`}
                >
                    {cardCertificacion()}
                    <button
                        className="cerrar-view"
                        onClick={() => { setView(false); setActiveIndex(null) }}
                    >X</button>
                </div>
            </div>
        </div>

    );
}


export default Conocimiento;

