import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
const image =
  "https://plus.unsplash.com/premium_photo-1720188548716-9de4d2911fff?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const AboutPage = () => {
  return (
    <div className="bg-black text-white pb-80 relative z-1">
      <div className="flex justify-center">
        <Navigation />
        <div className="absolute top-10 left-10 z-50 ">
          <Logo />
        </div>
      </div>
      <div>
        <div className="h-[90vh] flex items-center justify-center max-w-[900px] text-2xl mx-auto">
          <h1>
            I’m a self-taught developer with a passion for problem-solving. I
            often use code as a tool to tackle challenges and build solutions
            that make life easier. I focus on creating efficient, scalable, and
            user-friendly applications.
          </h1>
        </div>

        <div className="max-w-[1200px] mt-80 mx-auto flex justify-between items-center">
          <div className=" max-w-[500px]">
            <p className="mt-4">
              Currently, I work with TypeScript, React and its eco system,
              Tailwind, and other modern technologies to build powerful
              front-end applications.
            </p>
          </div>
          <img className="w-full max-w-[300px]" src={image} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
