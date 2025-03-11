import { gsap } from "gsap";
export const onHover = () => {
  gsap
    .timeline()
    .fromTo(
      ".btc",
      { y: 0, opacity: 0 },
      { y: -120, x: 20, duration: 0.2, opacity: 1, ease: "power2.inOut" }
    )
    .to(".btc", { y: -160, x: 20, duration: 0.2, opacity: 0, delay: 0.5 });
  gsap
    .timeline()
    .fromTo(
      ".bsc",
      { y: 0, opacity: 0 },
      { y: -70, x: 140, duration: 0.3, opacity: 1, ease: "power2.inOut" }
    )
    .to(".bsc", { y: -150, x: 140, duration: 0.2, opacity: 0, delay: 0.5 });
  gsap
    .timeline()
    .fromTo(
      ".eth",
      { y: 0, opacity: 0 },
      { y: -130, x: 240, duration: 0.4, opacity: 1, ease: "power2.inOut" }
    )
    .to(".eth", { y: -140, x: 240, duration: 0.2, opacity: 0, delay: 0.5 });
  gsap
    .timeline()
    .fromTo(
      ".sol",
      { y: 0, opacity: 0 },
      { y: -170, x: 440, duration: 0.5, opacity: 1, ease: "power2.inOut" }
    )
    .to(".sol", { y: -150, x: 440, duration: 0.2, opacity: 0, delay: 0.5 });
  gsap
    .timeline()
    .fromTo(
      ".trx",
      { y: 0, opacity: 0 },
      { y: -120, x: 340, duration: 0.6, opacity: 1, ease: "power2.inOut" }
    )
    .to(".trx", { y: -160, x: 340, duration: 0.2, opacity: 0, delay: 0.5 });
  gsap
    .timeline()
    .fromTo(
      ".usdc",
      { y: 0, opacity: 0 },
      { y: -210, x: 140, duration: 0.7, opacity: 1, ease: "power2.inOut" }
    )
    .to(".usdc", { y: -150, x: 140, duration: 0.2, opacity: 0, delay: 0.5 });
  gsap
    .timeline()
    .fromTo(
      ".usdt",
      { y: 0, opacity: 0 },
      { y: -170, x: 300, duration: 0.8, opacity: 1, ease: "power2.inOut" }
    )
    .to(".usdt", { y: -160, x: 300, duration: 0.2, opacity: 0, delay: 0.5 });
};
export const hideAnimation = () => {
  gsap.to(".btc", { opacity: 0, y: 120, x: 300, duration: 0.2 });
  gsap.to(".bsc", { opacity: 0, y: 120, x: 300, duration: 0.2 });
  gsap.to(".eth", { opacity: 0, y: 120, x: 300, duration: 0.2 });
  gsap.to(".sol", { opacity: 0, y: 120, x: 300, duration: 0.2 });
  gsap.to(".trx", { opacity: 0, y: 120, x: 300, duration: 0.2 });
  gsap.to(".usdc", { opacity: 0, y: 120, x: 300, duration: 0.2 });
  gsap.to(".usdt", { opacity: 0, y: 120, x: 300, duration: 0.2 });
};
