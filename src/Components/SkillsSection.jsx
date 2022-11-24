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
      <Grid gridTemplateColumns={{lg:'repeat(6,1fr)',md:"repeat(4,1fr)",sm:'repeat(2,1fr)'}}>
        <GridItem>
          <SkillCard
            skill="React"
            icon={
              <GrReactjs
                className={`${styles.skillIcon} ${styles.reactIcon}`}
              />
            }
          />
        </GridItem>
        <GridItem>
          <SkillCard
            skill="Redux"
            icon={
              <SiRedux className={`${styles.skillIcon} ${styles.reduxIcon}`} />
            }
          />
        </GridItem>
        <GridItem>
          <SkillCard
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
            skill="Html"
            icon={
              <SiHtml5 className={`${styles.skillIcon} ${styles.htmlIcon}`} />
            }
          />
        </GridItem>
        <GridItem>
          <SkillCard
            skill="Css"
            icon={
              <SiCss3 className={`${styles.skillIcon} ${styles.cssIcon}`} />
            }
          />
        </GridItem>
        <GridItem>
          <SkillCard
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
            skill="Git"
            icon={
              <FaGitAlt className={`${styles.skillIcon} ${styles.gitIcon}`} />
            }
          />
        </GridItem>
        <GridItem>
          <SkillCard
            skill="Npm"
            icon={<SiNpm className={`${styles.skillIcon} ${styles.gitIcon}`} />}
          />
        </GridItem>
        <GridItem>
          <SkillCard
            skill="Postman"
            icon={
              <SiPostman className={`${styles.skillIcon} ${styles.gitIcon}`} />
            }
          />
        </GridItem>
      </Grid >
      <Heading textAlign={"center"} size={"xl"} color="rgb(14, 36, 49)">
        Soft Skills
      </Heading>
      <Grid gridTemplateColumns={{lg:'repeat(6,1fr)',md:"repeat(4,1fr)",sm:'repeat(2,1fr)'}}>
        <GridItem>
          <SkillCard
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
