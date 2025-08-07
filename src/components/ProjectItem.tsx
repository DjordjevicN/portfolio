import edgeBlack from "../assets/edgeBlack.svg";
import edge from "../assets/edge.svg";
import { Project } from "../shared/projectData";
import AboutProject from "./AboutProject";
import Showcase from "./Showcase";

const ProjectItem = ({
  project,
  dark,
}: {
  project: Project;
  dark: boolean;
}) => {
  return (
    <div
      className={`relative  w-full min-h-screen flex justify-center items-center py-30 ${
        dark ? "bg-[#FAF002]" : "bg-black"
      }`}
    >
      <div className="flex flex-col-reverse xl:flex-row xl:items-center gap-4 xl:justify-between xl:w-full max-w-[1280px] px-4">
        <AboutProject project={project} dark={dark} />
        <Showcase project={project.companyName} />
      </div>
      <img
        className="absolute bottom-0 w-full"
        src={dark ? edgeBlack : edge}
        alt="edge decoration"
      />
    </div>
  );
};

export default ProjectItem;
