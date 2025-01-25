import styles from '../../assets/scss/pages/Sobre.module.css'
import vetor_garrafa from '../../assets/img/vetores/garrafa_oleo.png'
import vetor_certificado from '../../assets/img/vetores/certificado.png'
import vetor_barril from '../../assets/img/vetores/barril.png'


import sabesp_logo from '../../assets/img/empresas/Sabesp-logo-DFEEC1E402-seeklogo.com.png'
import bombeiro_logo from '../../assets/img/empresas/bombeiro-civil-logo-D0D2D96CC7-seeklogo.com.png'
import anvisa_logo from '../../assets/img/empresas/ANVISA-logo-BE63621131-seeklogo.com.png'
import ibama_logo from '../../assets/img/empresas/ibama-logo-F94A8B0C6B-seeklogo.com.png'
import cetebesp_logo from '../../assets/img/empresas/CETESB-250x300.png'
import iso_logo from '../../assets/img/empresas/iso-14001-logo-E5046E951F-seeklogo.com.png'

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
                    <span className={`${styles.t_1} ${styles.showLeg}`}>20+ ANOS DE</span> 
                    <br/><span className={`${styles.t_2} ${styles.showLeg}`}> ATUAÇÂO</span>
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
                            A <span className={`${styles.bold}`}>Bioservice Ambiental</span> é especializada em <span className={`${styles.italic}`}>reciclagem</span> e coleta de resíduos, com foco na <span className={`${styles.italic}`}>sustentabilidade</span> e na proteção do <span className={`${styles.italic}`}>meio ambeinte</span>
                        </p>

                    </div>
                    <div className={`col col-12 col-md-6 bg-dandger d-flex justify-content-center align-items-center ${styles.showLeg}`}>
                      
                         <img src="https://www.biolitoral.com.br/imagens/informacoes/coleta-oleo-cozinha-usado-sp-01.jpg" alt="Trabalhadores da Bioservice fazendo o serviço da coleta de óleo em estabelecimentos" width={'80%'} className="border"/>
                    </div>
                </div>
            </article>

            <article className={`${styles.artigo} ${styles.voceSabia} container`}>
                <h3 className={`text-center ${styles.subTitulo} ${styles.showTag}`}>Você Sabia ?</h3>
                <div className={`${styles.dykLista}`}>
                    <div className={`${styles.dykItem} `}>
                        
                        
                        <div className={`${styles.icon} ${styles.showTag}`}>
                        <img src={vetor_garrafa} alt={`<div> Icons made by <a href="https://www.flaticon.com/authors/surang" title="surang"> surang </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>`}/>
                        </div>
                        <p className={`${styles.paragrafo} ${styles.showTag}`}>
                            Quando o óleo é reutilizado muitas vezes, suas moléculas se quebram, criando substâncias tóxicas que aumentam os riscos de doenças como câncer, além de sobrecarregar o sistema cardiovascular e prejudicar a saúde em geral.
                        </p>

                        
                    </div>
                    <div className={`${styles.dykItem} `}>
                        

                        <div className={`${styles.icon} ${styles.showTag}`}>
                            <img src={vetor_certificado} alt={`<div> Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons"> Smashicons </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>`}/>
                        </div>
                        <p className={`${styles.paragrafo} ${styles.showTag}`}>
                            De acordo com a legislação ambiental, restaurantes, lanchonetes e outros estabelecimentos precisam garantir que o óleo de cozinha usado seja descartado de forma responsável e obter um Certificado de Destinação Final para comprovar que o material foi corretamente reciclado ou tratado.
                        </p>
                    </div>
                    <div className={`${styles.dykItem} `}>
                        
                        <div className={`${styles.icon} ${styles.showTag}`}>
                            <img src={vetor_barril} alt={`<div> Icons made by <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26"> Icongeek26 </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>`}/>
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
                            <p className={`${styles.paragrafo} ${styles.showTag}`}>Oferecemos uma solução completa para empresas e estabelecimentos que buscam estar em conformidade com as <span className={`${styles.bold}`}>legislações ambientais</span> vigentes. Ao trabalhar conosco, sua empresa terá acesso a um <span className={`${styles.bold}`}>Certificado Ambiental</span>, um documento oficial que atesta a destinação correta e ambientalmente responsável dos resíduos, como o <span>óleo de cozinha</span>.</p>

                            <div className={`${styles.button} ${styles.showTag}`}>
                                Garanta já o seu 
                            </div>

                        </div>
                        <div className={`col col-12 col-md-4 ${styles.showTag}` }>
                            <img src={iso_logo} alt="imagem da iso 1401 normas ambientais" width="80%"/>
                           
                        </div>
                    </div>
            

                    <h3 className={`${styles.subTitulo} mx-auto ${styles.showTag}`}>NOSSAS CERTIFICAÇÕES</h3>
                    <div className={`${styles.empresas_list}`}>
                        <div className={`${styles.list_item} ${styles.showLeg}`}>
                            <img src={sabesp_logo} alt="logo da sabesp"/>
                        </div>
                        <div className={`${styles.list_item} ${styles.showLeg}`}>
                            <img src={ibama_logo} alt="logo do ibama"/>
                        </div>
                        <div className={`${styles.list_item} ${styles.showLeg}`}>
                            <img src={cetebesp_logo} alt="logo da cetebesp"/>
                        </div>
                        <div className={`${styles.list_item} ${styles.showLeg}`}>
                            <img src={bombeiro_logo} alt="logo do corpo de bombeiros"/>
                        </div>
                        <div className={`${styles.list_item} ${styles.showLeg}`}>
                            <img src={anvisa_logo} alt="logo da anvisa"/>
                        </div>
                    </div>
                    <p className={`${styles.paragrafo} ${styles.showTag}`}>Este certificado é uma ferramenta essencial para garantir que o seu negócio esteja em conformidade com as normas ambientais, evitando possíveis multas ou penalidades. Ele também reforça o compromisso da sua empresa com a responsabilidade socioambiental, o que é altamente valorizado por clientes, parceiros e órgãos reguladores.</p>
            </article>

            
        </>
    )
}

export default Sobre