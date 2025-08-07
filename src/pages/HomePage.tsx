// Add avatar and change image on click
// Images needs to folow mouse movement
// maybe new mouse
// arrow down to scroll
// add name in nav bar

import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import ProjectDisplay from "../components/ProjectDisplay";

const HomePage = () => {
  return (
    <div>
      <Intro />
      <Hero />
      <ProjectDisplay />
      <Footer />
    </div>
  );
};

export default HomePage;
