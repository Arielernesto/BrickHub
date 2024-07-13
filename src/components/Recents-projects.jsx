import {Swiper, SwiperSlide} from "swiper/react"
import {EffectCoverflow, Navigation, Pagination } from "swiper/modules"
import { Link } from "react-router-dom"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"

function Slider(){
    return (
<Swiper
effect={ 'coverflow' }
grabCursor={true}
centeredSlides={true}
loop={true}
slidesPerView={'auto'}
coverflowEffect={
    {
        rotate: 10,
        stretch: 0,
        depth: 100,
        modifier: 2.5
    }
}
freeMode={true}
pagination={{el: 'swiper-pagination', clickable: true}}
navigation={{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
}}
modules={[EffectCoverflow,Pagination, Navigation]}
className="swiper_container"
>
    <SwiperSlide>
        <img src="pic4.jpg" alt="" />
    </SwiperSlide>
    <SwiperSlide>
        <img src="pic8.jpg" alt="" />
    </SwiperSlide>
    <SwiperSlide>
        <img src="pic1.jpg" alt="" />
    </SwiperSlide>
    <SwiperSlide>
        <img src="pic6.jpg" alt="" />
    </SwiperSlide>
    <div className=" slider-controler"> 
    <div className="swiper-button-prev slider-arrow">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left align-middle"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
    </div>

    <div className="swiper-button-next slider-arrow">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right align-middle"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
    </div>

    <div className="swiper-pagination h-25 "></div>
    </div>
</Swiper>
    )
}



export default function RecentProjects(){
    return (
        <section className=" container mb-5  ">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
       
      <div className="col-lg-5 p-3 p-lg-5 pt-lg-3">
        <h3 className=" fs-2 fw-bold lh-1 text-center text-md-start ">Proyectos Recientes:  Haciendo realidad tus ideas</h3>
        <p className="lead">Cada proyecto es un nuevo desafío que nos  impulsa  a  superarnos.  Nos  enorgullece  mostrar  algunas de  nuestras  realizaciones  recientes,  donde  ponemos  en  práctica  nuestra</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <Link to="/projects" className="btn bg-def text-white btn-lg px-4 me-md-2 fw-bold">Ver Proyectos</Link>
        </div>
      </div>
      <div className="col-lg-6 p-0">
      < Slider></Slider>
       </div>
     </div>
     </section>
    )
}