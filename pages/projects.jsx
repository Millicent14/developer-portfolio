/* eslint-disable react/jsx-no-comment-textnodes */
import style from "../styles/Project.module.css";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import PortfolioImg from "../components/PortfolioImg";
import EcommerceImg from "../components/EcommerceImg";

const Project = () => {
  return (
    <div className={style.project}>
      <div className={style.project_container}>
        <p>PROJECTS</p>
        <div className={style.project_card_container}>       
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.2,
                },
              },
            }}
            className={style.project_card}
            whileHover={{
              transition: {
                duration: 0.2,
              },
              filter: [
                "hue-rotate(0)",
                "hue-rotate(360deg)",
                "hue-rotate(45deg)",
                "hue-rotate(0)",
              ],
            }}
          >
            <div className={style.project_card_top}>
              <div className={style.project_card_head}>
                <div>
                  <p>Developer Portfolio</p>
                </div>
                <div>
                  <span><a href=""> <FiGithub className={style.project_card_head_link}/> </a></span>                      
                </div>
              </div>
              <div className={style.project_card_body}>
                <p>designed using Next.js, React.js, Three.js, GraphQL and Framer Motion</p>
              </div>
            </div>
            {/*<div className={style.project_card_bottom}>
              <div>
                <a href="" rel="noreferrer" target="_blank">
                  Check in Github
                </a>
              </div>
            </div>*/}
          </motion.div>
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.2,
                },
              },
            }}
            className={style.project_card_image}>
            <a href="https://millicent14.github.io/webportfolio/"
            target="_blank" rel="noopener noreferrer"> <PortfolioImg className={style.project_card_img}/>
            </a>
          </motion.div>                              
        </div>

        <div className={style.project_card_container}>       
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.2,
                },
              },
            }}
            className={style.project_card}
            whileHover={{
              transition: {
                duration: 0.2,
              },
              filter: [
                "hue-rotate(0)",
                "hue-rotate(360deg)",
                "hue-rotate(45deg)",
                "hue-rotate(0)",
              ],
            }}
          >
            <div className={style.project_card_top}>
              <div className={style.project_card_head}>
                <div>
                  <p>E-Commerce API</p>
                </div>
                <div>
                  <span><a href=""> <FiGithub className={style.project_card_head_link}/> </a></span>                      
                </div>
              </div>
              <div className={style.project_card_body}>
                <p>capstone project for Zuitt Coding Bootcamp. used my back-end API, which was also one of our capstone projects. still needs improvement</p>
              </div>
            </div>
            {/*<div className={style.project_card_bottom}>
              <div>
                <a href="" rel="noreferrer" target="_blank">
                  Reacts.js   Node.js   MongoDB   CSS   Bootstrap   MDB React
                </a>
              </div>
            </div>*/}
          </motion.div>
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.2,
                },
              },
            }}
            className={style.project_card_image}>
            <a href="https://millicent14.github.io/webportfolio/"
            target="_blank" rel="noopener noreferrer"> <EcommerceImg className={style.project_card_img}/>
            </a>
          </motion.div>                              
        </div>
      </div>
    </div>
  );
};

export default Project;