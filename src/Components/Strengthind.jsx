// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import AOS from 'aos';
import 'aos/dist/aos.css';
const Strengthind = () => {
  return (
    <div className=''>
    <h3 className="text-3xl text-white justify-center font-heading font-bold underline tracking-wider">Intermediate </h3>
    <div className='flex text-customyellow flex-col flex-1 gap-2 text-pretty font-bold my-4'>
    <span className='my-3 underline text-white font-extrabold' data-aos="fade-up"
     data-aos-anchor-placement="top-center">Day 1: Upper Body</span>

<ol className='flex flex-col gap-2 justify-center items-start mx-3' data-aos="fade-up">
<li>1.(Bench Press: 4 sets of 8 reps).</li>
<li>2.(Bent Over Rows: 4 sets of 8 reps).</li>
<li>3.(Shoulder Press: 4 sets of 10 reps).</li>
<li>4.(Bicep Curls: 3 sets of 12 reps).</li>
<li>5.(Tricep Dips: 3 sets of 12 reps).</li>
</ol>
<span className='my-3 underline text-white font-extrabold' data-aos="fade-up">Day 2: Lower Body</span>
<ol className='flex flex-col gap-2 justify-center items-start mx-3' data-aos="fade-up">
<li>1.(Squats: 4 sets of 8 reps).</li>
<li>2.(Romanian Deadlifts: 4 sets of 8 reps).</li>
<li>3.(Leg Press: 4 sets of 10 reps).</li>
<li>4.(Calf Raises: 3 sets of 15 reps).</li>
</ol>

<span className='my-3 underline text-white font-extrabold'data-aos="fade-down" >Day 3: Rest or Active Recovery</span>

<span className='my-3 underline text-white font-extrabold' data-aos="fade-up">Day 4: Rest or Light Activity</span>

<ol className='flex flex-col gap-2 justify-center items-start mx-3' data-aos="fade-up">
<li>1.(Deadlifts: 4 sets of 6 reps).</li>
<li>2.(Pull-ups: 4 sets of 8 reps).</li>
<li>3.(Dumbbell Bench Press: 4 sets of 8 reps).</li>
<li>4.(Planks: 3 sets of 1 minute).</li>
</ol>

<span className='my-3 underline text-white font-extrabold'data-aos="fade-down" >Day 5: Rest or Active Recovery</span>

<span className='my-3 underline text-white font-extrabold' data-aos="fade-up">Day 6: Cardio/HIIT</span>

<ol className='flex flex-col gap-2 justify-center items-start' data-aos="fade-up">
  <li>1.(20 minutes of High-Intensity Interval Training (HIIT)).</li></ol>

<span className='my-3 underline text-white font-extrabold' data-aos="fade-down">Day 7: Rest</span>
</div>
   
    </div>
  )
}

export default Strengthind