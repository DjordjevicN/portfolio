import { useEffect, useState } from "react";

const introText = [
  { id: 0, text: "", glitch: false, duration: 100 },
  { id: 1, text: "HI!", glitch: false, duration: 2000 },
  { id: 2, text: "", glitch: false, duration: 300 },
  { id: 3, text: "I'm Nikola Djordjevic", glitch: true, duration: 2000 },
  { id: 4, text: "", glitch: false, duration: 300 },
  { id: 5, text: "I'm a Frontend Developer", glitch: false, duration: 2000 },
  { id: 6, text: "", glitch: false, duration: 300 },
  { id: 7, text: "Welcome to my portfolio!", glitch: true, duration: 2000 },
  { id: 8, text: "", glitch: false, duration: 300 },
];

const Intro = () => {
  const [index, setIndex] = useState(0);
  const [showIntro, setShowIntro] = useState(true);

  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableScroll = () => {
    document.body.style.overflow = "auto";
  };

  const scrollDown = () => {
    window.scroll({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (sessionStorage.getItem("visited") === "true") {
      setShowIntro(false);
      return;
    }
    scrollUp();
    let timerId = 0;
    if (index < introText.length - 1) {
      disableScroll();
      timerId = setTimeout(() => {
        setIndex(index + 1);
      }, introText[index].duration || 2000);
    } else {
      console.warn("end of intro");
      enableScroll();
      scrollDown();
      setTimeout(() => {
        sessionStorage.setItem("visited", "true");
        setShowIntro(false);
      }, 1000);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [index]);

  const textStyle =
    "text-xl md:text-2xl lg:text-4xl font-bold text-center text-white";
  return (
    showIntro && (
      <div className="min-h-screen flex justify-center items-center w-full bg-black">
        <h1
          className={`${textStyle} ${introText[index].glitch ? "glitch" : ""}`}
        >
          {introText[index].text}
        </h1>
      </div>
    )
  );
};

export default Intro;
