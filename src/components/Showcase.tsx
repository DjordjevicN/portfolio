import KortechsShow from "./KortechsShow";
import SoftmetrixShow from "./SoftmetrixShow";
import StreamflowShow from "./StreamflowShow";

const Showcase = ({ project }: { project: string }) => {
  if (project === "Streamflow") return <StreamflowShow />;
  if (project === "SoftMetrix") return <SoftmetrixShow />;
  if (project === "Kortechs") return <KortechsShow />;

  return null;
};

export default Showcase;
