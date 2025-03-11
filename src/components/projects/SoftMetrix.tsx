import organo from "../../assets/organo.png";
import edge from "../../assets/edge.svg";
import euro from "../../assets/euro.svg";

import { onHover } from "./SoftmetrixAnimation";

const SoftMetrix = () => {
  return (
    <div className="relative bg-black w-full min-h-screen flex justify-center items-center">
      <div className="flex flex-col-reverse xl:flex-row xl:items-center gap-4 xl:justify-between xl:w-full max-w-[1280px] px-4">
        <div className="mt-9 xl:mt-0">
          <a
            href="https://www.organogold.com/"
            target="_blank"
            className="text-2xl font-semibold text-white glitchSlower"
          >
            E-commerce Organo
          </a>
          <p className="text-[#02A3DC] mt-2 textFont">
            Developed Organo, a coffee e-commerce platform <br />
            optimized for seamless shopping, performance, <br />
            and user experience.
          </p>
        </div>
        <div onClick={onHover} className="cursor-pointer">
          <div>
            <img className="euroAnimation opacity-0" src={euro} alt="" />
          </div>
          <div className="relative">
            <img
              className="w-full max-w-[600px] md:max-w-[600px]"
              src={organo}
            />
          </div>
        </div>
      </div>
      <img className="absolute bottom-0 w-full" src={edge} alt="" />
    </div>
  );
};

export default SoftMetrix;
