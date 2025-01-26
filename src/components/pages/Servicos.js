import styles from '../../assets/scss/pages/Servicos.module.css'
import CarroselServicos from '../objects/CarroselServicos';
// import galao from '../../assets/img/galao.webp'
const Servicos = () => {
    function isVisible(element) {
        var rect = element.getBoundingClientRect();
    
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    function addClass() {
        var elementos = document.querySelectorAll(`.${styles.showTag}`);
        var elements =  document.querySelectorAll(`.${styles.showLeg}`);
        
        elementos.forEach(function(elemento) {
            if (isVisible(elemento)) {
                elemento.classList.add(`${styles.visivel}`);
                // console.log('elemento visivel')
            } else {
                // elemento.classList.remove('visivel');
            }
        });
        elements.forEach(function(elemento) {
            if (isVisible(elemento)) {
                elemento.classList.add(`${styles.visivel}`);
                console.log('elemento visivel')
            } else {
                // elemento.classList.remove('visivel');
            }
        });
    }
    
    // Adicione o event listener corretamente (sem os parênteses)
    window.addEventListener('scroll', addClass);
    
    // Chame addClass() para verificar se os elementos já estão visíveis na página inicialmente
    addClass();

    

    return(
        <>
        <div className={`${styles.bg_tuned}`} id="servicos">
            <h2><span className={`${styles.t_1} ${styles.showTag}`}>NOSSOS</span><br/> <span className={`${styles.t_2} ${styles.showTag}`}>SERVIÇOS</span></h2>
        </div>
            <article className={`${styles.artigo} ${styles.servicos} container ${styles.showTag}`} >
                
            <h3 className={`${styles.paragrafo} text-start`}>Na Bioservice Ambiental, oferecemos soluções completas para o manejo responsável de resíduos, com foco na sustentabilidade e no respeito ao meio ambiente. Conheça os serviços que garantem um futuro mais verde e saudável</h3>
            </article>
            <CarroselServicos/>
        </>
    )
}

export default Servicos