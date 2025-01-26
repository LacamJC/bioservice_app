import styles from '../../assets/scss/pages/Hero.module.css'
import { useEffect } from 'react';
const Hero = () =>{
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
    useEffect(()=>{addClass()},[])
    // Chame addClass() para verificar se os elementos já estão visíveis na página inicialmente
    addClass();

    return(
        <>
            <main className={`${styles.main}`} >
                <div className={`${styles.control}`} id="home"> 
                    <h1>
                        <span className={`${styles.t_1} ${styles.showTag}`}>DESCARTE</span>
                        <br/>
                        <span className={`${styles.t_2} ${styles.showTag}`}>ÓLEO DE COZINHA </span>
                        <span className={`${styles.t_3} ${styles.showTag}`}> COM</span>
                        <br/>
                        <span className={`${styles.t_4} ${styles.showTag}`}>RESPONSABILIDADE</span>
                        <br/>
                        {/* <span className={`${styles.t_4}`}>BIOSERVICE AMBIENTAL</span> */}
                    </h1>
                    <h2>A Bioservice Ambiental oferece soluções eficientes para o descarte de óleo de cozinha. Contribua com o meio ambiente e cumpra com a legislação ambiental.</h2>

                    <div className={`${styles.ctas}`}>
                        <a href="#contato"><button className={`${styles.showTag}`}>Solicite Agora</button></a>
                        <a href="#servicos"><button className={`${styles.showTag}`}>Saiba Mais</button></a>
                    </div>
                </div>
              
            </main>
        </>
    )
}

export default Hero