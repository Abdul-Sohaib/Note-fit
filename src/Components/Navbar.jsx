// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import AOS from 'aos';
import { motion} from "framer-motion"
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
    <h1 className=' flex text-9xl font-headingg  justify-center items-center text-customyellow tracking-wider z-50  sm:text-7xl esm:text-6xl' >FIT-NOTE</h1>
    <motion.h3 className=' flex text-4xl font-body font-black justify-center items-center text-customBlack z-50 md:text-3xl sm:text-2xl sm:text-center xl:text-3xl'  data-aos="fade-down"
      data-aos-anchor-placement="center-center"  initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      transition={{
        duration: 0.8,
        delay: 0.5,}}
        >START TRACKING YOUR TRANSFORMATION TODAY!</motion.h3>
    </div>
    </>
  )
}

export default Navbar;