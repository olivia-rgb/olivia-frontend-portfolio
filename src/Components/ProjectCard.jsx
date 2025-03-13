import React from "react";
import { HiMiniCodeBracket } from "react-icons/hi2";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="relative  bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg overflow-hidden">
      <div
        className="h-52 md:h-72  rounded-t-xl relative group bg-no-repeat bg-purple-500"
        style={{ background: `url(${imgUrl})`, backgroundSize: "contain", backgroundRepeat:"no-repeat", backgroundPosition:"center", transform: "scale(1.1)",
        transformOrigin: "center"}}>
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            to={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <HiMiniCodeBracket  className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            to={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            < AiOutlineEyeInvisible className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;