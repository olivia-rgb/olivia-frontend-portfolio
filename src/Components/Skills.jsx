import React from 'react';
import { FaHtml5, FaReact, FaJs, FaCss3, FaBootstrap, FaGit } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiTypescript } from 'react-icons/si';

const programmingSkills = [
  {
    id: 1,
    icon: <TbBrandNextjs />,
    title: 'Next Js',
    description: 'Experienced in Python programming language for data science and various applications.',
  },
  {
    id: 2,
    icon: <FaReact />,
    title: 'React',
    description: 'Proficient in building interactive and responsive user interfaces using React.',
  },
  {
    id: 3,
    icon: <FaJs />,
    title: 'JavaScript',
    description: 'Strong proficiency in JavaScript for developing dynamic and interactive web applications.',
  },
  {
    id: 4,
    icon: <SiTypescript />,
    title: 'Typescript',
    description: 'Strong proficiency in JavaScript for developing dynamic and interactive web applications.',
  },
  {
    id: 5,
    icon: <FaGit />,
    title: 'Git',
    description: 'Version control using Git for efficient collaboration and project management.',
  },
  {
    id: 6,
    icon: <SiTailwindcss />,
    title: 'Tailwind CSS',
    description: 'Proficient in using Tailwind CSS for building modern and responsive user interfaces.',
  },
  {
    id: 7,
    icon: <FaBootstrap />,
    title: 'Bootstrap',
    description: 'Proficient in using Bootstrap framework for building responsive and consistent designs.',
  },
  {
    id: 8,
    icon: <FaCss3 />,
    title: 'CSS',
    description: 'Proficient in CSS for styling and layout of web pages.',
  },
  {
    id: 9,
    icon: <FaHtml5 />,
    title: 'HTML',
    description: 'Proficient in CSS for styling and layout of web pages.',
  },
];

function Skills({ content }) {
  return (
    <div id="skills" className="w-[80%] max-w-[1400px] items-center mx-auto flex flex-col py-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-white mb-3">MY PROGRAMMING SKILLS</h1>
        <p className="max-w-[600px] text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
          I am proficient in a variety of frontend technologies and tools.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-3">
        {programmingSkills.map((item) => (
          <div key={item.id} className="text-center p-4 shadow-md">
            <div className="flex items-center justify-center text-purple-500 mx-auto text-3xl font-black">
              {item.icon}
            </div>
            <h3 className="font-extrabold text-white">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;