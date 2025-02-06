import React from "react";

const Footer = () => {
  return (
    <div className="h-[50vh] bg-black flex items-center justify-center">
      <div className=" text-white max-w-[1200px] mx-auto w-full flex p-4 gap-16">
        <div className="flex flex-col gap-3">
          <h1 className="mb-8">Main</h1>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/nikola-djordjevic-503066193/"
          >
            LinkedIn
          </a>
          <a target="_blank" href="https://github.com/DjordjevicN">
            GitHub
          </a>
          <a target="_blank" href="mailto:nikola.dj.87@gmail.com">
            nikola.dj.87@gmail.com
          </a>
          <a target="_blank" href="https://read.cv/nikola_djordjevic">
            Resume
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="mb-8">Content</h1>
          <a href="#about">About</a>
          <a href="/">Home</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
