'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion';
// import { skills } from '../../data'
import { projects } from '../../data'
import { BsCpuFill } from 'react-icons/bs';
import { FaDatabase, FaExternalLinkAlt, FaServer } from 'react-icons/fa';

const Work = () => {

    const [activeCategory, setActiveCategory] = useState('Backend');


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
                        Work
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
                        className={`px-4 py-2 rounded-md ${activeCategory === 'Fullstack'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-gray-700'}`}
                        onClick={() => setActiveCategory('Fullstack')}
                    >
                        <FaDatabase className="inline mr-2" size={16} />
                        Fullstack
                    </button>
                </div>
                {/* قائمة المشاريع */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects
                        .filter(
                            (project) =>
                                project.category == activeCategory
                        )
                        .map((project, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-800 p-6 rounded-lg shadow-lg relative"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <h3 className="text-xl font-bold text-white">{project.name}</h3>
                                <p className="text-gray-400 text-sm mt-2">{project["Project Overview"]}</p>

                                {/* قائمة المهام */}
                                <ul className="mt-4 text-sm">
                                    <li className="text-green-400">
                                        {project["Key Responsibilities"]}

                                    </li>

                                </ul>

                                {/* التقنيات المستخدمة */}
                                <div className="mt-4 flex flex-wrap gap-2">
                                    <span

                                        className="bg-blue-500 text-xs text-white px-2 py-1 rounded-md"
                                    >
                                        {project["Tech Stack"]}


                                    </span>

                                </div>

                                {/* رابط المشروع */}
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute top-4 right-4 text-blue-400 hover:text-blue-300 transition"
                                >
                                    <FaExternalLinkAlt size={20} />
                                </a>
                            </motion.div>
                        ))}
                </div>
            </div>
        </div >
    )
}

export default Work