import styles from '../../assets/scss/pages/Servicos.module.css'
import Card from '../objects/Card';
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

    const servicos = [
        {
            titulo: "Coleta Seletiva de Óleo de Cozinha",
            texto: "Oferecemos serviços de coleta programada e segura de óleo de cozinha usado, ideal para empresas de grande porte como restaurantes, hotéis e lanchonetes. Com a Bioservice, seu óleo será descartado de maneira responsável, evitando a poluição de solos e recursos hídricos.",
            itens: [
                "Coleta regular de grandes volumes de óleo.",
                "Recebimento e armazenagem em condições seguras.",
                "Atendimento personalizado de acordo com as necessidades da sua empresa."
            ]
        },
        {
            titulo: "Tratamento e Destinação Adequada de Resíduos",
            texto: "Além da coleta, garantimos que todo o óleo de cozinha coletado seja tratado e destinado corretamente, conforme as normas ambientais vigentes. Esse processo é essencial para evitar a contaminação de ambientes e garantir a sustentabilidade.",
            itens: [
                "Reciclagem de óleo para produção de biodiesel e outros produtos sustentáveis.",
                "Tratamento seguro de resíduos com impacto mínimo para o meio ambiente.",
                "Certificado de Destinação Final, garantindo que o descarte foi realizado de forma legal e responsável."
            ]
        },
        {
            titulo: "Consultoria Ambiental",
            texto: "A Bioservice Ambiental também oferece consultoria especializada para empresas e instituições que desejam implementar práticas mais sustentáveis no gerenciamento de resíduos. Nossa equipe capacitada ajudará sua empresa a se adaptar à legislação ambiental, reduzir impactos e otimizar processos de descarte.",
            itens: [
                "Análise e diagnóstico das práticas atuais de descarte de resíduos.",
                "Implantação de soluções personalizadas para cada tipo de negócio.",
                "Treinamento e conscientização para funcionários sobre a importância do manejo adequado dos resíduos."
            ]
        },
        {
            titulo: "Soluções para Pequenos Estabelecimentos e Residências",
            texto: "Se você é um pequeno empresário ou está em casa e deseja descartar o óleo de cozinha de maneira responsável, nós temos uma solução prática e acessível. A Bioservice oferece pontos de coleta e informações educativas para garantir que o óleo não seja descartado de forma prejudicial.",
            itens: [
                "Kits de coleta de fácil utilização.",
                "Pontos de coleta para descarte seguro de óleo usado.",
                "Campanhas de conscientização sobre a importância do descarte correto."
            ]
        },
        {
            titulo: "Parcerias e Programas Corporativos",
            texto: "Trabalhamos em estreita colaboração com empresas de diversos setores para promover práticas sustentáveis. Se você faz parte de uma rede de empresas, como restaurantes ou indústrias alimentícias, podemos ajudar a criar um programa de coleta e destinação de resíduos com condições especiais.",
            itens: [
                "Programas de coleta integrados para redes de estabelecimentos.",
                "Apoio em ações de responsabilidade social e ambiental.",
                "Descontos e benefícios para parceiros de longo prazo."
            ]
        }
    ]


    return(
        <>
        <div className={`${styles.bg_tuned}`} id="servicos">
            <h2><span className={`${styles.t_1} ${styles.showTag}`}>NOSSOS</span><br/> <span className={`${styles.t_2} ${styles.showTag}`}>SERVIÇOS</span></h2>
        </div>
            <article className={`${styles.artigo} ${styles.servicos} container ${styles.showTag}`} >
                
            <h3 className={`${styles.paragrafo} text-start`}>Na Bioservice Ambiental, oferecemos soluções completas para o manejo responsável de resíduos, com foco na sustentabilidade e no respeito ao meio ambiente. Conheça os serviços que garantem um futuro mais verde e saudável</h3>

           
            </article>
            <div class="d-flex flex-wrap justify-content-center ${styles.showTag}">
                {servicos.map((servico)=>(
                    <Card
                        titulo={servico.titulo}
                        texto={servico.texto}
                        items={servico.itens}
                     
                    />
                ))}
            </div>
        </>
    )
}

export default Servicos