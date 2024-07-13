// eslint-disable-next-line react/prop-types
import Navbar from "./navbar"
import { Link } from "../router"

function Header({children}){
    return (
        <header className="hero">
        <div className=" slice">

            <Navbar />
            
            <div className=" d-flex  justify-content-center ">
            <h1 className=" text-center position-relative mt-5 main-header-title">Construyendo tus sueños, ladrillo a ladrillo</h1>
            </div>
            <div className=" d-flex justify-content-center  mt-2 ">
                <Link to="https://wa.link/2zfsl1" className="button-hero nav-link text-center ">Contáctanos</Link>
            </div>
            
            {children}
        </div>

        </header>
    )
}
export default Header

