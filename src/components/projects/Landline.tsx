import landline from "../../assets/landline.png";
import edgeShort from "../../assets/edgeShort.svg";
import edgeBlack from "../../assets/edgeBlack.svg";
import jeep from "../../assets/cars/jeep.png";
import kombi from "../../assets/cars/kombi.png";
import autobus from "../../assets/cars/autobus.png";
import { onHover } from "./landlineAnimation";

const Landline = () => {
  const projectImageStyle = "w-full max-w-[600px] md:max-w-[600px]";

  return (
    <div className="relative bg-[#FAF002] w-full min-h-screen flex justify-center items-center">
      <div className="flex flex-col-reverse xl:flex-row xl:items-center gap-4 xl:justify-between xl:w-full max-w-[1280px] px-4">
        <div className="mt-9 xl:mt-0">
          <a
            target="_blank"
            href="https://landline.com/"
            className="text-2xl font-semibold glitchSlower"
          >
            Landline
          </a>
          <p className="text-[#434343] mt-2 max-w-[550px] textFont">
            Landline is a transportation platform that provides seamless airport
            transfers with its own fleet of vehicles. Users can easily book
            transport from their home to the airport, while the company
            efficiently manages drivers, tracks vehicle locations in real-time,
            and organizes shifts for optimal operations.
          </p>
        </div>
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
      </div>
      <img className="absolute bottom-0 w-full" src={edgeBlack} alt="" />
    </div>
  );
};

export default Landline;
