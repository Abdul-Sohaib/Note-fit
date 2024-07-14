// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
const Footer = () => {
  return (
    <div className='flex flex-1 flex-col gap-5 pt-10'>
    <motion.h3 className='flex text-6xl font-heading font-bold justify-around items-center text-center text-customred tracking-wide mx-3 md:text-4xl sm:text-3xl exsm:text-2xl' >
          `Consistency is the key to unlocking your power. With a positive mindset, every rep, every set, and every challenge becomes an opportunity to sculpt your strongest self.`
    </motion.h3>
    <motion.h1 className='flex text-4xl font-body font-bold justify-start items-start tracking-wide text-customyellow pl-10 md:text-3xl sm:text-xl exsm:text-sm' >:Arnold Schwarzenegger</motion.h1>
    </div>
  )
}

export default Footer