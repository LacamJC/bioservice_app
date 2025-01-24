import styles from '../../assets/scss/pages/Sobre.module.css'
import logo_minimalista from '../../assets/img/minimo_logo.webp'

const Sobre = () =>{
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
                console.log('elemento visivel')
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
            <article className={`${styles.artigo} container`} id="sobreNos" >
                <div className="row w-100 m-auto mb-5">
                    <div className={`col col-12 col-md-6 bg-succdess `}>
                    <h2 className={`${styles.subTitulo} ${styles.showTag}`}>
                    SOBRE A BIOSERVICE AMBIENTAL 
                    </h2>
                        <p className={`${styles.paragrafo} ${styles.showLeg} `}>
                            A <span className={`${styles.bold}`}>Bioservice Ambiental</span> é especializada em <span className={`${styles.italic}`}>reciclagem</span> e coleta de resíduos, com foco na <span className={`${styles.italic}`}>sustentabilidade</span> e na proteção do <span className={`${styles.italic}`}>meio ambeinte</span>
                        </p>

                    </div>
                    <div className={`col col-12 col-md-6 bg-dandger d-flex justify-content-center align-items-center ${styles.showLeg}`}>
                      
                         <img src="https://www.biolitoral.com.br/imagens/informacoes/coleta-oleo-cozinha-usado-sp-01.jpg" alt="Trabalhadores da Bioservice fazendo o serviço da coleta de óleo em estabelecimentos" width={'80%'} className="border"/>
                    </div>
                </div>
            </article>

            <article className={`${styles.artigo} ${styles.bg_atuacao}`}>
                <h2>
                    <span className={`${styles.t_1} ${styles.showLeg}`}>20+ ANOS DE</span> 
                    <br/><span className={`${styles.t_2} ${styles.showLeg}`}> ATUAÇÂO</span>
                </h2>
                <p className={`${styles.paragrafo} ${styles.showLeg}`}>
                            Contamos com mais de duas décadas de serviço prestado, ao longo de todo esse tempo já ajudamos a reciclar mais de <span className={`${styles.info}`}>17 Milhões de Litros de Óleo</span>
                </p>
            </article>
        </>
    )
}

export default Sobre