import styles from '../../assets/scss/pages/Sobre.module.css'
import vetor_garrafa from '../../assets/img/vetores/garrafa_oleo.webp'
import vetor_certificado from '../../assets/img/vetores/certificado.webp'
import vetor_barril from '../../assets/img/vetores/barril.webp'

import certificado_bioservice from '../../assets/img/selobioservice.webp'
import ReactPlayer from 'react-player'

import Carrosel from '../objects/Carrosel'

import confianca from '../../assets/img/pilares/confianca.webp'
import cuidado from '../../assets/img/pilares/cuidado.webp'
import seguranca from '../../assets/img/pilares/seguranca.webp'

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
            <article className={`${styles.artigo} ${styles.bg_atuacao}`}>
                <h2>
                    <span className={`${styles.t_1} ${styles.showTag}`}>20+ ANOS DE</span> 
                    <br/><span className={`${styles.t_2} ${styles.showTag}`}> ATUAÇÂO</span>
                </h2>
                <p className={`${styles.paragrafo} ${styles.showLeg}`}>
                            Contamos com mais de duas décadas de serviço prestado, ao longo de todo esse tempo já ajudamos a reciclar mais de <span className={`${styles.info}`}>17 Milhões de Litros de Óleo</span>
                </p>
               
            </article>
            <article className={`${styles.artigo} container`} id="sobreNos" >
                <div className="row w-100 m-auto mb-5">
                    <div className={`col col-12 col-md-6 bg-succdess `}>
                    <h2 className={`${styles.subTitulo} ${styles.showTag}`}>
                    SOBRE A BIOSERVICE AMBIENTAL 
                    </h2>
                        <p className={`${styles.paragrafo} ${styles.showLeg} `}>
                            A <span className={`${styles.bold}`}>Bioservice Ambiental</span> é especializada em reciclagem e coleta de resíduos, com foco na sustentabilidade e na proteção do meio ambeinte
                        </p>
                        <p className={`${styles.paragrafo} ${styles.showTag}`}>
                            Nascemos com o intuito de mudar o planeta, cuidar de nossa
                            atmosfera e agir em prol da sustentabilidade; Buscamos incentivar
                            a sociedade a realizar o descarte consciente do óleo de fritura,
                            evitando assim, a poluição em redes pluviais e de esgotos.
                        </p>

                    </div>
                    <div className={`col col-12 col-md-6 bg-dandger d-flex justify-content-center align-items-center ${styles.showLeg}`}>
                      
                        
                        <ReactPlayer
                            url="https://youtu.be/m4FfO-Wvn7c"    
                            controls={true}
                        />
                    </div>
                </div>
            </article>

            <article className={`${styles.artigo} container`}>
                <h2 className={`${styles.subTitulo} ${styles.showTag}`}>NOSSOS PILARES</h2>
                <div className={` w-100 mx-auto ${styles.pilares}`}>
                    <div className={` ${styles.item} ${styles.showTag}`}>
                        <div className={`${styles.header}`}>
                            <img src={confianca} width={"100%"} loading="lazy" alt="Trabalhamos com a confiança em nosso serviço"/>
                        </div>
                        <div className={`${styles.body}`}>
                            <p>
                                Somos experts em coleta de resíduos oleosos no estado de SP, possuímos certificações e disponibilizamos selo de garantia a todos os nossos parceiros.
                            </p>
                        </div>
                    </div>
                    <div className={` ${styles.item} ${styles.showTag}` }>
                    <div className={`${styles.header}`}>
                            <img src={seguranca} width={"100%"} loading="lazy" alt="Icone de confianca"/>
                        </div>
                        <div className={`${styles.body}`}>
                            <p>
                            Contamos com local de armazenamento próprio,
 seguindo todos os parâmetros exigidos por lei e emitimos
 nota fiscal  para estabelecimentos conveniados.
                            </p>
                        </div>
                    </div>
                    <div className={` ${styles.item} ${styles.showTag}`}>
                    <div className={`${styles.header}`}>
                            <img src={cuidado} width={"100%"} loading="lazy" alt="Icone de cuidado"/>
                        </div>
                        <div className={`${styles.body}`}>
                            <p>
                                Coletar, transportar e oferecer destinação
 final ambientalmente correta a resíduos
 oleosos, deixando os clientes livres de
 qualquer tipo de sinistros.
                            </p>
                        </div>
                    </div>
                </div>
            </article>

            <article className={`${styles.artigo} ${styles.voceSabia} container`}>
                <h3 className={`text-center ${styles.subTitulo} ${styles.showTag}`}>Você Sabia ?</h3>
                <div className={`${styles.dykLista}`}>
                    <div className={`${styles.dykItem} `}>
                        
                        
                        <div className={`${styles.icon} ${styles.showTag}`}>
                        <img src={vetor_garrafa} alt={`<div> Icons made by <a href="https://www.flaticon.com/authors/surang" title="surang"> surang </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>`} loading="lazy" />
                        </div>
                        <p className={`${styles.paragrafo} ${styles.showTag}`}>
                            Quando o óleo é reutilizado muitas vezes, suas moléculas se quebram, criando substâncias tóxicas que aumentam os riscos de doenças como câncer, além de sobrecarregar o sistema cardiovascular e prejudicar a saúde em geral.
                        </p>

                        
                    </div>
                    <div className={`${styles.dykItem} `}>
                        

                        <div className={`${styles.icon} ${styles.showTag}`}>
                            <img src={vetor_certificado} alt={`<div> Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons"> Smashicons </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>`} loading="lazy"/>

                        </div>
                        <p className={`${styles.paragrafo} ${styles.showTag}`}>
                            De acordo com a legislação ambiental, restaurantes, lanchonetes e outros estabelecimentos precisam garantir que o óleo de cozinha usado seja descartado de forma responsável e obter um Certificado de Destinação Final para comprovar que o material foi corretamente reciclado ou tratado.
                        </p>
                    </div>
                    <div className={`${styles.dykItem} `}>
                        
                        <div className={`${styles.icon} ${styles.showTag}`}>
                            <img src={vetor_barril} alt={`<div> Icons made by <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26"> Icongeek26 </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>`} loading="lazy"/>
                        </div>
                        <p className={`${styles.paragrafo} ${styles.showTag}`}>
                            Apenas 1 litro de óleo de cozinha jogado de forma inadequada pode poluir uma quantidade de água suficiente para abastecer 30 famílias durante um mês. O óleo forma uma camada na superfície da água que impede a troca de gases essenciais, prejudicando a vida aquática.
                        </p>
                    </div>
                   
                </div>
            </article>

            

            <article className={`${styles.artigo} container`}>
            

                    <div className={`row w-100 mx-auto mb-5`}>
                        <div className={`col col-12 col-md-8 mb-5 `}>
                        <h3 className={`${styles.subTitulo} ${styles.showTag}`}>CERTIFICADO AMBIENTAL</h3>
                            <p className={`${styles.paragrafo} ${styles.showTag}`}>Oferecemos uma solução completa para empresas e estabelecimentos que buscam estar em conformidade com as <span className={`${styles.bold}`}>legislações ambientais</span> vigentes.</p>
                            <p className={`${styles.paragrafo} ${styles.showTag}`}> Ao trabalhar conosco, sua empresa terá acesso a um <span className={`${styles.bold}`}>Certificado Ambiental</span>, um documento oficial que atesta a destinação correta e ambientalmente responsável dos resíduos, como o <span>óleo de cozinha</span>.</p>

                            <a href="#contato" className={`${styles.button} ${styles.showTag}`}>
                                Garanta o seu 
                            </a>


                        </div>
                        <div className={`col col-12 col-md-4 d-flex justify-content-center align-items-center ${styles.showTag}` }>
                                                       <img src={certificado_bioservice} loading="lazy" alt="Certificado da bioservice"/>
                        </div>
                    </div>
            

                    <h3 className={`${styles.subTitulo} mx-auto ${styles.showTag} mb-5`}>NOSSAS CERTIFICAÇÕES</h3>
                    <Carrosel/>
                    <p className={`${styles.paragrafo} mt-5 ${styles.showTag}`}>Este certificado é uma ferramenta essencial para garantir que o seu negócio esteja em conformidade com as normas ambientais, evitando possíveis multas ou penalidades.</p>
                    <p className={`${styles.paragrafo} ${styles.showTag}`}> Ele também reforça o compromisso da sua empresa com a responsabilidade socioambiental, o que é altamente valorizado por clientes, parceiros e órgãos reguladores.</p>
            </article>

            
        </>
    )
}

export default Sobre