import { useState } from "react";
import one from "../assets/logo/1.png";
import two from "../assets/logo/2.png";
import three from "../assets/logo/3.png";
import five from "../assets/logo/5.png";

const avatars = [
  {
    id: 0,
    image: three,
  },
  {
    id: 1,
    image: one,
  },
  {
    id: 2,
    image: two,
  },
  {
    id: 3,
    image: five,
  },
];

const Logo = () => {
  const [avatarCount, setAvatarCount] = useState(0);
  const currentAvatar = avatars.find((avatar) => avatar.id === avatarCount);

  const updateAvatar = () => {
    if (avatarCount === 3) {
      setAvatarCount(0);
    } else {
      setAvatarCount(avatarCount + 1);
    }
  };

  return (
    <div className="absolute top-10 left-10 z-50 cursor-pointer flex items-center gap-4">
      <div
        className="w-15 h-15 p-1 bg-[#FAF002] rounded"
        onClick={updateAvatar}
      >
        <img
          className="object-cover w-full h-full"
          src={currentAvatar?.image}
          alt=""
        />
      </div>
      <h1 className="font-bold text-center text-[#FAF002]">
        Nikola Djordjevic
      </h1>
    </div>
  );
};

export default Logo;
