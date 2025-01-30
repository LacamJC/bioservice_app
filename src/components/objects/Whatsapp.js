import { FaWhatsapp } from "react-icons/fa6"
import styles from '../../assets/scss/objects/Whatsapp.module.css'
const Whatsapp = () =>{
    return(
        <>
            <a href="https://wa.me/+5511985322036?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20site%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es" target="_BLANK" title="Entrar em contato pelo Whatsapp">
                <FaWhatsapp className={`${styles.icone}`} />
            </a>
        </>
    )
}


export default Whatsapp