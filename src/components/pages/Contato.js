import styles from '../../assets/scss/pages/Contato.module.css'
import { MdEmail } from "react-icons/md"
import { FaFacebook, FaTwitter, FaInstagram, FaPhoneAlt,FaWhatsapp, FaLinkedin, FaMapMarkerAlt  } from "react-icons/fa"
import logo from '../../assets/img/logo_completa.webp'
import { useState } from 'react'

const Contato = () =>{

    const contato = {
        telefone : "(11) 98532-2036",
        telefone2: "+5511985322036",
        whatsapp: "(11) 98532-2036",
        whatsapp2: "5511985322036"

    }

        const email = 'contato@bioservice@gmail.com'
        const assunto = 'Vim pelo site da Bioservice'
        const corpoMensagem = 'Olá ! Gostaria de mais informações'

        const url_instagram = "https://www.instagram.com/bioservicea/"
        const url_facebook = "https://www.facebook.com/BioserviceA/"
        const url_twitter = ""
        const url_linkedin = "https://www.linkedin.com/company/bioservicea"

        const endereco = "Av. Maria Benedita Melo Lincoln, 220 - Parque Jandaia, Carapicuíba - SP, 06333-060"
        
        const url_endereco = "https://www.google.com/maps/dir//bioservice+ambiental+carapicuiba/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x94ceffd8dd45cedf:0xbbd2ec4d07d176b4?sa=X&ved=1t:3061&ictx=111"




    return(
        <>

        <article className={`${styles.contato} row w-100 container mx-auto`} id='contato'>
        <div className={`col col-md-4 col-12  d-flex justify-content-center align-items-start`}>
            <img src={logo} alt="Logo da Bioservice Ambiental Carapicuiba" width={"100%"}/>
        </div>

        <div className={`col col-md-8 col-12`}>
            <p className={`${styles.paragrafo}`}>
                Nos acompanhe em nossas redes sociais para mais informações, ou entre em contato para tirar suas dúvidas !
            </p>
            <div className={`${styles.contato_info}`}>
                <div className={`${styles.item}`}>
                    <h3><FaPhoneAlt/> Telefone</h3>
                    <ul>
                        <li>
                            <a href={contato.telefone} target='_BLANK'>
                                {contato.telefone} - Telefone
                            </a>
                        </li>
                        <li>
                            <a href={contato.whatsapp} target='_BLANK'>
                               {contato.whatsapp} - Whatsapp
                            </a>
                        </li>

                    </ul>
                </div>
                <div className={`${styles.item}`}>
                    <h3><FaMapMarkerAlt /> Endereço</h3>
                    <ul>
                        <li>
                            <a href={url_endereco} target='_BLANK'>
                                {endereco}
                            </a>
                        </li>
                    </ul>
                </div>
                <ul className={`${styles.redes_sociais}`}>
                    <li><a href={url_instagram} target='_BLANK'><FaInstagram/></a></li>
                    <li><a href={url_facebook} target='_BLANK'><FaFacebook/></a></li>
                    <li><a href={url_linkedin} target='_BLANK'><FaLinkedin/></a></li>
                </ul>
            </div>
        </div>
        </article>
        </>
    )
}

export default Contato