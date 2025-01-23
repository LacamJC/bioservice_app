import styles from '../../assets/scss/layout/Header.module.css'
import logo from '../../assets/img/logo_completa.webp'
const Header = () =>{
    return(
        <>
            <header className={`${styles.cabecalho}`}>
            
                <img className={`${styles.logo}`} src={logo}/>

                <nav className={`${styles.navBar}`}>
                    <ul className={`${styles.navBar_list}`}>
                        <li className={`${styles.list_item}`}>Home</li>
                        <li className={`${styles.list_item}`}>Serviços</li>
                        <li className={`${styles.list_item}`}>Sobre Nós</li>
                        <li className={`${styles.list_item}`}>Contato</li>
{/* Instagram (Ícone/link para o Instagram) */}
                    </ul>
                </nav>

                <button className={`${styles.cta_coleta}`}>Solicite sua coleta</button>
            </header>
        </>
    )
}

export default Header