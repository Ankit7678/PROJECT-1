import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';

const settings = {
    dot:true,
    infinite:true,
    autoplay:true,
    speed:1000,
    swipeToSlide:true,
    autoplaySpeed:2000,
    slidesToShow:3,

    responsive :[
        {
            breakpoint:992,
            setting:{
                slidesToShow:3,
                swipeToScroll:1,
                infinite:true,
                dot:true,   
            }
        },

        {
            breakpoint:576,
            setting:{
                slidesToShow:3,
                swipeToScroll:1,
                   
            }
        }
    ]
}

const Testimonials = () => {
    return (
        <div>
            <Slider {...settings}>
                <div className='testimonials py-4 px-3'>
                    <p>
                    "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system."
                    </p>
                    <div className='d-flex align-item-center gap-4 mt-3'>
                        <img src={ava01} className='w-25 h-25 round-2' alt='' />
                        <div>
                            <h6 className='mb-0 mt-3'>Name of the reviewer</h6>
                            <p>Designation of the reviewer</p>
                        </div>
                    </div>
                </div>

                <div className='testimonials py-4 px-3'>
                    <p>
                    "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system."
                    </p>
                    <div className='d-flex align-item-center gap-4 mt-3'>
                        <img src={ava02} className='w-25 h-25 round-2' alt='' />
                        <div>
                            <h6 className='mb-0 mt-3'>Name of the reviewer</h6>
                            <p>Designation of the reviewer</p>
                        </div>
                    </div>
                </div>

                <div className='testimonials py-4 px-3'>
                    <p>
                    "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system."
                    </p>
                    <div className='d-flex align-item-center gap-4 mt-3'>
                        <img src={ava03} className='w-25 h-25 round-2' alt='' />
                        <div>
                            <h6 className='mb-0 mt-3'>Name of the reviewer</h6>
                            <p>Designation of the reviewer</p>
                        </div>
                    </div>
                </div>

                <div id="carouselExampleIndicators" class="carousel slide">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
            </Slider>

        </div>
    )
}

export default Testimonials


{/* <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}
