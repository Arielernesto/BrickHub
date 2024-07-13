import { Link } from "react-router-dom"
function MainHero() {
  function handleClick(){
    window.scrollTo(0)
  }
    return (
        <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6 order-2 ">
      <img src="hero1.jpg" className="d-none d-md-block  mx-lg-auto img-fluid" alt="Bootstrap Themes" width="800" height="600" loading="lazy" />
        {/* <img src="hero-section.jpg" className="d-block mx-lg-auto img-fluid float-start rounded-2 shadow-lg " alt="Bootstrap Themes" width="200" height="200" loading="lazy" />

        <img src="hero-section.jpg" className="mt-5 ms-4  d-block  img-fluid float-start rounded-2 shadow-lg " alt="Bootstrap Themes" width="200" height="200" loading="lazy" />

        <img src="hero-section.jpg" className="ms-3 d-block  img-fluid float-start rounded-2 shadow-lg " alt="Bootstrap Themes" width="200" height="200" loading="lazy" /> */}
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold lh-1 mb-3">Albañilería de calidad, hecha con pasión y precisión.</h1>
        <p className="lead"> Desde cimientos sólidos hasta acabados impecables, tu proyecto en manos expertas. Descubre nuestras soluciones para tu hogar o negocio.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <Link  to="/projects" className="btn bg-def fw-bold  text-white  hover-warning btn-lg px-4 me-md-2">Trabajos recientes</Link>
          <Link to="/contact" className="btn btn-outline-secondary  btn-lg px-4">Contáctame</Link>
        </div>
      </div>
    </div>
    </div>
    )
}
export default MainHero