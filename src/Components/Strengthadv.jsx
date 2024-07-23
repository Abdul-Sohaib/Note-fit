// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import AOS from 'aos';
import 'aos/dist/aos.css';
const Strengthadv = () => {
  return (
    <div className=''>
    <h3 className="text-4xl text-customBlack justify-center font-headingg font-bold underline tracking-wider" >Advanced </h3>
    <div className='flex text-customyellow flex-col flex-1 gap-2 text-pretty font-bold my-4'>
    <span className='my-3  text-customBlack  font-headingg' data-aos="fade-up"
     data-aos-anchor-placement="top-center">Day 1: Chest and Triceps</span>

<ol className='flex flex-col gap-4 justify-center items-start mx-3 font-body' data-aos="fade-up">
    <li>1.(Bench Press: 5 sets of 5 reps).</li>
    <li>2.(Incline Dumbbell Press: 4 sets of 8 reps).</li>
    <li>3.(Chest Flyes: 3 sets of 12 reps).</li>
    <li>4.(Tricep Pushdowns: 4 sets of 10 reps)</li>
    <li>5.(Skull Crushers: 4 sets of 12 reps).</li>
</ol>
<span className='my-3  text-customBlack  font-headingg' data-aos="fade-up">Day 2: Back and Biceps</span>
<ol className='flex flex-col gap-2 justify-center items-start mx-3 font-body' data-aos="fade-up">
<li>1.(Deadlifts: 5 sets of 5 reps).</li>
<li>2.(Pull-ups: 4 sets of 10 reps).</li>
<li>3.(Bent Over Rows: 4 sets of 8 reps).</li>
<li>4.(Bicep Curls: 4 sets of 10 reps).</li>
<li>5.(Hammer Curls: 4 sets of 12 reps).</li>
</ol>

<span className='my-3  text-customBlack  font-headingg'data-aos="fade-down" >Day 3: Legs</span>

<ol className='flex flex-col gap-2 justify-center items-start mx-3 font-body' data-aos="fade-up">
<li>1.(Squats: 5 sets of 5 reps).</li>
<li>2.(Leg Press: 4 sets of 8 reps).</li>
<li>3.(Romanian Deadlifts: 4 sets of 8 reps).</li>
<li>4.(Calf Raises: 4 sets of 15 reps).</li>
<li>5.(Leg Curls: 4 sets of 12 reps).</li>
</ol>
<span className='my-3  text-customBlack  font-headingg' data-aos="fade-up">Day 4: Shoulders and Abs</span>
<ol className='flex flex-col gap-2 justify-center items-start mx-3 font-body' data-aos="fade-up">
<li>1.(Shoulder Press: 5 sets of 5 reps).</li>
<li>2.(Lateral Raises: 4 sets of 12 reps).</li>
<li>3.(Front Raises: 4 sets of 12 reps).</li>
<li>4.(Planks: 4 sets of 1 minute).</li>
<li>5.(Russian Twists: 4 sets of 20 reps).</li>
</ol>

<span className='my-3  text-customBlack  font-headingg'data-aos="fade-down" >Day 5: Cardio/HIIT</span>

<ol className='flex flex-col gap-2 justify-center items-start font-body' data-aos="fade-up">
  <li>1.(30 minutes of High-Intensity Interval Training (HIIT)).</li></ol>
<span className='my-3  text-customBlack  font-headingg' data-aos="fade-up">Day 6: Full Body</span>
<ol className='flex flex-col gap-2 justify-center items-start font-body' data-aos="fade-up"><li>1.(Combination of compound exercises (e.g., Squats, Deadlifts, Bench Press) at lower intensity).</li></ol>

<span className='my-3  text-customBlack  font-headingg' data-aos="fade-down">Day 7: Rest</span>
</div>
   
    </div>
  )
}

export default Strengthadv