/* eslint-disable react/jsx-no-comment-textnodes */
import style from "../styles/About.module.css";
import { BsMarkdownFill } from "react-icons/bs";
import { FcFolder, FcOpenedFolder } from "react-icons/fc";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
const About = () => {
  
  const [showExp, setShowExp] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showCert, setShowCert] = useState(false); 
  const [showAwards, setShowAwards] = useState(false);
  const [showInterests, setShowInterests] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  const router = useRouter();

  return (
    <div className={style.about}>
      <div className={style.skill_menu} onClick={(e) => setShowMenu(!showMenu)}>
        {" "}
        {showMenu ? <AiOutlineClose /> : <HiOutlineMenu />}
      </div>

      <div className={style.left}>
        <motion.div
          className={style.left_number}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              y: "100px",
              opacity: 0,
            },
            visible: {
              y: "-370px",
              opacity: 1,
              transition: {
                type: "spring",
                delay: 0.2,
                duration: 2,
              },
            },
          }}
        >
          <span className={style.text_fade_01}>50</span>
          <span className={style.text_fade_01}>51</span>
          <span className={style.text_fade_01}>52</span>
          <span className={style.text_fade_01}>53</span>
          <span className={style.text_fade_01}>54</span>
          <span className={style.text_fade_01}>55</span>
          <span className={style.text_fade_01}>56</span>
          <span className={style.text_fade_01}>57</span>
          <span className={style.text_fade_01}>58</span>
          <span className={style.text_fade_01}>59</span>
          <span className={style.text_fade_01}>60</span>
          <span className={style.text_fade_01}>61</span>
          <span className={style.text_fade_01}>62</span>
          <span className={style.text_fade_01}>63</span>
          <span className={style.text_fade_01}>64</span>
          <span className={style.text_fade_01}>65</span>
          <span className={style.text_fade_02}>66</span>
          <span className={style.text_fade_03}>67</span>
          <span>68</span>
          <span>69</span>
          <span>70</span>
          <span>71</span>
          <span>72</span>
          <span>73</span>
          <span>74</span>
          <span>75</span>
          <span>76</span>
          <span>77</span>
          <span>78</span>
          <span>79</span>
          <span>80</span>
          <span>81</span>
          <span>82</span>
          <span className={style.text_fade_03}>83</span>
          <span className={style.text_fade_02}>84</span>
          <span className={style.text_fade_01}>85</span>
        </motion.div>
        <div className={style.left_line}></div>
        <div className={style.left_line2}></div>
        <motion.div
          className={style.left_about}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              y: "300px",
              opacity: 0,
            },
            visible: {
              y: "0px",
              opacity: 1,
              transition: {
                type: "spring",
                delay: 0.2,
                duration: 3,
              },
            },
          }}
        >
          <span className={style.ml_2}> /* </span>
          <span> let me = &#123; </span>
          <span> description : &quot;Career-shifter with experience in designing and creating user-friendly and responsive website and E-Commerce API.&quot;, </span>
          <span> code : &#91;&quot;HTML&quot;, &quot;CSS&quot;, &quot;JavaScript&quot;&#93;, </span>
          <span> web : &quot;React&quot;, </span>
          <span> database : &quot;MongoDB&quot;, </span>
          <span> web host : &quot;Github&quot; </span>
          <span> &#125; </span>
          <span className={style.ml_2}>*/</span>
        </motion.div>
      </div>
      {showMenu && (
        <motion.div
          className={style.right}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              x: "100px",
              opacity: 0,
            },
            visible: {
              x: "0",
              opacity: 1,
              transition: {
                type: "spring",
                delay: 1,
              },
            },
          }}
        >
          <div className={style.right_container}>
            <div className={style.right_explorer}>
              <span><FcFolder size={28}/></span>
              <span style={{ marginLeft: "5px", fontSize: "1.75rem"}}>Explorer</span>
            </div>
            <div className={style.right_interest} style={{marginLeft: "30px"}}>
              <div className={style.skill}>
                <div
                  onClick={(e) => setShowExp(!showExp)}
                  className={style.dropdownSkill}
                >
                  <span>
                    {showExp ? <FcOpenedFolder/> : <FcFolder/>}
                  </span>
                  <span> Experience</span>
                </div>
                <AnimatePresence>
                  {showExp && (
                    <motion.div
                      className={style.showSkill}
                      initial="hidden"
                      animate="visible"
                      exit="go"
                      variants={{
                        hidden: {
                          y: "-20px",
                          opacity: 0,
                        },
                        visible: {
                          y: "0",
                          opacity: 1,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.5,
                          },
                        },
                        go: {
                          y: "-20px",
                          opacity: 0,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.3,
                          },
                        },
                      }}
                    >
                      <p>
                        <BsMarkdownFill /> zuitt coding bootcamp.md
                      </p>
                      <p>
                        <BsMarkdownFill /> gma network inc.md
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className={style.skill}>
                <div
                  onClick={(e) => setShowProjects(!showProjects)}
                  className={style.dropdownSkill}
                >
                  <span>
                    {showProjects ? <FcOpenedFolder/> : <FcFolder/>}
                  </span>
                  <span> Projects</span>
                </div>
                <AnimatePresence>
                  {showProjects && (
                    <motion.div
                      className={style.showSkill}
                      initial="hidden"
                      animate="visible"
                      exit="go"
                      variants={{
                        hidden: {
                          y: "-20px",
                          opacity: 0,
                        },
                        visible: {
                          y: "0",
                          opacity: 1,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.5,
                          },
                        },
                        go: {
                          y: "-20px",
                          opacity: 0,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.3,
                          },
                        },
                      }}
                    >
                      <p>
                        <BsMarkdownFill /> developer portfolio.md
                      </p>
                        
                      <p>
                        <BsMarkdownFill /> e-commerce api.md
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className={style.skill}>
                <div
                  onClick={(e) => setShowCert(!showCert)}
                  className={style.dropdownSkill}
                >
                  <span>
                    {showCert ? <FcOpenedFolder/> : <FcFolder/>}
                  </span>
                  <span> Certifications</span>
                </div>
                <AnimatePresence>
                  {showCert && (
                    <motion.div
                      className={style.showSkill}
                      initial="hidden"
                      animate="visible"
                      exit="go"
                      variants={{
                        hidden: {
                          y: "-20px",
                          opacity: 0,
                        },
                        visible: {
                          y: "0",
                          opacity: 1,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.5,
                          },
                        },
                        go: {
                          y: "-20px",
                          opacity: 0,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.3,
                          },
                        },
                      }}
                    >
                      <p>
                        <a
                          href="https://share.zertify.zuitt.co/certificate/e59d2c5b-d500-4188-ad92-2adbaddece01/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <BsMarkdownFill /> frontend course (zuitt).md
                        </a>
                      </p>
                      <p>
                        <a
                          href="https://share.zertify.zuitt.co/certificate/6f8dd552-e0cc-4cc2-a73d-42eb5033a660/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <BsMarkdownFill /> backend course (zuitt).md
                        </a>
                      </p>
                      <p>
                        <a
                          href="https://share.zertify.zuitt.co/certificate/595f136a-f219-45d6-bbef-0887f65a92fc/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <BsMarkdownFill /> full stack course (zuitt).md
                        </a>
                      </p>
                      <p>
                        <a
                          href="https://share.zertify.zuitt.co/certificate/64ad8b40-2d18-4858-b62c-4b20089d0712/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <BsMarkdownFill /> developer career program (zuitt).md
                        </a>
                      </p>
                      <p>
                        <a
                          href="https://share.zertify.zuitt.co/certificate/26911165-84d5-41e6-8eb6-16d906d78fe0/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <BsMarkdownFill /> js oop short course (zuitt).md
                        </a>
                      </p>
                      <p>
                        <BsMarkdownFill />
                        <Link href="/amazoncert.pdf" alt="alt text" target="_blank" rel="noopener noreferrer" passHref> intro to amazon s3 (zuitt).md
                        </Link>
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className={style.skill}>
                <div
                  onClick={(e) => setShowAwards(!showAwards)}
                  className={style.dropdownSkill}
                >
                  <span>
                    {showAwards ? <FcOpenedFolder/> : <FcFolder/>}
                  </span>
                  <span> Awards</span>
                </div>
                <AnimatePresence>
                  {showAwards && (
                    <motion.div
                      className={style.showSkill}
                      initial="hidden"
                      animate="visible"
                      exit="go"
                      variants={{
                        hidden: {
                          y: "-20px",
                          opacity: 0,
                        },
                        visible: {
                          y: "0",
                          opacity: 1,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.5,
                          },
                        },
                        go: {
                          y: "-20px",
                          opacity: 0,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.3,
                          },
                        },
                      }}
                    >
                      <p>
                        <BsMarkdownFill />
                        <Link href="./enthusiastic.png" alt="alt text" target="_blank" rel="noopener noreferrer" passHref> enthusiastic learner (zuitt).md
                        </Link>
                      </p>
                      <p>
                        <BsMarkdownFill />
                        <Link href="./awesome.png" alt="alt text" target="_blank" rel="noopener noreferrer" passHref> awesome attitude (zuitt).md
                        </Link>
                      </p>
                      <p>
                        <BsMarkdownFill />
                        <Link href="./kind.png" alt="alt text" target="_blank" rel="noopener noreferrer" passHref> kindness counts (zuitt).md
                        </Link>
                      </p>
                      
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className={style.skill}>
                <div
                  onClick={(e) => setShowInterests(!showInterests)}
                  className={style.dropdownSkill}
                >
                  <span>
                    {showInterests ? <FcOpenedFolder/> : <FcFolder/>}
                  </span>
                  <span> Interests</span>
                </div>
                <AnimatePresence>
                  {showInterests && (
                    <motion.div
                      className={style.showSkill}
                      initial="hidden"
                      animate="visible"
                      exit="go"
                      variants={{
                        hidden: {
                          y: "-20px",
                          opacity: 0,
                        },
                        visible: {
                          y: "0",
                          opacity: 1,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.5,
                          },
                        },
                        go: {
                          y: "-20px",
                          opacity: 0,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.3,
                          },
                        },
                      }}
                    >
                      <p>
                        <BsMarkdownFill /> watch tv series and movies.md
                      </p>
                      <p>
                        <BsMarkdownFill /> play video games.md
                      </p>
                      <p>
                        <BsMarkdownFill /> learn new things.md
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default About;
