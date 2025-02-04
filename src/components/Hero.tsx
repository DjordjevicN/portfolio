import video from "../assets/3.mp4";
import edge from "../assets/edge.svg";

const Hero = () => {
  return (
    <div className="relative h-screen bg-[#00000082] w-full flex justify-center items-center">
      <video className="bgVid" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <h1 className="text-2xl md:text-4xl xl:text-8xl font-bold text-center text-[#FAF002] glitchSlower">
        I build Experiences, <br /> Solutions & Visions
      </h1>
      <img className="absolute bottom-0 w-full" src={edge} alt="" />
    </div>
  );
};

export default Hero;
