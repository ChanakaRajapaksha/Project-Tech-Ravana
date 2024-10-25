import { useState, useEffect } from 'react';
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";
import { works } from '../constants';

const ProjectCard = ({
    index,
    name,
    description,
    image,
}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1.1,
                    speed: 450,
                }}
                className='rounded-2xl p-5 bg-black-300 bg-opacity-50 sm:w-[420px] w-full'
            >
                <div className='relative w-full h-[230px]'>
                    <img
                        src={image}
                        alt='project_image'
                        className='w-full h-full object-cover rounded-2xl'
                    />
                </div>

                <div className='mt-5'>
                    <p className='text-white text-2xl font-semibold animatedText'>{name}</p>
                    <p className='text-white-800 font-light mt-2'>{description}</p>
                </div>
            </Tilt>
        </motion.div>
    );
};

const Works = () => {
    // const [isMobile, setIsMobile] = useState(false);

    // useEffect(() => {
    //     const handleResize = () => {
    //         setIsMobile(window.innerWidth < 768);
    //     };

    //     window.addEventListener('resize', handleResize);

    //     // Initial check
    //     handleResize();

    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);

    // const displayedProjects = isMobile ? projects.slice(0, 3) : projects;

    return (
        <section className='c-space my-20' id='works'>
            <p className='head-text'>Our Works</p>
            <div className='mt-12 flex flex-wrap gap-7'>
                {works.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Works;