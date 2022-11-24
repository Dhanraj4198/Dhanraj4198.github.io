import styles from "./Styles/SkillCard.module.css";
export function SkillCard({ skill, icon }) {
  return (
    <div className={styles.card}>
      {icon}
      <p>{skill}</p>
    </div>
  );
}
