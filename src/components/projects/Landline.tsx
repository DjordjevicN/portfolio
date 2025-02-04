import landline from "../../assets/landline.png";
import edgeShort from "../../assets/edgeShort.svg";
import edgeBlack from "../../assets/edgeBlack.svg";

const Landline = () => {
  const projectImageStyle = "w-full max-w-[600px] md:max-w-[600px]";

  return (
    <div className="relative bg-[#FAF002] w-full min-h-screen flex justify-center items-center">
      <div className="flex flex-col-reverse xl:flex-row xl:items-center gap-4 xl:justify-between xl:w-full max-w-[1280px] px-4">
        <div className="mt-9 xl:mt-0">
          <h1 className="text-2xl font-semibold  glitchSlower">Landline</h1>
          <p className="text-[#434343] mt-2">
            The best connection to your flight at an incredible price.
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
