import styles from '../../assets/scss/layout/MenuSuspenso.module.css'

const MenuSuspenso = () =>{
    return(
        <>
                <ul className={`${styles.menu_suspenso}`}>
                    <a href="#home">
                        <li>
                            Home
                        </li>
                    </a>
                    
                    <a href="#servicos">
                        <li>
                            Serviços
                        </li>
                    </a>
                    
                    <a href="#sobreNos">
                        <li>
                            Sobre Nós
                        </li>
                    </a>
                    
                    <a href="#contato">
                        <li>
                            Contato
                        </li>
                    </a>
                </ul>
        </>
    )
}

export default MenuSuspenso