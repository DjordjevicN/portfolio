import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="min-h-[50vh] bg-black flex items-center justify-center">
      <div className="text-white max-w-[1200px] mx-auto w-full flex  md:justify-between p-4 ">
        <div className="align-top hidden md:block">
          <Logo />
        </div>
        <div className="">
          <div className="flex flex-col gap-3">
            <h1 className="mb-8">Links</h1>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
