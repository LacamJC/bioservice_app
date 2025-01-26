import Carousel from "react-multi-carousel";
import Card from "./Card";
import styles from '../../assets/scss/objects/Card.module.css'
import "react-multi-carousel/lib/styles.css";
const CarroselServicos = () =>{
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


        const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
        };


    return(
        <>
            <Carousel 
                swipeable={false}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={1000}
                // keyBoardControl={true}
                // customTransition="all .5"
                // transitionDuration={500}
                containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px" 
            >
                {servicos.map(servico=>(
                    <Card
                    titulo={servico.titulo}
                    texto={servico.texto}
                    items={servico.itens}
                 
                />
                ))}
            </Carousel>;
        </>
    )
}

export default CarroselServicos