import { motion } from 'framer-motion';
import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import React from 'react'
const Bmiorg = () => {
  
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
        bmr = weight / ((height / 100) * (height / 100));
      } else if (gender === 'Female') {
        bmr =  weight / ((height / 100) * (height / 100));
      }
      setCalories(bmr);
    };
  return (
      <>
     
      <motion.div className='containercal flex flex-col gap-1 '  initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0,
        ease: [0, 0.71, 0.2, 1.01]
      }}>
        <div className='flex justify-center items-center w-96'>
      <h2 className='flex text-xl font-body font-bold justify-center items-center right-16 text-yellow-300 relative pl-40 my-10 underline'>BMI-Calculator</h2>
      </div>
      <div className='calories-content flex flex-col '>
      <form onSubmit={handleSubmit}>
      <div className='flex justify-center items-center'>
    <button className='caloriestbtn bg-white flex justify-center items-center relative p-2 py-1 text-sm font-bold rounded-md '>Submit</button>
    </div>
      {calories && <div className='flex text-lg font-body font-bold justify-center items-center text-red-500 relative mx-2 my-3 '>Your estimated BMI: {calories.toFixed(2)} kg/m2</div>}
          <h3 className='flex text-xl font-body font-bold justify-center items-center right-16 text-yellow-300 relative pl-40 underline esm:text-sm'>Select your gender</h3>
          <div className='flex flex-row gap-4 items-center justify-center my-7'>
          <div>
          <label className='text-yellow-300 text-lg font-body font-bold'>
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
          <label className='text-yellow-300 text-lg font-body font-bold'>
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
       
  {/* age change code */}
        <h3 className='flex text-xl font-body font-bold justify-center items-center right-16 text-yellow-300 relative pl-40 underline esm:text-sm'>Select your Age</h3>
        <div className='flex flex-row gap-4 items-center justify-center my-7'>
        <div>
          <label className='text-black text-lg font-body font-bold'>
            <h3 className='text-yellow-300 text-lg font-body font-bold flex gap-2'>Age:
            <select className='bg-black rounded-md border-yellow-300 border-2' value={age} onChange={handleageChange}>
              <option className='text-customBlue' value="" disabled ><h3>Select your age</h3></option>
              {[...Array(100).keys()].map((num) => (
                <option className='text-customBlue' key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
            </h3>
          </label>
        </div>
        </div>
      {/* height change code */}
        <h2 className='flex text-xl font-body font-bold justify-center items-center right-16 text-yellow-300 relative pl-40 underline esm:text-sm'>Select Height</h2>
        <div className='flex flex-row gap-4 items-center justify-center my-7'>
        <div>
          <label className='text-black text-lg font-body font-bold'>
            <h3 className='text-yellow-300 text-lg font-body font-bold flex gap-2'>Height:
            <select className='bg-black rounded-md border-yellow-300 border-2' value={height} onChange={handleheightChange}>
              <option className='text-customBlue' value="" disabled>Select your height</option>
              {[...Array(151).keys()].map((num) => (
                <option className='text-customBlue' key={num + 100} value={num + 100}>
                  {num + 100} cm
                </option>
              ))}
            </select>
            </h3>
          </label>
        </div>
        </div>
   {/* bmi change code */}
        <h2 className='flex text-xl font-body font-bold justify-center items-center right-16 text-yellow-300 relative pl-40 underline esm:text-sm'>Select-Weight</h2>
        <div className='flex flex-row gap-4 items-center justify-center my-7'>
        <div>
          <label className='text-black text-lg font-body font-bold'>
            <h3 className='text-yellow-300 text-lg font-body font-bold flex gap-2'>weight:
            <select className='bg-black rounded-md border-yellow-300 border-2' value={weight} onChange={handleweightChange}>
              <option className='text-customBlue' value="" disabled>Select your weight</option>
              {[...Array(201).keys()].map((num) => (
                <option className='text-customBlue' key={num + 30} value={num + 30}>
                  {num + 30} kg
                </option>
              ))}
            </select>
            </h3>
          </label>
        </div>
        </div>
      
      </form>
      </div>
      
      </motion.div>
      
      </>
    
  )
}

export default Bmiorg