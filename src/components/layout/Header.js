import styles from '../../assets/scss/layout/Header.module.css'
import logo from '../../assets/img/newLogo.webp'
import { useState } from 'react'

import { CiMenuBurger } from "react-icons/ci"
const Header = () =>{

    const [showMenu, setShowMenu] = useState(true)

    const handleChange = () =>{
        
        setShowMenu(!showMenu)

    }

    const closeMenu = () =>{
        document.getElementById('checkbox').checked = false
        setShowMenu(!document.getElementById('checkbox').checked)
    }
    
 

  
    
    return(
        <>
            <header className={`${styles.cabecalho}`}>
            
                
                <img className={`${styles.logo}`} src={logo} width={'80%'}/>

                <nav className={`${styles.navBar}`}>
                    <ul className={`${styles.navBar_list}`} >
                        <li className={`${styles.list_item}`} >
                            <a href="#home"  className={`${styles.list_link}`}>Home</a>
                            <span className={`${styles.line}`}></span>
                        </li>
                        <li className={`${styles.list_item}`} id="teste">
                            <a href="#servicos"className={`${styles.list_link}`}>Serviços</a>
                            <span className={`${styles.line}`}></span>
                        </li>
                        <li className={`${styles.list_item}`} >
                            <a href="#sobreNos"  className={`${styles.list_link}`}>Sobre Nós</a>
                            <span className={`${styles.line}`}></span>
                        </li>
                        <li className={`${styles.list_item}`} >
                            <a href="#contato"  className={`${styles.list_link}`}>Contato</a>
                            <span className={`${styles.line}`}></span>
                        </li>
{/* Instagram (Ícone/link para o Instagram) */}
                    </ul>
                </nav>

                <a href="#contato"><button className={`${styles.cta_coleta}`}>Solicite sua coleta</button></a>

                {/* HIDDEN MENU (Para telas menores que 920px) */}
               

                <nav className={`${styles.hidden_navBar} ${showMenu?`${styles.show}`:`${styles.hidden}`}`}>
                <ul className={`${styles.navBar_list} `}>
                        <li className={`${styles.list_item}`}>
                            <a href="#home" className={`${styles.list_link}`} onClick={closeMenu}>Home</a>
                        </li>
                        <li className={`${styles.list_item}`}>
                            <a href="#servicos" className={`${styles.list_link}`} onClick={closeMenu}>Serviços</a>
                        </li>
                        <li className={`${styles.list_item}`}>
                            <a href="#sobreNos" className={`${styles.list_link}`} onClick={closeMenu}>Sobre Nós</a>
                        </li>
                        <li className={`${styles.list_item}`}>
                            <a href="#contato" className={`${styles.list_link}`} onClick={closeMenu}>Contato</a>
                        </li>
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