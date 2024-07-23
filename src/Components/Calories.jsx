

// eslint-disable-next-line no-unused-vars
import Aos from 'aos';
import { motion} from "framer-motion"
import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import React from 'react'
const Calories = () => {
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [calories, setCalories] = useState(null);
  const handlemaleChange = (event) => {
    setGender(event.target.value);
  };
  const handleageChange = (event) => {
    setAge(event.target.value);
  };
  const handleheightChange = (event) => {
    setHeight(event.target.value);
  };
  const handleweightChange = (event) => {
    setWeight(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let bmr;
    if (gender === 'Male') {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (gender === 'Female') {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
    setCalories(bmr);
  };
return (
    <>
   
    <motion.div className='containercal flex flex-col gap-1 '   initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0,
        ease: [0, 0.71, 0.2, 1.01]
      }}>
   <div className='flex justify-center items-center w-full'>
    <h2 className='flex text-2xl font-headingg  justify-center self-center text-customyellow relative  my-10 underline'>Calories-Calculator</h2>
    </div>
    <div className='calories-content flex flex-col mx-20 '>
    <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-3 '>
      <div className='flex justify-center items-center'>
    <button className='caloriestbtn bg-white flex justify-center items-center relative p-2 py-1 text-sm font-bold rounded-md font-body'>Submit</button>
    </div>
    {calories && <div className='flex text-lg font-body font-extrabold justify-center items-center text-customBlack relative mx-1 my-3 '>Your estimated daily calorie needs: {calories.toFixed(2)} kcal</div>}
    <motion.div className='backdrop-blur-3xl border-zinc-50 border-2 rounded-3xl box '
      whileHover={{scale: 1.1 }} transition={{duration:0.3}}>
        <h3 className='flex text-xl font-body font-extrabold justify-center items-center text-customyellow relative esm:text-sm'>Select your gender</h3>
        <div className=' flex flex-row gap-4 items-center justify-center my-7'>
        <div>
        <label className='text-customyellow text-lg font-body font-extrabold'>
          <input
            type="radio"
            value="Male"
            checked={gender === 'Male'}
            onChange={handlemaleChange}
          />
          Male
        </label>
        </div>
        <div>
        <label className='text-customyellow text-lg font-body font-extrabold'>
          <input
            type="radio"
            value="Female"
            checked={gender === 'Female'}
            onChange={handlemaleChange}
          />
          Female
        </label>
        </div>
        </div>
        </motion.div>
     
{/* age change code */}
<motion.div className='box backdrop-blur-3xl border-zinc-50 border-2 rounded-3xl mx-4' whileHover={{scale: 1.1 }} transition={{duration:0.3}}>
      <h3 className='flex text-xl font-body font-extrabold justify-center items-center  text-customyellow relative   esm:text-sm'>Select your Age</h3>
      <div className=' flex flex-row gap-4 items-center justify-center my-7'>
      <div>
        <label className=' text-lg font-body font-extrabold'>
          <h3 className='text-customyellow text-lg font-body font-extrabold flex gap-2'>Age:
          <select className='bg-transparent rounded-md border-yellow-300 border-2' value={age} onChange={handleageChange}>
            <option className='text-customred bg-customBlack' value="" disabled ><h3 >Select your age</h3></option>
            {[...Array(100).keys()].map((num) => (
              <option className='text-customred bg-customBlack' key={num + 1} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </select>
          </h3>
        </label>
      </div>
      </div>
      </motion.div>
    {/* height change code */}
    <motion.div className='box backdrop-blur-3xl border-zinc-50 border-2 rounded-3xl mx-4' whileHover={{scale: 1.1 }} transition={{duration:0.3}}>
      <h2 className='flex text-xl font-body font-extrabold justify-center items-center  text-customyellow relative   esm:text-sm'>Select Height</h2>
      <div className='flex flex-row gap-4 items-center justify-center my-7'>
      <div>
        <label className=' text-lg font-body font-extrabold'>
          <h3 className='text-customyellow text-lg font-body font-extrabold flex gap-2'>Height:
          <select className='bg-transparent rounded-md border-yellow-300 border-2' value={height} onChange={handleheightChange}>
            <option className='text-customred bg-customBlack' value="" disabled>Select your height</option>
            {[...Array(151).keys()].map((num) => (
              <option className='text-customred bg-customBlack' key={num + 100} value={num + 100}>
                {num + 100} cm
              </option>
            ))}
          </select>
          </h3>
        </label>
      </div>
      </div>
      </motion.div>
 {/* weight change code */}
 <motion.div className='box backdrop-blur-3xl border-zinc-50 border-2 rounded-3xl mx-4' whileHover={{scale: 1.1 }} transition={{duration:0.3}}>
      <h2 className='flex text-xl font-body font-extrabold justify-center items-center  text-customyellow relative   esm:text-sm'>Select Weight</h2>
      <div className='flex flex-row gap-4 items-center justify-center my-7'>
      <div className='gap-4'>
        <label className=' text-lg font-body gap-3 font-bold'>
          <h3 className='text-customyellow text-lg  font-body font-extrabold flex gap-2'>Weight:
          <select className='gap-4 bg-transparent rounded-md border-yellow-300 border-2' value={weight} onChange={handleweightChange}>
            <option className='text-customred bg-customBlack' value="" disabled><h3 className='text-customBlue'>Select your weight</h3></option>
            {[...Array(201).keys()].map((num) => (
              <option className='text-customred bg-customBlack' key={num + 30} value={num + 30}>
                {num + 30} kg
              </option>
            ))}
          </select>
          </h3>
        </label>
      </div>
      </div>
      </motion.div>
    </form>
    </div>
    
    </motion.div>
    
    </>
  )
}

export default Calories