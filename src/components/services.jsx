export default function Services(){
    return (
        <section className="container mb-5">
            <div className=" d-flex  justify-content-center ">
            <h2 className=" text-center  fw-bolder mb-5  services-title pb-2">Nuestros Servicios</h2>
            </div>
            <div className=" row services">
                <div className="col-md-4 col-12  mb-4">
            <article className="   card shadow-lg rounded-1 ">
                <img src="hero.jpg" alt="" className=" img-fluid rounded-1  " />
                <h5 className=" mt-2 ms-3">Albañilería</h5>
                <p className=" px-3">Ofrecemos una amplia gama de servicios de albañilería para satisfacer tus necesidades, desde la construcción de muros y pisos hasta la instalación de revestimientos y acabados. Trabajamos con materiales de alta calidad y mano de obra experta para garantizar la solidez y la durabilidad de tus proyectos.</p>
            </article>
            </div>

            <div className="col-md-4 col-12  mb-4">
            <article className="card shadow-lg rounded-1 ">
            <img src="services2.jpg" alt="" className=" img-fluid rounded-1  " />
            <h5 className=" mt-2 ms-3">Electricidad</h5>
            <p className=" px-3">En BrickHub,  tu seguridad eléctrica es nuestra prioridad.  Ofrecemos servicios integrales de electricidad para  tu hogar,  negocio u oficina,  realizados con  profesionalidad y  rigurosidad.  Nos encargamos de  instalaciones nuevas,  reparaciones,  mantenimiento preventivo,  y  soluciones personalizadas  para  cubrir  tus  necesidades. </p>
            </article>

            </div>
            <div className="col-md-4  col-12 mb-4">
            <article className="  card shadow-lg rounded-1 ">
            <img src="services4.jpg" alt="" className=" img-fluid rounded-1  w-100  " />
            <h5 className="  mt-2 ms-3">Plomería</h5>
            <p className=" px-3">En BrickHub,  te ofrecemos servicios de plomería que garantizan el  funcionamiento óptimo de tu sistema de agua y drenaje.  Nos ocupamos de todo, desde la reparación de fugas hasta la instalación de sistemas de agua caliente y equipos de baño.  Confía en nuestra experiencia para  resolver cualquier problema de plomería con rapidez y eficiencia.</p>
            </article>
            </div>
            </div>
        </section>
    )
}