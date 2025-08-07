import landline from "../assets/landline.png";
import edgeShort from "../assets/edgeShort.svg";
import jeep from "../assets/cars/jeep.png";
import kombi from "../assets/cars/kombi.png";
import autobus from "../assets/cars/autobus.png";
import { onHover } from "./projectsAnimations/landlineAnimation";

const KortechsShow = () => {
  const projectImageStyle = "w-full max-w-[600px] md:max-w-[600px]";
  return (
    <div>
      <div className="relative cursor-pointer" onClick={onHover}>
        <img
          src={autobus}
          alt=""
          className="absolute -top-26 -left-10 autobus hidden xl:block opacity-0"
        />
        <img
          src={kombi}
          className="absolute -top-16 -left-15 kombi hidden xl:block opacity-0"
          alt=""
        />
        <img
          src={jeep}
          alt=""
          className="absolute -top-18 jeep hidden xl:block opacity-0"
        />

        <img
          src={edgeShort}
          className={`absolute -top-1 ${projectImageStyle}`}
          alt=""
        />
        <img
          className="w-full max-w-[600px] md:max-w-[600px]"
          src={landline}
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

export default KortechsShow;
