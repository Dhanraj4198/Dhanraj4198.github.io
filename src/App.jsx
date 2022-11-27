import { Container } from "@chakra-ui/react";
import "./App.css";
import { AboutSection } from "./Components/AboutSection";
import Contact from "./Components/Contact";
import { ContactSection } from "./Components/ContactSection";
import GithubStats from "./Components/GithubStats";
import { HeroSection } from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import { ProjectsSection } from "./Components/ProjectsSection";
import { SkillsSection } from "./Components/SkillsSection";

function App() {
  return (
    <Container bgImage={'/Frame9.svg'} bgSize='100%' maxW={"100%"}>
      <Contact />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <GithubStats />
      <ContactSection />
    </Container>
  );
}

export default App;
