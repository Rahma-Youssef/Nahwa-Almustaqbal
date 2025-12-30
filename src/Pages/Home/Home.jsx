import React from 'react'
import IamgeSlide from '../../Components/ImageSlide/ImageSlide'
import heroImage from '../../assets/images/hero-construction.jpg'
import SplitText from '../../Components/SplitText';
import GradientText from '../../Components/GradientText';
import SocialLinks from '../../Components/SocialLinks/SocialLinks';


const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

const Home = () => {
  return (
    <section className="relative md:min-h-screen h-100vh flex items-center justify-center overflow-hidden" id='home'>
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* Background image */}
        <img
          src={heroImage}
          alt="Construction site"
          className="w-full h-full object-cover"
        />

        {/* Global dark overlay */}
        <div className="absolute inset-0 hero-overlay" />


        {/* Top & bottom vignette */}
        <div className="absolute -bottom-20 -right-20 w-96 h-96 gold-gradient opacity-10 rounded-full blur-3xl"
        />
        {/* Left to right cinematic gradient */}
        <div className="aabsolute -top-20 -left-20 w-72 h-72 gold-gradient opacity-10 rounded-full blur-3xl"
        />



        {/* Warm tint (optional but recommended) */}
        <div className="absolute inset-0 bg-gray-500/10 mix-blend-overlay" />
      </div>


      {/* Content */}
      <div className="relative z-10 container-wide px-6 lg:px-12 py-32">
        <div className="max-w-3xl">
          <div className="animate-fade-up text-center" style={{ animationDelay: '0.1s' }}>

            <SplitText
              text="NAHWA  ALMUSTAQBAL"
              className="md:text-6xl text-2xl font-bold text-white  text-center"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </div>


          <GradientText
            colors={["#2A485E", "#ffd251"]}
            className="font-extrabold text-center md:text-3xl text-xl mb-8 mt-2 animate-fade-up"
          >
            General Contracting Company L.L.C
          </GradientText>


          <div className="text-white mb-8 animate-fade-up text-center" style={{ animationDelay: '0.3s' }}>
            <h1 className='md:text-4xl text-xl font-serif font-bold'>نحو المستقبل</h1>
            <p className='md:text-3xl text-md md:mt-3 font-serif'>نبني بثقة… ونصنع مستقبلًا أقوى</p>

          </div >
          <div className='w-full mx-auto'>
            <SocialLinks></SocialLinks>
          </div>
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >

          </div>
        </div>
      </div>


    </section>
  )
}

export default Home