'use client'
import React from 'react'
import { motion } from 'framer-motion';

import { about } from '../../data';

const About = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='mx-auto flex flex-col items-center justify-center'>
                <div className="flex flex-col justify-center items-center mx-auto  rounded-lg mb-2 bg-[rgba(1,1,1,0.5)] p-2">
                    <motion.h2
                        className="text-xl "
                        animate={{
                            color: [
                                "rgb(111,111,22,222)", // pink-500
                                "rgb(59, 130, 246)", // blue-500
                                "rgb(16, 185, 129)", // emerald-500
                                "rgb(249, 115, 22)", // orange-500
                                "rgb(26, 112, 1)", // back to pink-500
                            ],
                        }}
                        transition={{
                            duration: 8,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        About
                    </motion.h2>
                </div>
                <p className=' rounded-lg shadow-md text-xl p-4 text-white text-left bg-[rgba(1,1,1,0.5)] '>
                    {about.summary}
                </p>
            </div>
            <div className='grid grid-cols-2 gap-4 mt-10 max-md:grid-cols-1'>
                <div>
                    <div className="flex flex-col justify-center items-center mx-auto  rounded-lg my-2  bg-[rgba(1,1,1,0.5)] p-2">
                        <motion.h2
                            className="text-xl "
                            animate={{
                                color: [
                                    "rgb(111,111,22,222)", // pink-500
                                    "rgb(59, 130, 246)", // blue-500
                                    "rgb(16, 185, 129)", // emerald-500
                                    "rgb(249, 115, 22)", // orange-500
                                    "rgb(26, 112, 1)", // back to pink-500
                                ],
                            }}
                            transition={{
                                duration: 8,
                                ease: "linear",
                                repeat: Infinity,
                            }}
                        >
                            Education
                        </motion.h2>
                    </div>
                    <p className=' rounded-lg shadow-md text-xl p-4 text-white text-left bg-[rgba(1,1,1,0.5)] '>
                        {about.education}
                    </p>
                </div>
                <div>
                    <div className="flex flex-col justify-center items-center mx-auto  rounded-lg my-2  bg-[rgba(1,1,1,0.5)] p-2">
                        <motion.h2
                            className="text-xl "
                            animate={{
                                color: [
                                    "rgb(111,111,22,222)", // pink-500
                                    "rgb(59, 130, 246)", // blue-500
                                    "rgb(16, 185, 129)", // emerald-500
                                    "rgb(249, 115, 22)", // orange-500
                                    "rgb(26, 112, 1)", // back to pink-500
                                ],
                            }}
                            transition={{
                                duration: 8,
                                ease: "linear",
                                repeat: Infinity,
                            }}
                        >
                            Experience
                        </motion.h2>
                    </div>
                    <p className=' rounded-lg shadow-md text-xl p-4 text-white text-left bg-[rgba(1,1,1,0.5)] '>
                        {about.experiance}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About