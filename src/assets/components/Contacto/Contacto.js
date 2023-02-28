import './contacto.css'
import emailjs from 'emailjs-com';
import { useRef } from 'react'

function Contacto() {
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xmyiqn6', 'template_2ylnnd4', form.current, 'c0bEndgFwA0o4Mz9f')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });


    }
    return(
        <div className='contenedor-formulario'>
            <section>
                <div className='titulo-formulario'>
                    <h2> Hablemos!</h2>
                </div>
                <from ref={form} className='formHablemos' onSubmit={sendEmail}>
                    <div className='contenedor-info-formulario'>
                            <input type='text' id='fullName' placeholder='Nombre y Apellido'/>
                            <input type='text' id='affair' placeholder='Asunto'/>
                            <input type='email' id='email' placeholder='Mail'/>
                            <textarea  id='message' placeholder='En que puedo ayudarte?' />    
                    </div>
                    <button type='submit' className='buttonForm'> Enviar </button>
                </from>
            </section>
            
        </div>
    );
}

export default Contacto;
