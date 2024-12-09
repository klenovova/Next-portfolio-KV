import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import Spline from './Spline.jsx';
const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center z-10'>
    
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center z-10'>
      
        <motion.div 
         initial={{
           opacity: 0,   
          }}
          animate = {{
            x : 0,
            opacity : 1,
            scale : 1,
          }}
          transition ={{ duration : 0.5 }} className="absolute">
             
          {/* <BgCircles/> */}
          <p className='uppercase text-sm tracking-widest text-gray-600 animate-pulse'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 
          
          className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#5651e5]'> Klonov Volodymyr</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Senior Full Stack Mobile App Developer</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
           <b>
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
            </b> 
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4 z-10'>
            <Link
              href='https://github.com/klenovova'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </Link>
            <Link href='/#contact' legacyBehavior>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume' legacyBehavior>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </motion.div>
        <Spline/>
        
      </div>
    </div>
  );
};

export default Main;
