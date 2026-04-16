import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link?: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  return (
    <div className="relative group">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-3 right-3 z-10 bg-white/80 rounded-full p-1 shadow-md opacity-80 hover:opacity-100 focus:opacity-100 transition-opacity"
        title="View Website"
      >
        <img src="/view.svg" alt="View" className="w-6 h-6 text-cyan-600" />
      </a>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus:outline-none"
        tabIndex={-1}
      >
        <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] transition-transform transform hover:scale-105 cursor-pointer group-hover:ring-2 group-hover:ring-cyan-400 group-focus:ring-2 group-focus:ring-cyan-400 bg-[#1a1333] hover:bg-[#24194a]">
          <Image
            src={src}
            alt={title}
            width={1000}
            height={1000}
            className="w-full object-contain"
          />

          <div className="relative p-4">
            <h1 className="text-2xl font-semibold text-white group-hover:underline group-focus:underline">{title}</h1>
            <p className="mt-2 text-gray-300">{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
