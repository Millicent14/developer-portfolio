import style from "../styles/Footer.module.css";
import { BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";
import Dropdown from 'react-bootstrap/Dropdown';
import { useRouter } from "next/router";
import Link from "next/link";
const Footer = () => {

  const router = useRouter();

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const time = current.getHours() + ":" + current.getMinutes();
  return (
    <div className={style.footer}>
      <div>
        
        <Dropdown drop="up">
          <Dropdown.Toggle variant="dark" id="dropdown-basic">
          START
          </Dropdown.Toggle>

          <Dropdown.Menu variant="dark">

            <Link href="/about" passHref>
              <Dropdown.Item className={router.pathname == "/about"}>About Me</Dropdown.Item>
            </Link>
            
            <Link href="/projects" passHref>
              <Dropdown.Item className={router.pathname == "/projects"}>Projects</Dropdown.Item>
            </Link>
            

            <Dropdown.Divider/>
            <Link href="/resume.pdf" alt="alt text" target="_blank" rel="noopener noreferrer" passHref>
              <Dropdown.Item className={style.footer_resume}>Resume</Dropdown.Item>
            </Link>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className={style.contact}>
        <p>contact me:</p>
        <a
          href="https://www.linkedin.com/in/millicent-hernandez/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={style.contact_link}>
            <BsLinkedin/>
          </span>
        </a>
        <a
          href="https://www.facebook.com/sanghernandez"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={style.contact_link}>
            <BsFacebook/>
          </span>
        </a>
        <a
          href="https://www.instagram.com/millieficent14/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={style.contact_link}>
            <BsInstagram/>
          </span>
        </a>
      </div>

      <div>{time + " | " + date}</div>
    </div>
  );
};

export default Footer;
