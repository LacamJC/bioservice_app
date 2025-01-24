import styles from '../../assets/scss/pages/Servicos.module.css'
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
            <article className={`${styles.artigo} ${styles.servicos} ${styles.showTag}`}>
                <h2 className={`  ${styles.servicos_titulo}`}>Nosso Serviços</h2>

                <div className={`${styles.servicos_lista}`}>
                    <div className={`${styles.item} ${styles.i_1}`}>
                        <h3 className={`${styles.item_titulo}`}>COLETA</h3>
                        <p className={`${styles.item_paragrafo}`}>
                            Coletamos seu óleo em até 48 horas após o seu chamado.
                        </p>
                    </div>
                    <div className={`${styles.item} ${styles.i_2}`}>
                        <h3 className={`${styles.item_titulo}`}>TRATAMENTO E DESTINO</h3>
                        <p className={`${styles.item_paragrafo}`}>
                            Asseguramos um tratamento seguro e ambientalmente correto de todos os resíduos, desde a coleta até a destinação final em locais licenciados.
                        </p>
                    </div>
                    <div className={`${styles.item} ${styles.i_3}`}>
                        <h3 className={`${styles.item_titulo}`}>CONSULTORIA</h3>
                        <p className={`${styles.item_paragrafo}`}>
                            Precisa de orientação para implementar práticas mais sustentáveis na sua empresa? Conte com nossa consultoria especializada em gestão de resíduos.
                        </p>
                    </div>
                </div>
            </article>
            
        </>
    )
}

export default Servicos