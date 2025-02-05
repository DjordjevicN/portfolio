import { onHover, hideAnimation } from "./StreamflowAnimation";
import streamflowDash from "../../assets/streamflowDash.png";
import edgeShort from "../../assets/edgeShort.svg";
import edgeBlack from "../../assets/edgeBlack.svg";
import bsc from "../../assets/tokens/bsc.svg";
import btc from "../../assets/tokens/btc.svg";
import eth from "../../assets/tokens/eth.svg";
import sol from "../../assets/tokens/sol.svg";
import trx from "../../assets/tokens/trx.svg";
import usdc from "../../assets/tokens/usdc.svg";
import usdt from "../../assets/tokens/usdt.svg";

const Streamflow = () => {
  const projectImageStyle = "w-full max-w-[600px] md:max-w-[600px]";
  const elementStyle = "w-8 h-8 md:w-12 md:h-12 absolute opacity-0";

  return (
    <div className="relative bg-[#FAF002] w-full min-h-screen flex justify-center items-center">
      <div className="flex flex-col-reverse xl:flex-row xl:items-center gap-4 xl:justify-between xl:w-full max-w-[1280px] px-4">
        <div className="mt-9 xl:mt-0">
          <h1 className="text-2xl font-semibold glitchSlower">
            Token Management Infrastructure
          </h1>
          <p className="text-[#434343] mt-2">
            Simplifying token distribution with access to <br />
            customizable vesting schedules, airdrops, staking, and an SDK.{" "}
          </p>
        </div>
        <div>
          <div className="relative hidden xl:block">
            <img className={`${elementStyle}  bsc`} src={bsc} alt="" />
            <img className={`${elementStyle} btc`} src={btc} alt="" />
            <img className={`${elementStyle}  eth`} src={eth} alt="" />
            <img className={`${elementStyle}  sol`} src={sol} alt="" />
            <img className={`${elementStyle}  trx`} src={trx} alt="" />
            <img className={`${elementStyle}  usdc`} src={usdc} alt="" />
            <img className={`${elementStyle}  usdt`} src={usdt} alt="" />
          </div>

          <div
            className="relative "
            onMouseEnter={onHover}
            onMouseLeave={hideAnimation}
          >
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
