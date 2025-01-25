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
            <article className={`${styles.artigo} ${styles.servicos} container `} id="servicos">
                <h2 className={`${styles.subTitulo} text-center mb-5 w-100 `}>Nosso Serviços</h2>
                
                <div className="row w-100">

                    <div className="col col-md-6 col-12">
                        <h3 className={` ${styles.servicos_titulo} mx-auto text-center w-50`}>Coleta</h3>
                        <p className={`${styles.paragrafo} `}>
                            Com o seu chamado, mobilizamos nossa equipe em até 24 horas para fazer a retirada do seu óleo.
                        </p>
                        <p className={`${styles.paragrafo}`}>
                            Nossa equipe conta com profissionais extremamente eficientes e confiaveis, sempre dispostos a tirar dúvidas e auxiliar nossos clientes para garantir a total satisfação.
                        </p>
                    </div>
                    <div className={`col col-md-6 col-12 d-flex justify-content-center align-items-center`}>
                        {/* <ReactPlayer
                            url="https://youtu.be/m4FfO-Wvn7c?si=fdsqNvzRJWE9f-hC"
                            width={'100%'}
                            volume={volume}
                            controls='true'
                        />
                        */}
                        
                    </div>

                    <div className="col col-md-8 col-12">
                        <h3 className={` ${styles.servicos_titulo} mx-auto text-center w-50`}>Tratamento e Destinação Final</h3>
                        <p className={`${styles.paragrafo} `}>
                            Com o seu chamado, mobilizamos nossa equipe em até 24 horas para fazer a retirada do seu óleo.
                        </p>
                        <p className={`${styles.paragrafo}`}>
                            Nossa equipe conta com profissionais extremamente eficientes e confiaveis, sempre dispostos a tirar dúvidas e auxiliar nossos clientes para garantir a total satisfação.
                        </p>
                    </div>
                    <div className={`col col-md-4 col-12 d-flex justify-content-center align-items-center`}>
                        {/* <ReactPlayer
                            url="https://youtu.be/m4FfO-Wvn7c?si=fdsqNvzRJWE9f-hC"
                            width={'100%'}
                            volume={volume}
                            controls='true'
                        />
                        */}
                        
                    </div>
                </div>
            </article>
            
        </>
    )
}

export default Servicos