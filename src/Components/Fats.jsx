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
        <div className='flex justify-center items-center w-96'>
                <h2 className='flex text-xl font-body font-bold justify-center items-center right-16 text-yellow-300 relative pl-40 my-10 underline'>Fats-calculator</h2>
                </div>
                <div className='calories-content flex flex-col esm:w-72 '>
                    <form onSubmit={handleSubmit}>
                    <div className='flex justify-center items-center'>
    <button className='caloriestbtn bg-white flex justify-center items-center relative p-2 py-1 text-sm font-bold rounded-md'>Submit</button>
    </div>
                    {fatBurn !== null && <div className=' flex text-lg font-body font-bold justify-center items-center mx-4 text-red-500 relative'>Your estimated calorie burned: {fatBurn.toFixed(2)} kcal</div>}
                        <h2 className='flex text-xl font-body font-bold justify-center items-center right-16 text-yellow-300 relative pl-40 underline esm:text-sm'>Select Weight</h2>
                        <div className='flex flex-row gap-4 items-center justify-center my-7'>
                            <div>
                                <label className='text-black text-lg font-body font-bold'>
                                    <h3 className='text-yellow-300 text-lg font-body font-bold flex gap-2'>Weight:
                                        <select className='bg-black rounded-md border-yellow-300 border-2' value={weight} onChange={handleWeightChange}>
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
                        <h2 className='flex text-xl font-body font-bold justify-center items-center right-16 text-yellow-300 relative pl-40 underline esm:text-sm'>Select Duration</h2>
                        <label className='text-black text-lg font-body font-bold gap-4 flex justify-center items-center mx-8'>
                            <div className='flex flex-row gap-4 items-center justify-center my-7'>
                                <h3 className='text-yellow-300 text-lg font-body font-bold'>Hours:
                                    <select className='bg-black rounded-md border-yellow-300 border-2' value={hours} onChange={handleHoursChange}>
                                        <option className='text-customBlue' value="" disabled>Select hours</option>
                                        {[...Array(24).keys()].map((num) => (
                                            <option className='text-customBlue' key={num} value={num}>
                                                {num} hours
                                            </option>
                                        ))}
                                    </select>
                                </h3>
                                <h3 className='text-yellow-300 text-lg font-body font-bold'>Minutes:
                                    <select className='bg-black rounded-md border-yellow-300 border-2' value={minutes} name="duration" onChange={handleMinutesChange}>
                                        <option className='text-customBlue' value="" disabled>Select minutes</option>
                                        {[...Array(60).keys()].map((num) => (
                                            <option className='text-customBlue' key={num + 1} value={num + 1}>
                                                {num + 1}
                                            </option>
                                        ))}
                                    </select>
                                </h3>
                            </div>
                        </label>
                        <h2 className='flex text-xl font-body font-bold justify-center items-center right-16 text-yellow-300 relative pl-40 underline esm:text-sm'>Select Exercise-Type</h2>
                        <div className='flex flex-row gap-4 items-center justify-center my-7'>
                            <label className='text-black text-lg font-body font-bold'>
                                <h3 className='text-yellow-300 text-lg font-body font-bold flex gap-2'>Exercise Type:
                                    <select className='bg-black rounded-md border-yellow-300 border-2' value={exerciseType} onChange={handleExerciseTypeChange}>
                                        <option className='text-customBlue' value="" disabled>Select exercise type</option>
                                        <option className='text-customBlue' value="Normal">Normal</option>
                                        <option className='text-customBlue' value="Intermediate">Intermediate</option>
                                        <option className='text-customBlue' value="Extensive">Extensive</option>
                                    </select>
                                </h3>
                            </label>
                        </div>
                    </form>
                        
                    </div>
            </motion.div>
        </>
    );
};

export default Fats;
