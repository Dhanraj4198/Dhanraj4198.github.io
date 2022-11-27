import { Box } from "@chakra-ui/react";
import styles from "./Styles/SkillCard.module.css";
export function SkillCard({ skill, icon, hover }) {
  return (
    <Box className={styles.card}>
      {icon}
      <Box _hover={{ color: "white" }}>{skill}</Box>
    </Box>
  );
}
