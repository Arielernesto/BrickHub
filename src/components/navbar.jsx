import { Link } from "react-router-dom"
import {useLocation} from 'react-router-dom'
import { useEffect } from "react";
function Navbar(){
  const location = useLocation()
useEffect(() => {
  window.scrollTo(0,0)
}, [location]);
    return (
        <nav className="nav-container navbar-expand-lg">
        <div className="navbar navbar-expand-lg shadow-lg ">
  <div className="container ">
    <Link className="navbar-brand d-flex  align-items-center " to="/"> <svg width={50} height={50} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM5.49388 7.0777L12.0001 10.8444L18.5062 7.07774L12 3.311L5.49388 7.0777ZM4.5 8.81329V16.3469L11.0001 20.1101V12.5765L4.5 8.81329ZM13.0001 20.11L19.5 16.3469V8.81337L13.0001 12.5765V20.11Z"></path></svg><h4 className=' d-inline  ms-1  mt-1 '>
      <span className=' text-secondary '>Brick</span>Hub
      </h4></Link>
    <button className="navbar-toggler pe-0 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
   
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
      <Link className="navbar-brand d-flex  align-items-center " to="/"> <svg width={50} height={50} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM5.49388 7.0777L12.0001 10.8444L18.5062 7.07774L12 3.311L5.49388 7.0777ZM4.5 8.81329V16.3469L11.0001 20.1101V12.5765L4.5 8.81329ZM13.0001 20.11L19.5 16.3469V8.81337L13.0001 12.5765V20.11Z"></path></svg><h4 className=' d-inline  ms-1  mt-1 '>
      <span className=' text-secondary '>Brick</span>Hub
      </h4></Link>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
          <li className="nav-item">
            <Link className={`nav-links nav-link mx-lg-2 ${window.location.pathname == "/" ? 'active' : ''}`} to="/">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-links nav-link mx-lg-2 ${window.location.pathname == "/projects" ? 'active' : ''}`} to="/projects">Proyectos</Link>
          </li>
          <li className="nav-item">
          <Link className={`nav-links nav-link mx-lg-2 ${window.location.pathname == "/about-our" ? 'active' : ''}`} to="/about-our">Sobre nosotros</Link>
          </li>
          <li className="nav-item">
          <Link className={`nav-links nav-link mx-lg-2 ${window.location.pathname == "/services" ? 'active' : ''}`} to="/services">Servicios</Link>
          </li>
          <li className="nav-item ">
            <Link className={`nav-links nav-link mx-lg-2 ${window.location.pathname == "/contact" ? 'active' : ''}`} to="/contact">Contáctemos</Link>
          </li>
        </ul>
      </div>
    </div>

    <div className=' rounded-pill bg-warning  p-2 text-white  fw-bold  position-relative d-lg-block  d-none '>
      En desarrollo
    </div>
  </div>
</div>
</nav>
    )
}

export default Navbar