import streamflowDash from "../../assets/streamflowDash.png";
import edgeShort from "../../assets/edgeShort.svg";
import edgeBlack from "../../assets/edgeBlack.svg";

const Streamflow = () => {
  const projectImageStyle = "w-full max-w-[600px] md:max-w-[600px]";
  return (
    <div className="relative bg-[#FAF002] w-full min-h-screen flex justify-center items-center">
      <div className="flex flex-col-reverse xl:flex-row xl:items-center gap-4 xl:justify-between xl:w-full max-w-[1280px] px-4">
        <div className="mt-9 xl:mt-0">
          <h1 className="text-2xl font-semibold  glitchSlower">
            Token Management Infrastructure
          </h1>
          <p className="text-[#434343] mt-2">
            Simplifying token distribution with access to <br />
            customizable vesting schedules, airdrops, staking, and an SDK.{" "}
          </p>
        </div>
        <div>
          <div className="relative">
            <img
              src={edgeShort}
              className={`absolute -top-1 ${projectImageStyle}`}
              alt=""
            />
            <img
              className="w-full max-w-[600px] md:max-w-[600px]"
              src={streamflowDash}
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

export default Streamflow;
