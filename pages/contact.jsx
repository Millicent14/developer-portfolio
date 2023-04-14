import style from "../styles/Footer.module.css";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

const Contact = () => {

  return (
    <div className={style.contact}>
        <p className={style.cm}>Contact me:</p>
        <a
          href="https://www.linkedin.com/in/kasim393/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <BsLinkedin />
          </span>
        </a>
        <a
          href="https://github.com/kasim393"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <BsGithub />
          </span>
        </a>
        <a
          href="https://twitter.com/cypherwebs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <BsTwitter />
          </span>
        </a>
    </div>
  );
};

export default Contact;
