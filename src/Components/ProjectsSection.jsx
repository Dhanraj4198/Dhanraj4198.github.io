import { ProjectCard } from "./ProjectCard";
import styles from "./Styles/ProjectsSection.module.css";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiRedux,
  SiChakraui,
  SiMongodb,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { Container, Grid, GridItem, Heading } from "@chakra-ui/react";
const projects = [
  {
    name: "Expedia.com Clone",
    img: "/Expedia.png",
    link: "https://allseasonhotels-dhanraj.vercel.app",
    git: "https://github.com/Dhanraj4198/average-collar-3069/tree/main/expedia-clone",
    about:
      "Expedia is e-commerce website used for Booking hotel rooms in India. This was a Team Project ",
    stacks: [
      <SiReact className={styles.stackIcon} />,
      <SiRedux className={styles.stackIcon} />,
      <SiChakraui className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
  {
    name: "Greenhouse.io clone",
    img: "/Greenhouse.png",
    link: "https://greenhouse-clone-dhanraj-jagtap.netlify.app/",
    git: "https://github.com/Dhanraj4198/cuddly-smoke-9747",
    about:
      " This is a Applicant tracking and recriting software. This was a team project where I with my teammates had created.",
    stacks: [
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },

  {
    name: "Dot & Key Clone",
    img: "/Dotandkey.png",
    link: "https://dot-and-key-dhanraj-jagtap.netlify.app/",
    git: "https://github.com/Dhanraj4198/animated-plants-4461/tree/main/Project/Homepage",
    about:
      "Dot & Key is a E-commerce website which sells beauty and cosmetic products",
    stacks: [
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
  {
    name: "Geekbuying Clone",
    img: "/Geekbuying.png",
    link: "https://gorgeous-daffodil-6e6d25.netlify.app/",
    git: "https://github.com/priyankadora20/punchy-substance-1301",
    about:
      "Geekbuying is an E-commerce website which sells all consumer electronic products",
    stacks: [
      <SiReact className={styles.stackIcon} />,
      <SiRedux className={styles.stackIcon} />,
      <SiChakraui className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
      <SiMongodb className={styles.stackIcon} />,
      <FaNodeJs className={styles.stackIcon} />,
    ],
  },
];
export function ProjectsSection() {
  return (
    <Container maxW={"80%"} paddingTop={"180px"} id="projects">
      <Heading
        textAlign={"center"}
        marginBottom="100px"
        size={"2xl"}
        color="rgb(14, 36, 49)"
      >
        Projects
      </Heading>
      <Grid gap={"60px"}>
        {projects.map((project) => (
          <GridItem>
            <ProjectCard {...project} />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
}
