import {
    animate,
    scroll,
  } from "https://cdn.jsdelivr.net/npm/framer-motion@11.11.11/dom/+esm";
  
  document.querySelectorAll("section").forEach((section) => {
    const header = section.querySelector("h2");
    scroll(animate(header, { y: [-400, 400] }, { ease: "linear" }), {
      target: header,
    });
  });
  
  document.querySelectorAll("section > div").forEach((item) => {
    scroll(animate(item, { opacity: [0,0.5,1,0] }, { ease: "linear" }), {
      target: item,
      offset: ["start end", "end end", "start start", "end start"],
    });
  });
  