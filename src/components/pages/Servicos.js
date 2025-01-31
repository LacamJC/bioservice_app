import styles from '../../assets/scss/pages/Servicos.module.css'
import CarroselServicos from '../objects/CarroselServicos';
// import galao from '../../assets/img/galao.webp'
const Servicos = () => {

    

    return(
        <>
        <div className={`${styles.bg_tuned}`} id="servicos">
            <h2><span className={`${styles.t_1} ${styles.showTag}`}>NOSSOS</span><br/> <span className={`${styles.t_2} ${styles.showTag}`}>SERVIÇOS</span></h2>
        </div>
            <article className={`${styles.artigo} ${styles.servicos} container ${styles.showTag}`} >
                
            <p className={`${styles.paragrafo}  text-start`}>Na Bioservice Ambiental, oferecemos soluções completas para o manejo responsável de resíduos, com foco na sustentabilidade e no respeito ao meio ambiente.</p>
            <p className={`${styles.paragrafo} `}> Conheça os serviços que garantem um futuro mais verde e saudável</p>
            </article>
            <CarroselServicos/>
        </>
    )
}

export default Servicos