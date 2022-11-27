import { SkillCard } from "./Skillcard";
import styles from "./Styles/SkillsSection.module.css";
import { GrReactjs } from "react-icons/gr";
import {
  SiRedux,
  SiJavascript,
  SiMaterialui,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiMongodb,
  SiNpm,
  SiPostman,
  SiExpress,
} from "react-icons/si";
import { FaGitAlt, FaBusinessTime } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { GiTeamUpgrade } from "react-icons/gi";
import { MdConnectWithoutContact, MdReportProblem } from "react-icons/md";
import { BsQuestionCircleFill } from "react-icons/bs";
import {
  Container,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
} from "@chakra-ui/react";

export function SkillsSection() {
  return (
    <Container maxW={"80%"} id="skills" paddingTop={"180px"}>
      <Heading textAlign={"center"} size={"2xl"} color="rgb(14, 36, 49)">
        Skills
      </Heading>
      <br />
      <br />
      <Heading textAlign={"center"} size={"xl"} color="rgb(14, 36, 49)">
        Technical Skills
      </Heading>
      <br />
      <br />
      <Grid
        gridTemplateColumns={{
          lg: "repeat(6,1fr)",
          md: "repeat(4,1fr)",
          sm: "repeat(2,1fr)",
        }}
        gridTemplateRows={{ lg: "repeat(2,1fr)" }}
      >
        <GridItem>
          <SkillCard
            hover={"rgba(94, 211, 243, 0.4) 0px 5px 20px 2px"}
            skill="React"
            icon={
              <GrReactjs
                className={`${styles.skillIcon} ${styles.SkillCard} ${styles.reactIcon}`}
              />
            }
          />
        </GridItem>
        <GridItem>
          <SkillCard
            hover={"rgba(118, 76, 183, 0.4) 0px 10px 20px 4px"}
            skill="Redux"
            icon={
              <SiRedux className={`${styles.skillIcon} ${styles.reduxIcon}`} />
            }
          />
        </GridItem>
        <GridItem>
          <SkillCard
            hover={"rgba(247, 223, 30, 0.4) 0px 10px 20px 4px"}
            skill="JavaScript"
            icon={
              <SiJavascript
                className={`${styles.skillIcon} ${styles.jsIcon}`}
              />
            }
          />
        </GridItem>
        <GridItem>
          <SkillCard
            hover={"rgba(0, 129, 203, 0.4) 0px 10px 20px 4px"}
            skill="Material Ui"
            icon={
              <SiMaterialui
                className={`${styles.skillIcon} ${styles.muiIcon}`}
              />
            }
          />
        </GridItem>
        <GridItem>
          <SkillCard
            hover={"rgba(233, 98, 40, 0.4) 0px 10px 20px 4px"}
            skill="Html"
            icon={
              <SiHtml5 className={`${styles.skillIcon} ${styles.htmlIcon}`} />
            }
          />
        </GridItem>
        <GridItem>
          <SkillCard
            hover={"rgba(37, 75, 221, 0.4) 0px 10px 20px 4px"}
            skill="Css"
            icon={
              <SiCss3 className={`${styles.skillIcon} ${styles.cssIcon}`} />
            }
          />
        </GridItem>
        <GridItem>
          <SkillCard
            hover={"rgba(95, 151, 89, 0.4) 0px 10px 20px 4px"}
            skill="Node"
            icon={
              <SiNodedotjs
                className={`${styles.skillIcon} ${styles.nodeIcon}`}
              />
            }
          />
        </GridItem>
        <GridItem>
          <SkillCard
            hover={"rgba(82, 167, 75, 0.4) 0px 10px 20px 4px"}
            skill="MongoDb"
            icon={
              <SiMongodb
                className={`${styles.skillIcon} ${styles.mongoIcon}`}
              />
            }
          />
        </GridItem>
        <GridItem>
          <SkillCard
            hover={"rgba(82, 167, 75, 0.4) 0px 10px 20px 4px"}
            skill="Express"
            icon={
              <SiExpress
                className={`${styles.skillIcon} ${styles.mongoIcon}`}
              />
            }
          />
        </GridItem>
        <GridItem>
          <SkillCard
            hover={"rgba(232, 78, 49, 0.4) 0px 10px 20px 4px"}
            skill="Git"
            icon={
              <FaGitAlt className={`${styles.skillIcon} ${styles.gitIcon}`} />
            }
          />
        </GridItem>
        <GridItem>
          <SkillCard
            hover={"rgba(232, 78, 49, 0.4) 0px 10px 20px 4px"}
            skill="Npm"
            icon={<SiNpm className={`${styles.skillIcon} ${styles.gitIcon}`} />}
          />
        </GridItem>
        <GridItem>
          <SkillCard
            hover={"rgba(232, 78, 49, 0.4) 0px 10px 20px 4px"}
            skill="Postman"
            icon={
              <SiPostman className={`${styles.skillIcon} ${styles.gitIcon}`} />
            }
          />
        </GridItem>
      </Grid>
      <br />
      <br />
      <Heading textAlign={"center"} size={"xl"} color="rgb(14, 36, 49)">
        Soft Skills
      </Heading>
      <br />
      <br />
      <Grid
        gridTemplateColumns={{
          lg: "repeat(6,1fr)",
          md: "repeat(4,1fr)",
          sm: "repeat(2,1fr)",
        }}
      >
        <GridItem>
          <SkillCard
            hover={"rgba(82, 167, 75, 0.4) 0px 10px 20px 4px"}
            skill="Leadership"
            icon={
              <RiTeamFill
                className={`${styles.skillIcon} ${styles.leaderIcon}`}
              />
            }
          />
        </GridItem>
        <GridItem>
          <SkillCard
            hover={"rgba(232, 78, 49, 0.4) 0px 10px 20px 4px"}
            skill="Teamwork"
            icon={
              <GiTeamUpgrade
                className={`${styles.skillIcon} ${styles.teamIcon}`}
              />
            }
          />
        </GridItem>
        <GridItem>
          <SkillCard
            hover={"rgba(233, 98, 40, 0.4) 0px 10px 20px 4px"}
            skill="Connections"
            icon={
              <MdConnectWithoutContact
                className={`${styles.skillIcon} ${styles.htmlIcon}`}
              />
            }
          />
        </GridItem>
        <GridItem>
          <SkillCard
            hover={"rgba(255, 0, 0, 0.4) 0px 10px 20px 4px"}
            skill="Problem-solving"
            icon={
              <MdReportProblem
                className={`${styles.skillIcon} ${styles.problemIcon}`}
              />
            }
          />
        </GridItem>
        <GridItem>
          <SkillCard
            hover={"rgba(82, 167, 75, 0.4) 0px 10px 20px 4px"}
            skill="Time Manegement"
            icon={
              <FaBusinessTime
                className={`${styles.skillIcon} ${styles.leaderIcon}`}
              />
            }
          />
        </GridItem>
        <GridItem>
          <SkillCard
            hover={"rgba(233, 98, 40, 0.4) 0px 10px 20px 4px"}
            skill="Decision-making"
            icon={
              <BsQuestionCircleFill
                className={`${styles.skillIcon} ${styles.htmlIcon}`}
              />
            }
          />
        </GridItem>
      </Grid>
    </Container>
  );
}
