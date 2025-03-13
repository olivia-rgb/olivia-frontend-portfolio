import React, { useTransition, useState } from 'react';
import TabButton from './TabButton'
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const About = ({ content }) => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 3 } });
  }, [controls]);

  
  const skillsContent = (
    <div>
      <ul className="list-none md:list-disc ">
        <li>JavaScript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>TypeScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Git</li>
      </ul>
    </div>
  );

  const certificationsContent = (
    <div>
      <ul className="list-none md:list-disc">
        <li>Diploma in Full Stack Development</li>
        <li> Diploma in Python</li>
        <li>Diploma in Data Science</li>
      </ul>
    </div>
  );
  const education = (
    <div>
      <ul className="list-none md:list-disc ">
        <li>Digital Dreams Academy ICT Enugu</li>
        <li>The Complete 2023 Web Development Bootcamp by Angela Yu</li>
        <li>Responsive Design  Kevin Powell</li>
        <li>React Front to Back & Modern JavaScript from Beginning to End Brad T.</li>
        <li>100 Days of Code: The Complete Python Pro Bootcamp Angela Yu</li>
      </ul>
    </div>
  );

  return (
    <motion.section
      className="w-[80%] max-w-[1400px] mx-auto py-6 md:py-10"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      <div id="about" className="flex flex-wrap  md:flex-row items-start justify-center md:justify-start gap-10 py-8 xl:gap-16 sm:py-16 text-white">
        <div className="">
          <img src="/olivia.jpeg" alt="" className="rounded-sm object-cover w-90 h-90 md:w-120 md:h-120" />
        </div>
        <div className='max-w-[600px] text-center md:text-left'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>A Passionate Frontend Developer 🎨, who finds joy in crafting visually stunning responsive website.I have experience working with  JavaScript, React, Redux, Next.js,TypeScript, HTML, CSS, and Git.  I am a dedicated team player synergizing our strengths to create amazing applications.Together, let us build something truly extraordinary! 🚀🎨</p>
          <div className='flex flex-row mt-3 justify-center md:justify-start list-none'>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8 ">
            {/* Conditionally render content based on the selected tab */}
            {tab === 'skills' && skillsContent}
            {tab === 'certifications' && certificationsContent}
            {tab === 'education' && education}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default About;
    