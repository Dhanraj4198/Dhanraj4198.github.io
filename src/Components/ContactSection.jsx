import styles from "./Styles/ContactSection.module.css";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
export function ContactSection() {
  return (
    <div id="contact">
      <hr style={{ width: "95vw" }} />
      <p className={styles.text}>Liked my work? Want to get in touch?</p>
      <p className={styles.text}>You can reach out to me at:</p>
      <div className={styles.iconsCont}>
        <a href="mailto:jagtapdhanraj116@gmail.com">
          <AiOutlineMail className={styles.emailicon} />
        </a>
        <a
          href="https://www.linkedin.com/in/jagtapdhanraj/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className={styles.linkedInIcon} />
        </a>
        <a
          href="https://github.com/Dhanraj4198"
          rel="noreferrer"
          target="_blank"
        >
          <AiOutlineGithub className={styles.gitIcon} />
        </a>
      </div>
      <p className={styles.text}>Phone: 9404268198</p>{" "}
      <p className={styles.text}>Email: jagtapdhanraj116@gmail.com</p>
    </div>
  );
}
