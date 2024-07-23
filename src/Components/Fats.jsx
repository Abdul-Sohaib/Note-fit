import { motion } from 'framer-motion';
import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import React from 'react';

const Fats = () => {
    const [weight, setWeight] = useState('');
    const [minutes, setMinutes] = useState('');
    const [hours, setHours] = useState('');
    const [exerciseType, setExerciseType] = useState('');
    const [fatBurn, setFatBurn] = useState(null);

    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    };

    const handleMinutesChange = (event) => {
        setMinutes(event.target.value);
    };

    const handleHoursChange = (event) => {
        setHours(event.target.value);
    };

    const handleExerciseTypeChange = (event) => {
        setExerciseType(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const totalMinutes = parseInt(hours || 0) * 60 + parseInt(minutes || 0);
        
        let burnRate;
        switch (exerciseType) {
          case 'Normal':
            burnRate = 5; // calories burned per minute
            break;
          case 'Intermediate':
            burnRate = 8;
            break;
          case 'Extensive':
            burnRate = 12;
            break;
          default:
            burnRate = 0;
        }

        const totalCaloriesBurned = burnRate * totalMinutes * (weight / 60); // Adjusted for weight
        setFatBurn(totalCaloriesBurned);
    };

    return (
        <>
            <motion.div className='containercal flex flex-col gap-1'  initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0,
        ease: [0, 0.71, 0.2, 1.01]
      }}>
        <div className='flex justify-center self-center w-full'>
                <h2 className='flex text-2xl font-headingg justify-center items-center  text-customyellow relative  my-10 underline'>Fats-calculator</h2>
                </div>
                <div className='calories-content flex flex-col esm:w-72 mx-8 '>
                    <form onSubmit={handleSubmit} className='flex flex-col justify-center self-center gap-3'>
                    <div className='flex justify-center items-center'>
    <button className='caloriestbtn bg-white flex justify-center items-center relative p-2 py-1 text-sm font-extrabold rounded-md font-body'>Submit</button>
    </div>
                    {fatBurn !== null && <div className=' flex text-lg font-body font-extrabold justify-center items-center mx-4 text-customBlack relative'>Your estimated calorie burned: {fatBurn.toFixed(2)} kcal</div>}
                    {/* weight */}
                    <motion.div className='box backdrop-blur-3xl border-zinc-50 border-2 rounded-3xl mx-4' whileHover={{scale: 1.1 }} transition={{duration:0.3}}>
                        <h2 className='flex text-xl font-body font-bold justify-center items-center  text-customyellow relative esm:text-sm'>Select Weight</h2>
                        <div className='flex flex-row  items-center justify-center my-7'>
                            <div>
                                <label className=' text-lg font-body font-bold'>
                                    <h3 className='text-customyellow text-lg font-body font-extrabold flex gap-2'>Weight:
                                        <select className='bg-transparent rounded-md border-yellow-300 border-2' value={weight} onChange={handleWeightChange}>
                                            <option className='text-customred bg-customBlack' value="" disabled>Select your weight</option>
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
                        {/* duration */}
                        <motion.div className='box backdrop-blur-3xl border-zinc-50 border-2 rounded-3xl mx-4' whileHover={{scale: 1.1 }} transition={{duration:0.3}}>
                        <h2 className='flex text-xl font-body font-extrabold justify-center items-center  text-customyellow relative esm:text-sm'>Select Duration</h2>
                        <label className=' text-lg font-body font-extrabold flex justify-center items-center mx-8'>
                            <div className='flex flex-row  items-center justify-center my-7 gap-2'>
                                <h3 className='text-customyellow text-lg font-body font-extrabold'>Hours:
                                    <select className='bg-transparent rounded-md border-yellow-300 border-2' value={hours} onChange={handleHoursChange}>
                                        <option className='text-customred bg-customBlack' value="" disabled>Select hours</option>
                                        {[...Array(24).keys()].map((num) => (
                                            <option className='text-customred bg-customBlack' key={num} value={num}>
                                                {num} hours
                                            </option>
                                        ))}
                                    </select>
                                </h3>
                                <h3 className='text-customyellow text-lg font-body font-extrabold'>Minutes:
                                    <select className='bg-transparent rounded-md border-yellow-300 border-2' value={minutes} name="duration" onChange={handleMinutesChange}>
                                        <option className='text-customred bg-customBlack' value="" disabled>Select minutes</option>
                                        {[...Array(60).keys()].map((num) => (
                                            <option className='text-customred bg-customBlack' key={num + 1} value={num + 1}>
                                                {num + 1}
                                            </option>
                                        ))}
                                    </select>
                                </h3>
                            </div>
                        </label>
                        </motion.div>
                        {/* exerciseType */}
                        <motion.div className='box backdrop-blur-3xl border-zinc-50 border-2 rounded-3xl mx-4' whileHover={{scale: 1.1 }} transition={{duration:0.3}}>
                        <h2 className='flex text-xl font-body font-extrabold justify-center items-center  text-customyellow relative esm:text-sm'>Select Exercise-Type</h2>
                        <div className='flex flex-row items-center justify-center my-7'>
                            <label className=' text-lg font-body font-extrabold'>
                                <h3 className='text-customyellow text-lg font-body font-extrabold flex gap-2'>Exercise Type:
                                    <select className='bg-transparent rounded-md border-yellow-300 border-2' value={exerciseType} onChange={handleExerciseTypeChange}>
                                        <option className='text-customred bg-customBlack' value="" disabled>Select exercise type</option>
                                        <option className='text-customred bg-customBlack' value="Normal">Normal</option>
                                        <option className='text-customred bg-customBlack' value="Intermediate">Intermediate</option>
                                        <option className='text-customred bg-customBlack' value="Extensive">Extensive</option>
                                    </select>
                                </h3>
                            </label>
                        </div>
                        </motion.div>
                    </form>
                    
                        
                    </div>
                    
            </motion.div>
        </>
    );
};

export default Fats;
