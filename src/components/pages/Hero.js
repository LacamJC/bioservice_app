import styles from '../../assets/scss/pages/Hero.module.css'
import { useEffect } from 'react';
const Hero = () =>{

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
                        <a href="#formulario"><button className={`${styles.showTag}`}>Solicite Agora</button></a>
                        <a href="#servicos"><button className={`${styles.showTag}`}>Saiba Mais</button></a>
                    </div>
                </div>
              
            </main>
        </>
    )
}

export default Hero