import video from "../assets/3.mp4";
import edge from "../assets/edge.svg";
import Logo from "./Logo";

const Hero = () => {
  return (
    <div className="relative h-screen w-full flex justify-center items-center">
      <div className="absolute top-10 left-10 z-50 ">
        <Logo />
      </div>
      <video className="bgVid" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="flex flex-col items-center justify-center text-white z-10">
        <h1 className="text-2xl md:text-4xl xl:text-6xl font-bold text-center text-[#FAF002] glitchSlower">
          I build Experiences, <br /> Solutions & Visions
        </h1>
        <p className="mt-4 max-w-[700px] textFont p-4">
          I’m a developer with a passion for problem-solving. I often use code
          as a tool to tackle challenges and build solutions that make life
          easier. I focus on creating efficient, scalable, and user-friendly
          applications.
        </p>
      </div>
      <img className="absolute bottom-0 w-full" src={edge} alt="" />
    </div>
  );
};

export default Hero;
