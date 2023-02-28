import './conocimiento.css'
import imgs from '../../exports/exportImages'
import fondoCert from '../../exports/exportImageConocimiento'
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
                onClick={() => { setActiveIndex(i); setView(!viewCertificado)}} 
                className={`boton-certificado ${activeIndex === i ? '' : 'unactiveBtn'}`} 
            >
                <h2>{certf.title}</h2>
                <h4>{certf.reference}</h4>
            </li>
        );
    });

    function cardCertificacion(){
        let imgCert;
        let certificadoSelected;
        let listadoHabilidades = []
        
        certificados.forEach( (x,i)=>{
            if(activeIndex === i){
                certificadoSelected = x;
                imgs.forEach((img)=>{
                    if(img.includes(x._id)){
                        imgCert = img;
                    }
                })
            }  
        })


        
        
        if(certificadoSelected){
            let listHab = certificadoSelected.contenido.toString().split(',');
            let seccionHabilidades = listHab.map( (x,i)=>{
                return (
                    <li key={i} className='item-habilidad'>{x}</li>
                )
            })
        
        



            if(viewCertificado){
                return (
                    <div className="card-certificado">
                        <img src={imgCert} alt="Imagen de certificado" />
                        <div className='info-certificado'>
                            <div>
                                <p>
                                    <label>Titulo de Certificacion </label>
                                    <h1>{certificadoSelected.title}</h1>
                                </p>
                                <p>
                                    <label>Sitio de Certificacion </label>
                                    <h2>{certificadoSelected.reference}</h2>
                                </p>
                                <p>
                                    <label>Fecha de Finalizacion </label>
                                    <h2>{certificadoSelected.finish}</h2>
                                </p> 
                            </div>
                            <div className='contenedor-habilidades'>
                                <h1>Conocimiento</h1>
                                <ul className='contenedor-habilidades scroll-habilidades'>
                                    {seccionHabilidades}
                                </ul>
                            </div>
                        </div>
                    </div>
                    )
                }
            }
        }
    return (
        <div className='contenedor-conocimiento'>
            <div className="contenedor-preview-certificado">
                <ul>{previewCertificado}</ul>
            </div>
            <div 
            className={`vista-certificado ${viewCertificado? 'activeView' : ''}`}
            >
                { cardCertificacion() }
                <button 
                className="cerrar-view" 
                onClick={() => {setView(false); setActiveIndex(null)}}
                >X</button>
            </div>
        </div>
    );
}


export default Conocimiento;

