import SecondHero from './components/second-hero.jsx'
import RecentProjects from './components/Recents-projects.jsx'
import Footer from './components/footer.jsx'
import { Link } from 'react-router-dom'
import Header from './components/header.jsx'
import Navbar from './components/navbar.jsx'
import MainHero from './components/mainhero.jsx'
import Services from './components/services.jsx'
import CountUp from "react-countup"


export function Divider({section, parr}) {
    return (
        <div className=' bg-secondary bg-about row  align-items-center '>
      <div className="row align-items-center py-4">
                  <div className="col-md-6 text-center text-md-left">
                      <h1 className="mb-4 mb-md-0 text-white">{section}</h1>
                      {parr &&
                      <p className=' d-block d-md-none '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum voluptates laboriosam totam, quis libero, error est saepe dolores dolore distinctio expedita culpa ex? Quos, numquam. Quam distinctio natus unde numquam.</p>
                    }
                  </div>
                  <div className="col-md-6 text-center text-md-right">
                      <div className="d-inline-flex align-items-center">
                          <Link className="btn text-white" to="/">Inicio</Link>
                          <i className="fas fa-angle-right text-white"></i>
                          <a className="btn text-white disabled">{section}</a>
                      </div>
                  </div>
              </div>
      </div>
    )
}
export function Home(){
    return (
      <>
      <Header></Header>
  
      <MainHero />
      <Services />
      <SecondHero />
      <RecentProjects />
      <Footer />
      </>
    )
  }

export  function About() {
    return (
      <main  className=' overflow-hidden '>
      <Navbar></Navbar>
     <Divider section={"Sobre Nosotros"}></Divider>
      <div className="container-fluid py-5 ">
          <div className="container about">
              <div className="row">
                  <div className="col-lg-7 m-0 my-lg-5 pt-0 pt-lg-5 pr-lg-5">
                      <h6 className="text-def text-uppercase font-weight-medium mb-3">Sobre Nosotros</h6>
                      <h1 className="mb-4">Por qué escogernos</h1>
                      <p>Nuestra trayectoria nos ha permitido  desarrollar  una  amplia  experiencia  en  la  realización  de  proyectos de  diversos  tipos y  tamaños.  Desde  la  instalación  de  sistemas  básicos  hasta  la  ejecución  de  obras  complejas,  cada  proyecto  es  una  oportunidad  para  demostrar  nuestra  capacidad  de  adaptación  y  nuestra  pasión  por  la  excelencia.</p>
                      <div className="row">
                          <div className="col-sm-6 mb-4">
                              <CountUp className="text-def" end={24} start={0} duration={5}></CountUp>
                              <h5 className="font-weight-bold">Años de Experiencia</h5>
                          </div>
                          <div className="col-sm-6 mb-4">
                              <CountUp className="text-def" end={150} start={0} duration={5}></CountUp>
                              <h5 className="font-weight-bold">Trabajos Completados</h5>
                          </div>
                          <div className="col-sm-6 mb-4">
                              <CountUp className="text-def" end={147} start={0} duration={5}></CountUp>
                              <h5 className="font-weight-bold">Clientes Felizes</h5>
                          </div>
                          <div className="col-sm-6 mb-4">
                              <CountUp className="text-def" end={17550} start={9500} duration={5}></CountUp>
                              <h5 className="font-weight-bold">Horas Trabajadas</h5>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-5">
                      <div className="d-flex flex-column align-items-center justify-content-center bg-secondary h-100 py-5 px-3">
                          <i className="fa fa-5x fa-certificate text-white mb-5"></i>
                          <h1 className="display-1 text-white mb-3">+20</h1>
                          <h1 className="text-white m-0 text-nowrap  fs-2">Años de Experiencia</h1>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <Footer></Footer>
      </main>
    )
  }



