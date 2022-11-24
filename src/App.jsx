import { Container } from "@chakra-ui/react";
import "./App.css";
import { AboutSection } from "./Components/AboutSection";
import { ContactSection } from "./Components/ContactSection";
import GithubStats from "./Components/GithubStats";
import { HeroSection } from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import { ProjectsSection } from "./Components/ProjectsSection";
import { SkillsSection } from "./Components/SkillsSection";

function App() {
  return (
    <Container maxW={"100%"} >
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <GithubStats/>
      {/* <ContactSection /> */}
    </Container>
  );
}

export default App;
