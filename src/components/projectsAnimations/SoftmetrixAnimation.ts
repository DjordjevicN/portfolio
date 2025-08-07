import gsap from "gsap";

export const onHover = () => {
  const tl = gsap.timeline();
  tl.fromTo(
    ".euroAnimation",
    { y: 120, x: 300, opacity: 0 },
    {
      y: -10,
      x: -10,
      opacity: 1,
      duration: 0.5,
    }
  ).to(".euroAnimation", {
    opacity: 0,
    y: -40,
    x: -20,
    duration: 0.8,
  });
};
