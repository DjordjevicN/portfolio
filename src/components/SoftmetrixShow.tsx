import organo from "../assets/organo2.png";
import euro from "../assets/euro.svg";
import { onHover } from "./projectsAnimations/SoftmetrixAnimation";
import edgeShort from "../assets/edgeDarkShort.svg";

const SoftmetrixShow = () => {
  const projectImageStyle = "w-full max-w-[600px] md:max-w-[600px]";
  return (
    <div onClick={onHover} className="cursor-pointer">
      <div>
        <img className="euroAnimation opacity-0" src={euro} alt="" />
      </div>
      <div className="relative">
        <img
          src={edgeShort}
          className={`absolute -top-1 ${projectImageStyle}`}
          alt=""
        />
        <img
          className="w-full max-w-[600px] md:max-w-[600px]"
          src={organo}
          alt=""
        />
        <img
          src={edgeShort}
          alt=""
          className={`absolute -bottom-1 rotate-180 ${projectImageStyle}`}
        />
      </div>
    </div>
  );
};

export default SoftmetrixShow;
