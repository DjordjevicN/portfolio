import { projects } from "../shared/projectData";
import ProjectItem from "./ProjectItem";

const ProjectDisplay = () => {
  return (
    <div>
      {projects.map((project, index) => {
        return (
          <ProjectItem
            key={project.title}
            project={project}
            dark={index % 2 === 0}
          />
        );
      })}
    </div>
  );
};

export default ProjectDisplay;
