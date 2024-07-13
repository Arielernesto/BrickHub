import { Link } from "../router"


export default function Footer(){
    return (
     <div className=" container ">
        <footer className="row row-cols-5 py-5 my-5 border-top">
    <div className="col-12 col-md-3">
    <Link className="navbar-brand d-flex  align-items-center mb-2 " to="/"> <svg width={50} height={50} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM5.49388 7.0777L12.0001 10.8444L18.5062 7.07774L12 3.311L5.49388 7.0777ZM4.5 8.81329V16.3469L11.0001 20.1101V12.5765L4.5 8.81329ZM13.0001 20.11L19.5 16.3469V8.81337L13.0001 12.5765V20.11Z"></path></svg><h4 className=' d-inline  ms-1  mt-1 '>
      <span className=' text-secondary '>Brick</span>Hub
      </h4></Link>
      <p>Construye tus sueños, ladrillo a ladrillo</p>
      <p className="text-muted">© 2024</p>
    </div>
    
    <div className="col-md-2 col-12 offset-md-1  ">
      <h5 className="text-center ">Secciones</h5>
      <ul className="nav flex justify-content-center flex-md-column  ">
        <li className="nav-item mb-2 mx-2 "><Link to="/" className="nav-link p-0  text-center ">Inicio</Link></li>
        <li className="nav-item mb-2 mx-2 "><Link to="/projects" className="nav-link p-0 text-center">Proyectos</Link></li>
        <li className="nav-item mb-2 mx-2 "><Link to="/about-our" className="nav-link p-0 text-center">Sobre Nosotros</Link></li>
        <li className="nav-item mb-2 mx-3 "><Link to="/services" className="nav-link p-0 text-center">Servicios</Link></li>
        <li className="nav-item mb-2 mx-2 "><Link to="contact" className="nav-link p-0 text-center">Contáctenos</Link></li>
      </ul>
    </div>

    <div className="col-md-3 col-12  offset-md-2 d-md-block  d-none  ">
      <h5 className="text-center text-md-start ">Contáctenos</h5>
      <ul className="nav flex justify-content-center flex-md-column  ">
        <li className="nav-item mb-2 mx-2 "><a className="nav-link p-0  text-start "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone align-middle me-2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>53385156</a></li>
        <li className="nav-item mb-2 mx-2 "><a  className="nav-link p-0 text-start"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail align-middle me-2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>fajardoariel435@gmail.com</a></li>
      </ul>
    </div>
  </footer>
  </div>
    )
}