// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { v4 as uuidv4 } from 'uuid';
import Calories from './Components/Calories';
import Fats from './Components/Fats';
import Bmiorg from './Components/Bmiorg';
import AOS from 'aos';
import 'aos/dist/aos.css';
// eslint-disable-next-line no-unused-vars
import { delay, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Strengthbeg from './Components/Strengthbeg';
import Strengthind from './Components/Strengthind';
import Strengthadv from './Components/Strengthadv';
import Musclebuild from './Components/Musclebuild';
import Generalhealth from './Components/Generalhealth';
import Loose from './Components/Loose';
import Footer from './Components/Footer';
import background1 from './Images/page10.webp';
import background2 from './Images/page11.webp';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [head2, setHeader] = useState("");
  const [editId, setEditId] = useState(null);
  const [finished, setFinished] = useState(true);
  const [showComponent, setShowComponent] = useState('calories');

  const toggleComponent = (Component) => {
    setShowComponent(Component);
  };

  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    let todostring = localStorage.getItem("todos");
    if (todostring) {
      let todoss = JSON.parse(todostring);
      setTodos(todoss);
    }
  }, []);

  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const handleFinished = () => {
    setFinished(!finished);
  };

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false, isChecked: false }]);
    setTodo("");
    setHeader('Your-Notes');
  };

  const handleEdit = (e, id) => {
    let et = todos.find(item => item.id === id);
    setTodo(et.todo);
    setEditId(id);
  };

  const handleSave = () => {
    setTodos(todos.map(item =>
      item.id === editId ? { ...item, todo } : item
    ));
    setTodo("");
    setEditId(null);
  };

  const handleDelete = (id) => {
    let newtodos = todos.filter(item => {
      return item.id !== id;
    });
    setTodos(newtodos);
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (id) => {
    setTodos(todos.map(item =>
      item.id === id ? { ...item, isChecked: !item.isChecked, isCompleted: !item.isCompleted } : item
    ));
    saveToLS();
  };

  const ScrollAnimationComponent = () => {
    const { ref: div1Ref, inView: div1InView } = useInView();
    const { ref: div2Ref, inView: div2InView } = useInView();
    const { ref: div3Ref, inView: div3InView } = useInView();
    const { ref: div4Ref, inView: div4InView } = useInView();
    const { ref: div5Ref, inView: div5InView } = useInView();
    const { ref: div6Ref, inView: div6InView } = useInView();
    const { ref: div7Ref, inView: div7InView } = useInView();
    const { ref: div8Ref, inView: div8InView } = useInView();
    const { ref: div9Ref, inView: div9InView } = useInView();
    const { ref: div10Ref, inView: div10InView } = useInView();
  
  
    const div1Variants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 1,delay:0.3 } },
    };
  
    const div2Variants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration:2, delay:0.8 } },
    };
    const div3Variants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
    };
    const div4Variants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0,delay:0} },
    };
    const div5Variants = {
      hidden: { opacity: 0, y: 0 },
      visible: { opacity: 1, y: 0, transition: { duration: 0,delay:0 } },
    };
    const div6Variants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 1,delay:0.3 } },
    };
  
    const div7Variants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration:1.2 } },
    };
    const div8Variants = {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0,delay:0, type: "spring",
        bounce: 0.2} },
    };
    const div9Variants = {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0,delay:0, type: "spring",
        bounce: 0.2} },
    };
    const div10Variants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0,delay:0, type: "spring",
        bounce: 0.6 } },
    };


    return (
      
      <motion.div className='main2 flex justify-center items-center' style={{backgroundImage:`url(${background2})`}}>
        <motion.h1
          className=' flex text-9xl font-headingg  justify-center items-center flex-1 pt-44 text-customyellow tracking-wider md:text-7xl md:pt-36 sm:text-5xl sm:pt-36 esm:text-4xl exsm:text-4xl xl:text-8xl'
          ref={div1Ref}
          initial="hidden"
          animate={div1InView ? 'visible' : 'hidden'}
          variants={div1Variants}
        >
          Workout Plans
        </motion.h1>
        <motion.h1
          className=' flex text-5xl font-body font-extrabold justify-center items-center flex-1 pt-16 text-customyellow tracking-wider md:pt-12 sm:pt-12 sm:pb-8 esm:text-2xl md:text-4xl sm:text-3xl exsm:text-3xl'
          ref={div3Ref}
          initial="hidden"
          animate={div3InView ? 'visible' : 'hidden'}
          variants={div3Variants}
        >
          Strength Training
        </motion.h1>
        <motion.div
          className="stratergy text-center flex-row mt-5 flex mx-2 flex-1 md:flex-col gap-8 sm:flex-col sm:gap-20 xl:gap-2"
          ref={div2Ref}
        initial="hidden"
        animate={div2InView ? 'visible' : 'hidden'}
        variants={div2Variants}
        >
          <motion.div className='flex justify-center items-center pt-20 backdrop-blur-3xl border-zinc-50 border-4 rounded-3xl  flex-1 w-96 xl:w-full esm:w-80' ref={div4Ref}
          initial="hidden"
          animate={div4InView?'visible':'hidden'}
          variants={div4Variants} whileHover={{ scale: 1.1 }} transition={{duration:0.3}}>
         <Strengthbeg/>
         </motion.div>
          <motion.div className='flex justify-center items-center pt-20 backdrop-blur-3xl border-zinc-50 border-4 rounded-3xl  mx-6 flex-1 esm:w-80 sm:w-full  w-96 xl:w-72' ref={div5Ref}
          initial="hidden"
          animate={div5InView ? 'visible' : 'hidden'}
          variants={div5Variants} whileHover={{ scale: 1.1 }}  transition={{duration:0.3}}>
         <Strengthind/>
         </motion.div>
         <motion.div className='flex justify-center items-center pt-20 backdrop-blur-3xl border-zinc-50 border-4 rounded-3xl  flex-1 w-96 xl:w-full esm:w-80' whileHover={{ scale: 1.1 }}  transition={{duration:0.3}}>
          <Strengthadv/>
         </motion.div>
         
        </motion.div>

        {/* Meal plans */}
        <motion.h1
          className=' flex text-8xl font-headingg  justify-center items-center flex-1 pt-52 text-customyellow tracking-wide md:text-6xl sm:text-4xl xl:text-7xl esm:text-3xl exsm:text-2xl'
          ref={div6Ref}
          initial="hidden"
          animate={div6InView ? 'visible' : 'hidden'}
          variants={div6Variants}
        >
          Nutritional Guidance
        </motion.h1>
        <motion.h1
          className=' flex text-5xl font-body font-extrabold justify-center items-center flex-1 pt-16 text-customyellow tracking-wider sm:text-3xl md:text-4xl exsm:text-xl'
          ref={div7Ref}
          initial="hidden"
          animate={div7InView ? 'visible' : 'hidden'}
          variants={div7Variants}
        >
          Meal Plans
        </motion.h1>
        <motion.div
          className="stratergy text-center flex-row mt-5 mx-2 flex flex-1 md:flex-col gap-8 pb-8 sm:flex-col sm:gap-10 xl:gap-2"
        >
          <motion.div className=' muscle flex justify-center items-center pt-10  backdrop-blur-3xl border-zinc-50 border-4 rounded-3xl  flex-1 ' ref=
          {div9Ref}
          initial="hidden"
          animate={div9InView?'visible':'hidden'}
          variants={div9Variants} whileHover={{ scale: 1.1 }}  transition={{duration:0.3}}>
         <Musclebuild/>
         </motion.div>
          <motion.div className=' loss flex justify-center items-center pt-20 backdrop-blur-3xl border-zinc-50 border-4 rounded-3xl   flex-1' ref={div10Ref}
          initial="hidden"
          animate={div10InView ? 'visible' : 'hidden'}
          variants={div10Variants} whileHover={{ scale: 1.1 }}  transition={{duration:0.3}}>
            <Loose/>
         </motion.div>
         <motion.div className=' health flex justify-center items-center pt-20 backdrop-blur-3xl border-zinc-50 border-4 rounded-3xl  flex-1'    ref={div8Ref}
        initial="hidden"
        animate={div8InView ? 'visible' : 'hidden'}
        variants={div8Variants} whileHover={{ scale: 1.1 }}  transition={{duration:0.3}}>
          <Generalhealth/>
         </motion.div>
         
        </motion.div>
      </motion.div>
    );
  };

  return (
    <>
      <div className="mainback" style={{backgroundImage:`url(${background1})`}}>
        <div className="bubble red"></div>
        <div className="bubble white"></div>
        <div className="bubble yellow"></div>
        <Navbar />
        <div className="container gap-2 flex flex-1 mx-8 md:flex-col sm:flex-col md:w-full">
          <div className="left flex flex-col gap-2 p-2 backdrop-blur-3xl border-zinc-50 border-4 rounded-3xl sm:w-96 esm:w-80 md:w-full " data-aos="fade-down-right">
            <motion.div className='togglebtn flex mx-6'>
              <motion.button onClick={() => toggleComponent('calories')} className='changebtn topbtn bg-white flex justify-center items-center relative p-2 text-sm font-bold font-body' whileHover={{ scale: 1.1 }}>Calories</motion.button>
              <motion.button onClick={() => toggleComponent('fats')} className='changebtn topbtn bg-white flex justify-center items-center relative p-2 text-sm font-bold font-body' whileHover={{ scale: 1.1 }}>Fats</motion.button>
              <motion.button onClick={() => toggleComponent('bmi')} className='changebtn topbtn bg-white flex justify-center items-center relative p-2 text-sm font-bold font-body' whileHover={{ scale: 1.1 }}>Bmi</motion.button>
            </motion.div>
            {showComponent === 'calories' && <Calories />}
            {showComponent === 'fats' && <Fats />}
            {showComponent === 'bmi' && <Bmiorg />}
          </div>
          <div className="right backdrop-blur-3xl border-zinc-50 border-4 rounded-3xl flex-col sm:w-96 esm:w-80 md:w-full" data-aos="fade-up-left">
            <div className='flex flex-row justify-center items-center relative sm:w-auto'>
            <input
              onChange={handleChange}
              value={todo}
              type='text'
              className="inputer rounded-3xl border-0 font-bold sm:mx-1 sm:w-80 md:w-full"
              placeholder=' Enter your Fitness note...'
            >
            </input>
            <button
              onClick={editId ? handleSave : handleAdd}
              disabled={!todo}
              className='btn btn1 underline font-extrabold sm:text-sm items-center justify-center focus:ring-2 focus:ring-inset absolute sm:right-14 xl:right-16 md:right-16 esm:right-8 exsm:right-9'
              id='inputbtn'
            >
              <span className='flex w-24 font-body'>More!</span><span className='flex w-24'>Add</span>
            </button>
            </div>
            {todos.length > 0 && (
              <h2 className='head2 flex text-xl font-body font-bold justify-center items-center text-yellow-300 relative bottom-8 underline'>
                {head2}
              </h2>
            )}
            <div className='flex justify-center items-center'>
            <button style={{ display: todos.length === 0 ? 'none' : 'block' }}
              onClick={handleFinished}
              className='finishbtn bg-white flex justify-center font-body items-center relative p-2 py-1 text-sm font-bold rounded-md md:max-w-24 sm:max-w-48'
            >
              Finished
            </button>
            </div>
            <div className="todos flex flex-col absolute w-full sm:w-full font-body md:w-full">
              {todos.length === 0 && <div><h3 className='flex font-headingg  justify-center items-center text-customyellow relative my-16'>Nothing to display...</h3></div>}
              {todos.map(item => {
                return (finished || !item.isCompleted) && <div key={item.id} className="todo flex flex-row justify-between gap-4 flex-1 my-4 w-full sm:w-full  esm:w-full exsm:w-full esm:gap-4 sm:gap-2  md:gap-3 font-body md:w-full">
                  <input
                    type="checkbox"
                    checked={item.isChecked}
                    onChange={() => handleCheckbox(item.id)}
                    className='flex ml-4 bg-transparent'
                    name={item.id}
                  />
                  <div className={item.isCompleted ? " text line-through text-m font-body relative font-bold text-customBlack" : "text  text-m font-body relative font-extrabold text-customyellow"}>
                    {item.todo}
                  </div>
                  <div className="buttons flex flex-row gap-0">
                    {item.isChecked ? (
                      <div className='flex justify-between items-center gap-2 flex-1 flex-col mx-4 '>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className='deletebtn bg-white flex justify-center items-center p-2 py-1 text-sm font-bold rounded-md md:w-auto font-body'
                      >
                        Delete
                      </button>
                      </div>
                    ) : (
                      <>
                      <div className='flex flex-1 flex-row justify-center items-center mx-4'>
                        <button
                          onClick={(e) => handleEdit(e, item.id)}
                          className='editbtn bg-white w-auto flex justify-center items-center relative p-2 py-1 text-sm font-bold rounded-md sm:w-auto font-body'
                        >
                          Edit
                        </button>
                        <button
                          onClick={editId ? handleSave : handleAdd}
                          disabled={!todo}
                          className='savebtn bg-white w-auto flex justify-center items-center relative p-2 py-1 text-sm font-bold rounded-md sm:w-auto font-body'
                        >
                          Save
                        </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              })}
            </div>
          </div>
        </div>
      </div>
      <ScrollAnimationComponent />
      <footer className='flex justify-center items-center bg-customgray h-96 md:h-auto sm:h-auto w-full'>
       <Footer/>
      </footer>
     
    </>
  );
}

export default App;
