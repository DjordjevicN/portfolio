import gsap from "gsap";

export const onHover = () => {
  const tl = gsap.timeline();
  tl.fromTo(
    ".jeep",
    { x: 0, opacity: 1 },
    {
      x: 400,
      opacity: 1,
      duration: 2,
    }
  ).to(".jeep", {
    opacity: 0,
    duration: 0.8,
  });
  const tlKombi = gsap.timeline();
  tlKombi
    .fromTo(
      ".kombi",
      { x: 0 },
      {
        opacity: 1,
        delay: 2,
      }
    )
    .to(".kombi", {
      x: 400,
      duration: 2,
    })
    .to(".kombi", {
      opacity: 0,
      duration: 0.3,
    });
  const tlAutobus = gsap.timeline();
  tlAutobus
    .fromTo(
      ".autobus",
      { x: 0 },
      {
        opacity: 1,
        delay: 4,
      }
    )
    .to(".autobus", {
      duration: 3,
      x: 250,
    })
    .to(".autobus", {
      opacity: 0,
      duration: 0.8,
    });
};
