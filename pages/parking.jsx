import Image from 'next/image';
import React from 'react';
import App_parking from '../public/assets/projects/parking.png'
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
          src={App_parking}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Hospitalin</h2>
          <h3>React Native(JS) / Supabase/Expo/Figma</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          This app, powered by ParkMobile, gives you a smarter way to park in Boston. Easily pay for on-street and off-street parking right from your mobile device. You can use the ParkBoston app in over 500 other cities across the country, including New York, San Francisco, Washington, D.C., Atlanta, Chicago, Miami, New Orleans, Dallas, Philadelphia, St. Louis, Minneapolis, Pittsburgh, and more.
</p>
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
                <RiRadioButtonFill className='pr-1' /> Flutter
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Supabase
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> GPS API
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Restful API
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
