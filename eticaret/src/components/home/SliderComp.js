import React from 'react'
import Slider from 'react-slick'

function SliderComp() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };
  return (
    <Slider {...settings}>
      <div className='!flex items-center bg-gray-100 px-6'>
      <div className=''>
      <div className='text-6xl font-bold'>En Kaliteli Ayakkabılar Burada</div>
      <div className='text-lg my-4'>Veniam qui aute sunt ipsum non esse do tempor eiusmod quis nisi ipsum ullamco. Voluptate ut magna officia officia magna. Irure excepteur consequat in deserunt velit anim dolore eiusmod. Ex duis officia tempor ipsum adipisicing nisi id aliqua.</div>
      <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>İncele</div>

      </div>
        <img  className="w-1/2"src='https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/df4d44d8-45cc-47e8-9a98-f3d9f151b2be/W+NP+SCULPT+DF+HR+TIGHT.png' alt="resim" />
      </div>
      
      <div className='!flex items-center bg-gray-100 px-6'>
      <div className=''>
        <div className='text-6xl font-bold'>En Kaliteli Ayakkabılar Burada</div>
        <div className='text-lg my-4'>Veniam qui aute sunt ipsum non esse do tempor eiusmod quis nisi ipsum ullamco. Voluptate ut magna officia officia magna. Irure excepteur consequat in deserunt velit anim dolore eiusmod. Ex duis officia tempor ipsum adipisicing nisi id aliqua.</div>
        <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>İncele</div>
      </div>
    
      <img className="w-1/2" src='https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/abacde4b-836a-401d-acca-95e3364d95ac/AIR+FORCE+1+%28GS%29.png' alt="resim"/>
      </div>
      
    
      </Slider>
  )
}

export default SliderComp