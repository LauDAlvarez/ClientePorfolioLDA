import "./footer.css"
import { AiFillBehanceSquare, AiFillMail, AiFillGithub, AiOutlineWhatsApp, AiFillLinkedin} from 'react-icons/ai';

function Footer(){
    return(
        <section className="contenedor-footer">
            <h2>
                Mis medios de contacto
            </h2>
            <h2 className="contactos-contenedor-footer">
                <a className="item-footer" target="_blank" href=" mailto:lautarodalvarez@gmail.com?subject=Desarrollador%20FullStack%20y%20Diseñador%20UXUI&body=Hola%20Lautaro%20..."><AiFillMail /></a>
                <a className="item-footer" target="_blank" href="https://www.behance.net/lautaroalvarez11"><AiFillBehanceSquare /></a>
                <a className="item-footer" target="_blank" href="https://www.linkedin.com/in/lautarodalvarez/"><AiFillLinkedin /></a>
                <a className="item-footer" target="_blank" href="https://github.com/LauDAlvarez"><AiFillGithub /></a>
                <a className="item-footer" target="_blank" href="https://api.whatsapp.com/send?phone=543415414963"><AiOutlineWhatsApp /></a>
            </h2>
            <h4>Todos los derechos reservados 2024 ©LDA</h4>
        </section>
    )
}

export default Footer;