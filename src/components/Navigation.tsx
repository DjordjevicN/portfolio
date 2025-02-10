import { Link } from "react-router-dom";
import homeImage from "../assets/buttons/homeFill.svg";
import infoImage from "../assets/buttons/infoFill.svg";

const Navigation = () => {
  return (
    <div className="absolute flex justify-center z-50  top-15">
      <ul className="flex shadow-lg gap-4 ">
        <li>
          <Link className="text-[#00D1FF]" to="/">
            <img src={homeImage} alt="" />
          </Link>
        </li>
        <li>
          <Link className="text-[#00D1FF]" to="/about">
            <img src={infoImage} alt="" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
