
import React from 'react';
// import { ImageSwiper } from '../image-swiper';
 import { ThreeDPhotoCarousel } from '../ui/3d-carousel'; 
import workImg1 from '../../assets/images/workImg1.jpg'
import workImg2 from '../../assets/images/workImg2.jpg'
import workImg3 from '../../assets/images/workImg3.jpg'
import workImg4 from '../../assets/images/workImg4.jpg'
import workImg5 from '../../assets/images/workImg5.jpg'
import workImg6 from '../../assets/images/workImg6.jpg'
import workImg7 from '../../assets/images/workImg7.jpg'
import workImg8 from '../../assets/images/workImg8.jpg'
import workImg9 from '../../assets/images/workImg9.jpg'
import workImg10 from '../../assets/images/workImg10.jpg'
import workImg11 from '../../assets/images/workImg11.jpg'
import workImg12 from '../../assets/images/workImg12.jpg'
import workImg13 from '../../assets/images/workImg13.jpg'
import workImg14 from '../../assets/images/workImg14.jpg'
import workImg15 from '../../assets/images/workImg15.jpg'



const images = [
  {
    id: 1,
    src: workImg1,
  },
  {
    id: 2,
    src: workImg2,
  },
  {
    id: 3,
    src: workImg3,
  },
  {
    id: 4,
    src: workImg4,
  },
  {
    id: 5,
    src: workImg5,
  },
  {
    id: 6,
    src: workImg6,
  },
  {
    id: 7,
    src: workImg7,
  },
  {
    id: 8,
    src: workImg8,
  },
  {
    id: 9,
    src: workImg9,
  },
  {
    id: 10,
    src: workImg10,

  },
  {
    id: 11,
    src: workImg11,

  },
  {
    id: 12,
    src: workImg12,

  },
  {
    id: 13,
    src: workImg13,

  },
  {
    id: 14,
    src: workImg14,

  },
  {
    id: 15,
    src: workImg15,

  }
];


const ImageSlide = () => {

  return (

     <div className="md:w-full w-[95%] max-w-4xl mx-auto">
      <div className=" flex flex-col justify-center   mx-auto rounded-lg space-y-4">
        <div className="p-2">
          <ThreeDPhotoCarousel />
        </div>
      </div>
    </div>
  );
};

 export default ImageSlide;


