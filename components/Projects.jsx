import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/SpaceTravel.png';
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem';
import {motion} from "framer-motion";

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
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
      className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
        <ProjectItem
            title='Netflix App'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS'

          />
          <ProjectItem
            title='Crypto App'
            backgroundImg={cryptoImg}
            projectUrl='/crypto'
            tech='React JS'

          />
          <ProjectItem
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Next JS'

          />
          <ProjectItem
            title='Space Travel'
            backgroundImg={propertyImg}
            projectUrl='/property'
            tech='React JS'
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
