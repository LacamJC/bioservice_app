import styles from '../../assets/scss/pages/Contato.module.css'
import bioservice_logo from '../../assets/img/newLogo.webp'
import FormContato from '../objects/FormContato'
import { useEffect } from 'react'

import { MdEmail } from "react-icons/md"
import { FaFacebook, FaTwitter, FaInstagram, FaPhoneAlt,FaWhatsapp } from "react-icons/fa"

const Contato = () =>{
//    
// 
// 

// 
// 
// 

    return(
        <>
            <aside className={`${styles.banner}`} id='contato'>

                        <h2 className={`${styles.title}`}>
                            <span className={`${styles.t_1} `}>AGENDE </span> 
                            <br/>
                            <span className={`${styles.t_2} `}>SUA </span> 
                            <span className={`${styles.t_3} `}>COLETA</span>
                        </h2>

            </aside>
            <div className={`${styles.artigo}`}>
                        <div className={`${styles.contato}`}>
                            <div className={`${styles.header}`}>
                            
                            </div>
                            <div className={`${styles.body}`}>
                                <h2>Formulario para contato via Whatsapp</h2>
                                <p>Este formulario encaminha diretamente para nosso whatsapp as informações que precisamos para auxiliar nossos clientes da maneira mais eficiente</p>
                                <FormContato/>
                            </div>
                            <div className={`${styles.footer}`}>
                                <h3>Informações para contato</h3>
                                <div className={`${styles.contato_info}`}>
                                    {/* <h4>Telefone</h4> */}
                                    <ul className={`${styles.contato_listas}`}>
                                        <li><FaPhoneAlt className={`${styles.icon}`}/> (11) 29182-2949</li>
                                        <li><FaWhatsapp className={`${styles.icon}`}/> (11) 28174-2312</li>
                                    </ul>
                                    {/* <h4>Email</h4> */}
                                    <ul className={`${styles.contato_listas}`}>
                                        <li><MdEmail className={`${styles.icon}`}/> bioservice@contato.com</li>
                                    </ul>
                                    <h4>Redes Sociais</h4>
                                    <ul className={`${styles.contato_listas} ${styles.contato_listas_rede_social}`}>
                                        <li><FaInstagram className={`${styles.icon}`}/> @bioservicea</li>
                                        <li><FaFacebook className={`${styles.icon}`}/> @bioservicea</li>
                                        <li><FaTwitter className={`${styles.icon}`}/> @bioservicea</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    )
}

export default Contato