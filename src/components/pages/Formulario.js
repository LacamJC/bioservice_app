import styles from '../../assets/scss/pages/Formulario.module.css'
import bioservice_logo from '../../assets/img/newLogo.webp'
import FormContato from '../objects/FormContato'
import { useEffect } from 'react'



const Formulario = () =>{
    return(
        <>
        <aside className={`${styles.banner}`} >

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
    
</div>
</div>
        </>
    )
}

export default Formulario