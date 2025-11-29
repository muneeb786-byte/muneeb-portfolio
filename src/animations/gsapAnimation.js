// src/animations/gsapAnimations.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const slideUp = (element) => {
  gsap.from(element, {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: element,
      scroller: "body",
      start: "top 50%",
    },
  });
};

