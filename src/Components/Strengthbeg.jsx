// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import AOS from 'aos';
import 'aos/dist/aos.css';
const Strengthbeg = () => {
  return (
    <div className=''>
    <h3 className="text-4xl justify-center font-headingg font-bold underline text-customBlack tracking-wider">Beginner </h3>
    <div className='flex text-customyellow flex-col flex-1 gap-2 text-pretty font-bold my-4'>
    <span className='my-3  text-customBlack  font-headingg' data-aos="fade-up"
     data-aos-anchor-placement="top-center">Day 1: Full Body</span>

<ol className='flex flex-col gap-2 justify-center items-start mx-3  font-body' data-aos="fade-up">
<li>1.(Squats: 3 sets of 10 reps).</li>
<li>2.(Push-ups: 3 sets of 10 reps).</li>
<li>3.(Dumbbell Rows: 3 sets of 10 reps).</li>
<li>4.(Planks: 3 sets of 30 seconds).</li>
</ol>
<span className='my-3  text-customBlack  font-headingg' data-aos="fade-up">Day 2: Rest or Light Activity</span>

<span className='my-3  text-customBlack  font-headingg'data-aos="fade-down" >Day 3: Full Body</span>

<ol className='flex flex-col gap-2 justify-center items-start font-body ' data-aos="fade-up">
<li>1.(Deadlifts: 3 sets of 10 reps).</li>
<li>2.(Dumbbell Bench Press: 3 sets of 10 reps).</li>
<li>3.(Lunges: 3 sets of 10 reps (each leg)).</li>
<li>4.(Russian Twists: 3 sets of 15 reps).</li></ol>
<span className='my-3  text-customBlack  font-headingg' data-aos="fade-up">Day 4: Rest or Light Activity</span>

<span className='my-3  text-customBlack  font-headingg'data-aos="fade-down" >Day 5: Full Body</span>

<ol className='flex flex-col gap-2 justify-center items-start font-body ' data-aos="fade-up">
<li>1.(Leg Press: 3 sets of 10 reps).</li>
<li>2.(Overhead Press: 3 sets of 10 reps).</li>
<li>3.(Pull-ups: 3 sets of 5 reps (or assisted)).</li>
<li>4.(Bicycle Crunches: 3 sets of 20 reps).</li>
</ol>
<span className='my-3  text-customBlack  font-headingg' data-aos="fade-up">Day 6: Rest or Light Activity</span>

<span className='my-3  text-customBlack  font-headingg' data-aos="fade-down">Day 7: Rest</span>
</div>
   
    </div>
  )
}

export default Strengthbeg