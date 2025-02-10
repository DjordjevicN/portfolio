import Navigation from "../components/Navigation";
const image =
  "https://plus.unsplash.com/premium_photo-1720188548716-9de4d2911fff?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const AboutPage = () => {
  return (
    <div className="bg-black text-white">
      <Navigation />
      <div>
        <h1>
          I’m passionate about crafting beautiful <br />
          products that are intuitive and performant.
        </h1>
        <h1 className="max-w-[800px] mx-auto">
          I’m Nikola Djordjević, a front-end developer with a strong focus on
          building scalable, high-performance applications. With 5+ years of
          experience in the industry, I’ve worked on a range of projects, from
          financial applications and crypto platforms to e-commerce and
          productivity tools. Before transitioning into tech, I spent 15 years
          as a professional chef, which instilled in me a deep appreciation for
          precision, creativity, and problem-solving—skills that now drive my
          approach to development.
        </h1>
        <div className="max-w-[1200px] mx-auto">
          <img className="w-full max-w-[300px]" src={image} alt="" />
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
