import styles from '../../assets/scss/layout/Header.module.css'
import logo from '../../assets/img/newLogo.webp'
import { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci"
const Header = () =>{

    const [showMenu, setShowMenu] = useState(true)

    const handleChange = () =>{
        
        setShowMenu(!showMenu)

    }
  
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

                {/* HIDDEN MENU (Para telas menores que 920px) */}
               

                <nav className={`${styles.hidden_navBar} ${showMenu?`${styles.show}`:`${styles.hidden}`}`}>
                <ul className={`${styles.navBar_list} `}>
                        <li className={`${styles.list_item}`}>Home</li>
                        <li className={`${styles.list_item}`}>Serviços</li>
                        <li className={`${styles.list_item}`}>Sobre Nós</li>
                        <li className={`${styles.list_item}`}>Contato</li>
{/* Instagram (Ícone/link para o Instagram) */}
                    </ul>
                </nav>
                <div className={`${styles.menu_controls}`}>
                    <input type={"checkbox"} onChange={handleChange} id='checkbox' className={`${styles.checkbox_menu}`}></input>
                    <CiMenuBurger className={`${styles.burguer_icon}`} />
                </div>
            </header>
        </>
    )
}

export default Header