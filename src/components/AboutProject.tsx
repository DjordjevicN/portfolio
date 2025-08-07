import { useState } from "react";
import Pill from "./Pill";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Project } from "../shared/projectData";

const AboutProject = ({
  project,
  dark,
}: {
  project: Project;
  dark: boolean;
}) => {
  const [descriptionToggle, setDescriptionToggle] = useState(true);
  return (
    <div className="mt-9 xl:mt-0 max-w-[550px]">
      <a
        href={project.url}
        target="_blank"
        className="text-2xl font-semibold glitchSlower"
      >
        <p className={`flex items-center ${dark ? "text-dark" : "text-white"}`}>
          {project.title}
          <span>
            <MdOutlineArrowOutward />
          </span>
        </p>
      </a>
      <div className="flex gap-3 mt-2 bg-black p-1 justify-between items-center my-2">
        <button
          className={`cursor-pointer  px-4 py-1  textFont  transition-colors duration-300 w-full text-xs ${
            descriptionToggle
              ? "bg-[#FAF002] text-black"
              : "bg-gray-900 text-white"
          }`}
          onClick={() => setDescriptionToggle(true)}
        >
          <p>{`About ${project.companyName}`}</p>
        </button>
        <button
          className={`cursor-pointer px-4 py-1 textFont transition-colors duration-300 w-full text-xs ${
            !descriptionToggle
              ? "bg-[#FAF002] text-black"
              : "bg-gray-900 text-white"
          }`}
          onClick={() => setDescriptionToggle(false)}
        >
          What I did
        </button>
      </div>
      {descriptionToggle ? (
        <>
          {project.description.map((paragraph: string) => {
            return (
              <p
                className={`${
                  dark ? "text-black" : "text-blue-100"
                } mt-2 max-w-[550px] textFont`}
              >
                {paragraph}
              </p>
            );
          })}
        </>
      ) : (
        <div className="textFont">
          {project.whatIDid.map((paragraph: string) => {
            return (
              <p
                className={`${
                  dark ? "text-black" : "text-blue-100"
                } mt-2 max-w-[550px] textFont`}
              >
                {paragraph}
              </p>
            );
          })}
        </div>
      )}
      <div className="flex gap-3 flex-wrap mt-3 max-w-[550px]">
        {project.techStack.map((tech: { id: number; title: string }) => {
          return <Pill key={tech.id} title={tech.title} invert={!dark} />;
        })}
      </div>
    </div>
  );
};

export default AboutProject;
