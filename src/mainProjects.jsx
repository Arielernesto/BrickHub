

import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'
import { Divider } from "./pages.jsx"
import {Swiper, SwiperSlide} from "swiper/react"
import {EffectCoverflow, Navigation, Pagination } from "swiper/modules"

import {Gallery, Item} from 'react-photoswipe-gallery'
import {images, imagesPrimary} from './utils/utils.js'
import './photoswipe.css'


import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
export default function MainProjects() {
    return (
        <main className=' overflow-hidden '>
      <Navbar></Navbar>
      <Divider section={"Mis Trabajos"}></Divider>
      <div className=' d-flex  justify-content-center '>
      <h4 className=' text-center mt-5 fw-bold border-bottom-def d-inline-block pb-1  '>Nuestros Proyectos</h4>
      </div>
      <div className=' text-center  d-flex justify-content-center'>
      <p className=' w-50 fw-semibold projects-text '>Cada proyecto es una oportunidad para demostrar nuestra pasión por la innovación y nuestro compromiso de superar las expectativas.  Nos esforzamos por crear soluciones personalizadas que se adapten a las necesidades únicas de cada cliente,  con resultados que inspiran confianza y satisfacen las exigencias más altas.</p>
      </div>
      <Swiper
effect={ 'coverflow' }
grabCursor={false}
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
pagination={{el: '.swiper-pagination', clickable: true}}
navigation={{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
}}
modules={[EffectCoverflow,Pagination, Navigation]}
className="swiper_container"
>

{
images.map((data, index) => (


     <SwiperSlide key={index + data.url + data.alt + index + "dadadwdadadawd"}>
<Gallery>
    <Item  key={index + data.url  + data.alt + "dasadasddsada"}
    original={data.url}
    thumbnail={data.url}
    width={1024}
    height={768}
    >
          {({ref, open}) => (
       
   
    
            <img ref={ref} onClick={open} src={data.url} alt={data.alt}  key={index + data.url  + data.alt + "dasadasddsadaasdasdasdasdaddasd"}/>
  
            )}

</Item>
</Gallery>
     </SwiperSlide> 

))
}

    <div className=" slider-controler"> 
    <div className="swiper-button-prev slider-arrow">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left align-middle"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
    </div>

    <div className="swiper-button-next slider-arrow">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right align-middle"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
    </div>
<div className='w-100'>
    <div className="swiper-pagination h-25  w-100  "></div>
    </div>
    </div>
</Swiper>
<section  className=" row justify-content-center  " >
<Gallery>

    {
        
        imagesPrimary.map((data,index) =>(
           
           
            <div  key={index}  data-src={data.url}  className=" col-12 col-md-5   justify-content-center mx-2  mb-4 d-inline-block ">
                 <h4 className=" ms-3  ">{data.time}</h4>
                 <Item  key={index + data.url}
    original={data.url}
    thumbnail={data.url}
    width={1024}
    height={768}>
     {({ref, open}) => (
            <img   ref={ref} onClick={open}   className=" rounded-2 gallery-time" src={data.url} alt="" />
            )}
    </Item>
                
             </div>
        ))
    }
</Gallery>

</section>
<Footer />

      </main>
    )
}