import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: " Manage Landing Page",
    image: "/room-3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/olivia-rgb/The-Day-Beauty-Website-Template",
    previewUrl: "https://github.com/olivia-rgb/Manage-page-olivia-design",
  },
  {
    id: 2,
    title: "Shortlet Website",
    image: "/room-let.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/olivia-rgb/Shortlet-nerdy-challenge",
    previewUrl: "https://oliviashortletdesign.netlify.app/",
  },
  {
    id: 3,
    title: "Room Landing Page",
    image: "/main-room.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/olivia-rgb/Room-Olivia-challenge",
    previewUrl: "https://olivia-room-slide-design.netlify.app/",
  },
  {
    id: 4,
    title: "Software Website Template",
    image: "/software.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/olivia-rgb/Software-Website-Figma-design",
    previewUrl: "https://software-website-design.vercel.app/",
  },
  {
    id: 5,
    title: " The Day Beauty Website",
    image: "/day-beauty.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/olivia-rgb/The-Day-Beauty-Website-Template",
    previewUrl: "https://the-day-beauty.vercel.app/",
  },
  {
    id: 6,
    title: "Travel Website Template",
    image: "/travel.png",
    tag: ["All", "Web"],
    gitUrl: "/https://github.com/olivia-rgb/Travel-Website-Template",
    previewUrl: "https://travel-website-olivia-design.netlify.app/",
  },
  
  
  
];

const ProjectsSection = ({ content }) => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="w-[80%] max-w-[1400px] mx-auto">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-8">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;