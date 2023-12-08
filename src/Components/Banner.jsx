// import React from "react";
// import banner1 from '../Assets/banner-1.jpg';
// import banner2 from '../Assets/banner-2.jpg';
// import banner3 from '../Assets/banner-3.jpg';
// import '../Components/Banner.css';
// import Banner1 from "./Banner1";
// import '../Components/Banner1'
// import Bannercard from "./Bannercard";
// import Bannercard3 from "./Bannercard3";
// function Banner() {
//     return (
        // <div className="slider">
        //     <div className="slides">
        //         <input type="radio" name="radio-btn" id="radio1" />
        //         <input type="radio" name="radio-btn" id="radio2" />
        //         <input type="radio" name="radio-btn" id="radio3" />
        //         <div className="slide first">
        //             <img src={banner1} alt="" style={{height:'615px'}} />
        //             <Bannercard/>
        //         </div>
        //         <div className="slide">
        //             <img src={banner2} alt="" style={{height:'615px'}}/>
        //             <Bannercard/>
        //         </div>
        //         <div className="slide">
        //             <img src={banner3} alt="" style={{height:'615px'}}/>
        //             <Bannercard3/>
        //         </div>
        //         <div className="navigation-auto">
        //             <div className="auto-btn1"></div>
        //             <div className="auto-btn2"></div>
        //             <div className="auto-btn3"></div>
        //         </div>
        //     </div>
        //     <div className="navigation-manual">
        //         <label htmlFor="radio1" className="manual-btn"></label>
        //         <label htmlFor="radio2" className="manual-btn"></label>
        //         <label htmlFor="radio3" className="manual-btn"></label>
        //     </div>
        //     <Banner1/>

        // </div>




//         <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
//             <div class="carousel-inner">
//                 <div class="carousel-item active">
//                     <img src={banner1} class="d-block w-100" alt="..." style={{ height: '650px' }} />
//                     <div class="card card-body position-absolute top-50 start-0 translate-middle-y" style={{ width: "18rem" }}>
//                         <p class="card-title">Efffortlessly cool, for the traditionalists of today</p>
//                         <p>EXPLORE COLLECTION</p>
//                     </div>
//                 </div>
//                 <div class="carousel-item" >
//                     <img src={banner2} class="d-block w-100" alt="..." style={{ height: '650px' }} />
//                     <div class="card card-body position-absolute top-50 start-0 translate-middle-y" style={{ width: "18rem" }}>
//                         <p class="card-title">Efffortlessly cool, for the traditionalists of today</p>
//                         <p>EXPLORE COLLECTION</p>
//                     </div>
//                 </div>
//                 <div class="carousel-item" >
//                     <img src={banner3} class="d-block w-100" alt="..." style={{ height: '650px' }} />
//                     <div class="card card-body position-absolute top-50 start-0 translate-middle-y" style={{ width: "18rem" }}>
//                         <p class="card-title">Efffortlessly cool, for the traditionalists of today</p>
//                         <p>EXPLORE COLLECTION</p>
//                     </div>
//                 </div>
//             </div>
//             <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
//                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span class="visually-hidden">Previous</span>
//             </button>
//             <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
//                 <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span class="visually-hidden">Next</span>
//             </button>
//         </div>


//     )
// }
// export default Banner;



import React from 'react';
import banner1 from '../Assets/banner-1.jpg';
import banner2 from '../Assets/banner-2.jpg';
import banner3 from '../Assets/banner-3.jpg';
import '../CSS/Banner.css';

export default function Banner() {


  return (
    <div>
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active position-relative">
              <img src={banner1} class=" w-100" alt="background1" />
                <div class="carousel-caption d-sm-block position-absolute">

                <div className='fig-box text-start'>
                <h4 className='text-dark fw-normal '>Effortlessly cool, for the traditionalists of today</h4>
                <p className='text-primary fw-bold'><a>EXPLORE COLLECTION</a></p>
                </div>
              </div>
            </div>

              <div class="carousel-item">
                <img src={banner2} class="d-block w-100" alt="background2" />
              </div>
              <div class="carousel-item">
                <img src={banner3} class="d-block w-100" alt="background3" />
              </div>
          </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
        </div>

    </div>
  )
}