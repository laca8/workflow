'use client'
import React from 'react'

import bg1 from '../../public/bg1.gif'
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";


import ava8 from '../../public/ava4.jpeg'

import { motion, AnimatePresence } from 'framer-motion';
import { about } from '../../data';
import Image from 'next/image';
const Hero = () => {
    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.08,
            },
        },
    };

    const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };
    return (
        <div className="relative mb-10  w-full flex items-center justify-center px-4   bg-no-repeat bg-cover bg-center-top  bg-fixed"
            style={{
                backgroundImage: `linear-gradient(rgba(19, 19, 19, 0.5), rgb(28, 26, 26)), url(${bg1.src || bg1})`,
                height: "100%",
                width: "100%",
            }}
        >
            <div className='flex flex-col items-center justify-center mx-auto w-full'>
                <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden">
                    <Image alt="avatar" src={ava8} className="rounded-full shadow-xl border-8 border-dotted border-[rgba(1,1,1,0.5)] w-full h-full " />
                    {/* Overlay أمام الصورة */}
                    <div className="absolute inset-0 bg-[rgba(1,1,1,0.5)] bg-opacity-50"></div>
                </div>

                {/* <h1 className='text-white text-2xl'>{about.job}</h1> */}


                < div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white " >
                    <div className='flex gap-5 items-center my-2' >
                        {/* LinkedIn */}
                        <a className='hover:scale-95 bg-blue-600 p-2 rounded-md' href="https://www.linkedin.com/in/ahmed-ragab-9723581b8" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin title="LinkedIn" />
                        </a>

                        {/* GitHub */}
                        <a className='hover:scale-95 bg-black p-2 rounded-md' href="https://github.com/laca8" target="_blank" rel="noopener noreferrer">
                            <FaGithub title="GitHub" />
                        </a>

                        {/* Email */}
                        <a className='hover:scale-95 bg-red-500 p-2 rounded-md' href="mailto:ahmedragab01140331005@gmail.com">
                            <FaEnvelope title="Email" />
                        </a>

                        {/* Phone */}
                        <a className='hover:scale-95 bg-green-500 p-2 rounded-md' href="tel:+201140331005">
                            <FaPhone title="Phone" />
                        </a>
                    </div>
                    <div className="flex justify-center items-center my-2 rounded-lg ">
                        <AnimatePresence>
                            <motion.h3
                                className="text-4xl font-mono text-white font-bold"
                                variants={sentence}
                                initial="hidden"
                                animate="visible"
                                key="entire-text"
                                onAnimationComplete={() => { }}
                            >
                                {about.name.split("").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        variants={letter}
                                        className="inline-block"
                                        transition={{
                                            repeat: Infinity,
                                            repeatType: "loop",
                                            repeatDelay: 5,
                                            duration: 0.8,
                                        }}
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                ))}
                            </motion.h3>
                        </AnimatePresence>
                    </div>

                    <motion.h1
                        className="w-[600px] max-sm:w-[300px] text-2xl font-semibold text-white rounded-lg  bg-[rgba(1,1,1,0.5)] p-2"
                        animate={{
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 3,
                            ease: "easeInOut",
                            repeat: Number.POSITIVE_INFINITY,
                        }}
                    >
                        {about.title}
                    </motion.h1>
                </div >
            </div>

        </div>
    )
}

export default Hero