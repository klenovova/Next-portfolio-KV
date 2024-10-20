import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpeg';
import {motion} from "framer-motion"
const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
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
      className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          I am a Senior Full Stack Developer with a solid track record in building both web and mobile applications.
          I work extensively with JavaScript and TypeScript, specializing in frameworks like React, React Native,
          and Flutter to create responsive user interfaces. On the back end, I have expertise in Node.js,
          Python (Django/Flask), and Ruby on Rails, allowing me to develop strong server-side solutions.
          
          I’m well-versed in managing databases, whether they’re SQL or NoSQL, and I’m comfortable
          with API integrations using RESTful services and GraphQL. My experience with cloud platforms
          like AWS and Azure, along with my understanding of DevOps practices, ensures I can handle
          deployment and scaling effectively.
          </p>
          <p className='py-2 text-gray-600'>
          I thrive in collaborative environments and am familiar with agile methodologies, using project
          management tools like Jira and Trello to keep teams on track. I’m passionate about tackling
          challenges and using technology to achieve great results, no matter if I am working with
          a startup or a larger organization.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
