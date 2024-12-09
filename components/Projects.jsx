import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/SpaceTravel.png';
import Game1 from '../public/assets/projects/game1.png'
import Game2 from '../public/assets/projects/tank.png'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import riding_share_android from '../public/assets/projects/riding_share_android.png'
import hospital from '../public/assets/projects/hospital.png'
import parking from '../public/assets/projects/parking.png'
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
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Next JS'

          />
          <ProjectItem
            title='Dream Game'
            backgroundImg={Game1}
            projectUrl='/game1'
            tech='Swift'

          />
          <ProjectItem
            title='Tank Game'
            backgroundImg={Game2}
            projectUrl='/game2'
            tech='Unity'

          />
          
          <ProjectItem
            title='Riding Share'
            backgroundImg={riding_share_android}
            projectUrl='/riding_share_android'
            tech='Object-C'
          />
          <ProjectItem
            title='Hospital App'
            backgroundImg={hospital}
            projectUrl='/hospital'
            tech='React Native'
          />
          <ProjectItem
            title='Parking App'
            backgroundImg={parking}
            projectUrl='/parking'
            tech='Flutter'
          />
          <ProjectItem
            title='Space'
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
