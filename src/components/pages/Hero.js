import styles from '../../assets/scss/layout/Hero.module.css'

const Hero = () =>{
    return(
        <>
            <main className={`${styles.main}`}>
                <div className={`${styles.control}`}> 
                    <h1>
                        <span className={`${styles.t_1}`}>DESCARTE</span>
                        <br/>
                        <span className={`${styles.t_2}`}>ÓLEO DE COZINHA </span>
                        <span className={`${styles.t_3}`}> COM</span>
                        <br/>
                        <span className={`${styles.t_4}`}>RESPONSABILIDADE</span>
                        <br/>
                        {/* <span className={`${styles.t_4}`}>BIOSERVICE AMBIENTAL</span> */}
                    </h1>
                    <h2>A Bioservice Ambiental oferece soluções eficientes para o descarte de óleo de cozinha. Contribua com o meio ambiente e cumpra com a legislação ambiental.</h2>

                    <div className={`${styles.ctas}`}>
                        <button>Solicite Agora</button>
                        <button>Saiba Mais</button>
                    </div>
                </div>
              
            </main>
        </>
    )
}

export default Hero