import { Link } from "../router"


export default function SecondHero(){
return (
    <div className="px-4 py-5 my-5 text-center">
   <svg width={80} height={80} className=' text-def' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM5.49388 7.0777L12.0001 10.8444L18.5062 7.07774L12 3.311L5.49388 7.0777ZM4.5 8.81329V16.3469L11.0001 20.1101V12.5765L4.5 8.81329ZM13.0001 20.11L19.5 16.3469V8.81337L13.0001 12.5765V20.11Z"></path></svg>
    <h1 className="display-5 fw-bold">BrickHub: Tu aliado para la tranquilidad.</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Nos dedicamos a brindar soluciones  de alta calidad. Nos  caracterizamos por  nuestro  compromiso con la  seguridad,  la  eficiencia y  la  satisfacción  de nuestros clientes.</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <Link to="/about-our" className="btn btn-outline-secondary btn-lg px-4">Sobre Nosotros</Link>
      </div>
    </div>
  </div>
)
}