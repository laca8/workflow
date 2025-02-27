'use client'
import { FaServer } from "react-icons/fa";
import { BsCpuFill } from "react-icons/bs";
import { FaDatabase } from "react-icons/fa";
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { skills } from '../../data'
const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('Frontend');

    return (
        <div>
            <div className='mx-auto flex flex-col items-center justify-center my-10'>
                <div className="flex flex-col justify-center items-center mx-auto  rounded-lg my-2 w-[500px] bg-[rgba(1,1,1,0.5)] p-2">
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
                        Skills
                    </motion.h2>
                </div>
                <div className="flex gap-2 mb-6 max-sm:flex-col">
                    <button
                        className={`px-4 py-2 rounded-md ${activeCategory === 'Frontend'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-gray-700'}`}
                        onClick={() => setActiveCategory('Frontend')}
                    >
                        <BsCpuFill className="inline mr-2" size={16} />
                        Frontend
                    </button>
                    <button
                        className={`px-4 py-2 rounded-md ${activeCategory === 'Backend'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-gray-700'}`}
                        onClick={() => setActiveCategory('Backend')}
                    >
                        <FaServer className="inline mr-2" size={16} />
                        Backend
                    </button>
                    <button
                        className={`px-4 py-2 rounded-md ${activeCategory === 'Database'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-gray-700'}`}
                        onClick={() => setActiveCategory('Database')}
                    >
                        <FaDatabase className="inline mr-2" size={16} />
                        Database
                    </button>
                </div>

                <div className=" text-white bg-[rgba(1,1,1,0.5)]">
                    {skills.filter((x) => x.name == activeCategory).map((category, index) => (
                        <div key={index} className="grid grid-cols-3 gap-2 p-2 max-sm:grid-cols-2">
                            {category.skills.map((tech, techIndex) => (
                                <div key={techIndex} className={`flex flex-row flex-wrap items-center hover:scale-95  gap-2 p-2 rounded-lg   ${tech.color ? tech.color : 'bg-black'} `}>
                                    <div className={`${tech.color}`}>
                                        {typeof tech.icon === 'string' ? tech.icon : React.createElement(tech.icon)}
                                    </div>
                                    <span className="text-sm font-medium">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Skills