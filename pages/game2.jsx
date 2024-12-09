import Image from 'next/image';
import React from 'react';
import Game2 from '../public/assets/projects/tank_banner.png'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import {motion} from "framer-motion";

const netflix = () => {
  return (
    <motion.div
    initial={{
      opacity: 0,   
     }}
     whileInView = {{
       x : 0,
       opacity : 1,
       scale : 1,
     }}
     transition ={{ duration : 0.5 }}
    className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={Game2}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>iOS App</h2>
          <h3>SwiftUI / SQLite/Integrating AI/Figma</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          🔥 War Machines: Ultimate Tank Battle Game 🔥
Get ready for the ultimate tank battle experience in War Machines, a FREE tank game that will keep you on the edge of your seat! Command your own army of powerful machines and bring destruction upon your enemies. Dive into intense, heart-pounding tank battles and prove your skills in this addictive war game!</p>
          <a
            href=''
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Uniry
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> SQLite
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Paypal
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </motion.div>
  );
};

export default netflix;