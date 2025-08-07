import video from "../assets/3.mp4";
import edge from "../assets/edge.svg";
import Logo from "./Logo";

const Hero = () => {
  return (
    <div className="relative h-screen w-full flex justify-center items-center">
      <div className="absolute top-10 left-10 z-50 ">
        <Logo />
      </div>
      <video className="bgVid" autoPlay loop muted playsInline>
        <source src={video} type="video/mp4" />
      </video>
      <div className="text-white z-10">
        <h1 className="text-xl md:text-4xl xl:text-5xl font-bold  text-[#FAF002] glitchSlower">
          Hey — I’m Nikola 👋
        </h1>
        <p className="mt-4 textFont font-bold">
          FRONT-END BY TRADE, FULL-STACK BY GRIND. <br />
          CRAFTING SCALABLE UIs WITH MODERN TECH.
        </p>
      </div>

      <img className="absolute bottom-0 w-full" src={edge} alt="" />
    </div>
  );
};

export default Hero;
