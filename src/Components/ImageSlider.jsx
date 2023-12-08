// // import React, { useState, useEffect } from 'react';
// // import './ImageSlider.css'; // Import your CSS for styling


// // const images = [
// //   'banner-1.jpg',
// //   'banner-2.jpg',
// //   'banner-3.jpg',
// //   // Add more image URLs here
// // ];
// // function ImageSlider() {
// //   // const images = [
// //   //   'banner-1.jpg',
// //   //   'banner-2.jpg',
// //   //   'banner-3.jpg',
// //   //   // Add more image URLs here
// //   // ];

// //   // const [currentIndex, setCurrentIndex] = useState(0);
// //   // const totalImages = images.length;

// //   // // Automatic image slider
// //   // useEffect(() => {
// //   //   const timer = setInterval(() => {
// //   //     setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
// //   //   }, 3000); // Change image every 3 seconds

// //   //   return () => {
// //   //     clearInterval(timer); // Clear the interval on component unmount
// //   //   };
// //   // }, [totalImages]);

// //   // const goToNextSlide = () => {
// //   //   setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
// //   // };

// //   // const goToPrevSlide = () => {
// //   //   setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
// //   // };

// //   // return (
// //   //   <div className="image-slider">
// //   //     <button onClick={goToPrevSlide} className="slider-button prev">
// //   //       &lt;
// //   //     </button>
// //   //     <div className="slider-content">
// //   //       {images.map((image, index) => (
// //   //         <div
// //   //           key={index}
// //   //           className={`slide ${index === currentIndex ? 'active' : ''}`}
// //   //         >
// //   //           <img src={image} alt={`Slide ${index + 1}`} />
// //   //         </div>
// //   //       ))}
// //   //     </div>
// //   //     <button onClick={goToNextSlide} className="slider-button next">
// //   //       &gt;
// //   //     </button>
// //   //   </div>
// //   );
// // }

// // export default ImageSlider;

// import React from "react";
// import Image1 from '../Assets/banner-1.jpg';
// import Image2 from '../Assets/banner-2.jpg';
// import Image3 from '../Assets/banner-3.jpg';
// import '../Components/ImageSlider.css';
// // import Dhf from "./Dhf";
// const card = [{
//   icon: 'truck',
//   heading: 'this is truck',
//   para: 'it is a paragraph about truck',
//   link: 'learn more'
// },
// {
//   icon: 'delivery',
//   heading: 'this is delivery',
//   para: 'it is a paragraph about truck',
//   link: 'learn more'
// },
// {
//   icon: 'help',
//   heading: 'this is help',
//   para: 'it is a paragraph about truck',
//   link: 'learn more'
// }
// ]

// const img = [Image1, Image2, Image3];
// const delay = 2500;

// // const card = {
// //   para: 'Effortlessly cool, for the traditionalists of today'
// // }

// function ImageSlider() {
//   const [index, setIndex] = React.useState(0);
//   const timeoutRef = React.useRef(null);
//   function resetTimeout() {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//   }
//   React.useEffect(() => {
//     resetTimeout();
//     timeoutRef.current = setTimeout(
//       () =>
//         setIndex((prevIndex) =>
//           prevIndex === img.length - 1 ? 0 : prevIndex + 1
//         ),
//       delay
//     );
//     return () => {
//       resetTimeout();
//     };
//   }, [index]);
//   // })
//   return (
//     <div className="slideshow">
//       <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%,0,0)` }}>
        
//         {
//           img.map((image, index) => (

//             <img className="slide" key={index} src={image} alt="" />
            
//           )
//           )
//         }
//         {/* {
//             <div class="card " style={{ width: '18rem'}}>
//             {card.map((value, key) => (
//                 <div class="card-body " key={key}>
//                     <h5 class="card-title">{value.icon}</h5>
//                     <h6 class="card-subtitle mb-2 text-body-secondary">{value.heading}</h6>
//                     <p class="card-text">{value.para}</p>
//                     <a href="#" class="card-link">{value.link}</a>
//                 </div>
//             ))
//             }
//         </div>
//         } */}
//         {/* <div class="card" style={{width: "18rem", margin:'-10px'}}>
//           <div class="card-body">
//             <h5 class="card-title">Card title</h5>
//             <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
//             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//             <a href="#" class="card-link">Another link</a>
//           </div>
//         </div> */}
//       </div>
//       <div className="slideshowDots">
//         {img.map((_, indx) => (
//           <div key={indx} className={`slideshowDot${index === indx ? " active" : ""}`}
//             onClick={() => {
//               setIndex(indx);
//             }}
//           ></div>
//         ))}
//       </div>
//     </div>
//   )
// }
// export default ImageSlider;

// // function ImageSlider(){
// //   return(
// //     <div>
// //       { img.map((image, index)=>{
// //         return(
// //   <img key={index} src={image} alt=""/>)
// // })
// // }
// //     </div>
// //   )
// // }
// // export default ImageSlider;