export function PageServices(){
    return (
      <main className=' overflow-hidden '>

        <Navbar></Navbar>
        <Divider section={"Mis Servicios"}></Divider>
        <div className="row justify-content-center  mt-4  boxs">
        <article className="col-lg-3 col-md-6 mb-4  card  rounded-0 mx-0 mx-md-4 ">
                    <div className="service-item bg-white text-center mb-2 py-5 px-4">
                        <i className="fa fa-2x fa-hotel mx-auto mb-4"><svg width={40} height={40} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9.97308 18H14.0269C14.1589 16.7984 14.7721 15.8065 15.7676 14.7226C15.8797 14.6006 16.5988 13.8564 16.6841 13.7501C17.5318 12.6931 18 11.385 18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10C6 11.3843 6.46774 12.6917 7.31462 13.7484C7.40004 13.855 8.12081 14.6012 8.23154 14.7218C9.22766 15.8064 9.84103 16.7984 9.97308 18ZM14 20H10V21H14V20ZM5.75395 14.9992C4.65645 13.6297 4 11.8915 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 11.8925 19.3428 13.6315 18.2443 15.0014C17.624 15.7748 16 17 16 18.5V21C16 22.1046 15.1046 23 14 23H10C8.89543 23 8 22.1046 8 21V18.5C8 17 6.37458 15.7736 5.75395 14.9992ZM13 10.0048H15.5L11 16.0048V12.0048H8.5L13 6V10.0048Z"></path></svg></i>
                        <h5 className="mb-2">Electricidad</h5>
                        <p className="m-0">Ofrecemos servicios integrales de electricidad para  tu hogar,  negocio u oficina, realizados con  profesionalidad y  rigurosidad.</p>
                    </div>
                </article>
                <article className="col-lg-3 col-md-6 mb-4 card rounded-0 mx-0    mx-md-4">
                    <div className="service-item bg-white text-center mb-2 py-5 px-4">
                        <i className="fa fa-2x fa-route mx-auto mb-4"><svg width={40} height={40} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7.05033 14.1213L4.929 16.2427L7.75743 19.0711L19.0711 7.75737L16.2427 4.92894L14.1214 7.05026L15.5356 8.46448L14.1214 9.87869L12.7072 8.46448L11.293 9.87869L12.7072 11.2929L11.293 12.7071L9.87875 11.2929L8.46454 12.7071L9.87875 14.1213L8.46454 15.5355L7.05033 14.1213ZM16.9498 2.80762L21.1925 7.05026C21.583 7.44079 21.583 8.07395 21.1925 8.46448L8.46454 21.1924C8.07401 21.5829 7.44085 21.5829 7.05033 21.1924L2.80768 16.9498C2.41716 16.5592 2.41716 15.9261 2.80768 15.5355L15.5356 2.80762C15.9261 2.4171 16.5593 2.4171 16.9498 2.80762ZM14.1214 18.3635L15.5356 16.9493L17.7781 19.1918H19.1923V17.7776L16.9498 15.5351L18.364 14.1208L20.9997 16.7565V20.9999H16.7578L14.1214 18.3635ZM5.63597 9.87806L2.80754 7.04963C2.41702 6.65911 2.41702 6.02594 2.80754 5.63542L5.63597 2.80699C6.02649 2.41647 6.65966 2.41647 7.05018 2.80699L9.87861 5.63542L8.4644 7.04963L6.34308 4.92831L4.92886 6.34253L7.05018 8.46385L5.63597 9.87806Z"></path></svg></i>
                        <h5 className="mb-2">Albañilería</h5>
                        <p className="m-0">Ofrecemos una amplia gama de servicios de albañilería, desde la construcción de muros y pisos hasta la instalación de revestimientos y acabados.</p>
                    </div>
                </article>
                <article className="col-lg-3 col-md-6 mb-4 card rounded-0  mx-0 mx-md-4">
                    <div className="service-item bg-white text-center mb-2 py-5 px-4">
                        <i className="fa fa-2x fa-ticket-alt mx-auto mb-4"><svg width={40} height={40} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3.09735L7.05025 8.04709C4.31658 10.7808 4.31658 15.2129 7.05025 17.9466C9.78392 20.6803 14.2161 20.6803 16.9497 17.9466C19.6834 15.2129 19.6834 10.7808 16.9497 8.0471L12 3.09735ZM12 0.268921L18.364 6.63288C21.8787 10.1476 21.8787 15.8461 18.364 19.3608C14.8492 22.8755 9.15076 22.8755 5.63604 19.3608C2.12132 15.8461 2.12132 10.1476 5.63604 6.63288L12 0.268921ZM12 17.9968V7.99684C14.7614 7.99684 17 10.2354 17 12.9968C17 15.7583 14.7614 17.9968 12 17.9968Z"></path></svg></i>
                        <h5 className="mb-2">Plomería</h5>
                        <p className="m-0">En BrickHub,  te ofrecemos servicios de plomería que garantizan el  funcionamiento óptimo de tu sistema de agua y drenaje.</p>
                    </div>
                </article>
            </div>
      <Footer />
        </main>

    )
}

export function Contact(){
    return (
        <main className=' overflow-hidden '>
        <Navbar></Navbar>
        <Divider section={"Contáctanos"}></Divider>
        <section className=' m-5'>
        <div className="container-fluid contact-info mt-5 mb-4">
        <div className="container contact-container">
            <div className="row">
                <div className="col-md-4 d-flex align-items-center justify-content-center bg-secondary mb-4 mb-lg-0 contact" >
                    <div className="d-inline-flex">
                        <i className="fa fa-2x fa-map-marker-alt text-white m-0 mr-3"></i>
                        <div className="d-flex flex-column">
                            <h5 className="text-white font-weight-medium">Envíanos un Email</h5>
                            <p className="m-0 text-white">fajardoariel435@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex align-items-center justify-content-center bg-primary mb-4 mb-lg-0 contact bg-def" >
                    <div className="d-inline-flex text-left">
                        <i className="fa fa-2x fa-envelope text-white m-0 mr-3"></i>
                        <div className="d-flex flex-column">
                            <h5 className="text-white font-weight-medium">Llámanos</h5>
                            <p className="m-0 text-white">53385156</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex align-items-center justify-content-center bg-secondary mb-4 mb-lg-0 contact" >
                    <div className="d-inline-flex text-left">
                        <i className="fa fa-2x fa-phone-alt text-white m-0 mr-3"></i>
                        <div className="d-flex flex-column">
                            <h5 className="text-white font-weight-medium text-center ">Visítenos</h5>
                            <p className="m-0 text-white text-capitalize  text-center">calle 10 entre 1ra y San Francisco, Mirados del Diezmero, La Habana</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </section>
      <Footer />

        </main>

    )
}