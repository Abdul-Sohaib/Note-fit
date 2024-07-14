// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// eslint-disable-next-line no-unused-vars
import Aos from 'aos';
const Navbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
    });
    AOS.refresh();
  }, []);
  return (
    <>
    <div className='gap-3 flex flex-col py-4 z-50'>
    <h1 className=' flex text-6xl font-heading font-bold justify-center items-center text-customyellow tracking-wider z-50 underline' >FIT-NOTE</h1>
    <h3 className=' flex text-4xl font-body font-bold justify-center items-center tracking-wide text-white z-50 md:text-3xl sm:text-2xl sm:text-center'  data-aos="fade-down"
      data-aos-anchor-placement="center-center">START TRACKING TRANSFORMATION TODAY!</h3>
    </div>
    </>
  )
}

export default Navbar;