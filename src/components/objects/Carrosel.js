import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import sabesp_logo from '../../assets/img/empresas/Sabesp-logo-DFEEC1E402-seeklogo.com.png'
import bombeiro_logo from '../../assets/img/empresas/bombeiro-civil-logo-D0D2D96CC7-seeklogo.com.png'
import anvisa_logo from '../../assets/img/empresas/ANVISA-logo-BE63621131-seeklogo.com.png'
import ibama_logo from '../../assets/img/empresas/ibama-logo-F94A8B0C6B-seeklogo.com.png'
import cetebesp_logo from '../../assets/img/empresas/CETESB-250x300.png'
import styles from '../../assets/scss/objects/Carrosel.module.css'
const Carrosel = () =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
          partialVisibilityGutter: 40
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          partialVisibilityGutter: 30
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          partialVisibilityGutter: 30
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          partialVisibilityGutter: 30
        }
      };

      const logos = [sabesp_logo, anvisa_logo, cetebesp_logo, bombeiro_logo, ibama_logo]
      

      return(<>
        <Carousel 
            swipeable={false}
            draggable={true}
            showDots={false}
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
        {logos.map(item=>(
            <div className={`${styles.carrosel_item}`}>
                <img src={item} alt="Imagem de uma corporação certificada"/>
            </div>
        ))}
        {/* <div><img src={bombeiro_logo}/></div> */}
      </Carousel>;
      </>)
}

export default Carrosel