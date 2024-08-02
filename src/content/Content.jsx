import React, { useRef } from "react";
import "./Content.css";
import "../index.css";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { FaBehanceSquare } from "react-icons/fa";
import { FaSquareDribbble } from "react-icons/fa6";
import { motion, spring, useScroll, useTransform } from "framer-motion";
import MyReveal from "../MyReveal";
import { GoTools } from "react-icons/go";
import { FaFaceSmileBeam } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { BiSolidExit } from "react-icons/bi";
import { IoMail } from "react-icons/io5";
import profilepic from "../assets/profile.jpg";

function Content() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-10%", "-40%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["0", "-200%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  return (
    <div id="intro" ref={targetRef} className="Content">
      <div className="navbar">
        <div className="nav-icons">
          <a href="https://www.linkedin.com/in/amartanveer/" target="_blank">
            {" "}
            <IoLogoLinkedin />
          </a>
          <a href="https://github.com/AmarTanveer" target="_blank">
            {" "}
            <IoLogoGithub />
          </a>
          <a href="https://www.behance.net/amartanveer" target="_blank">
            {" "}
            <FaBehanceSquare />
          </a>

          <a href="https://dribbble.com/Artoholiccc" target="_blank">
            {" "}
            <FaSquareDribbble />
          </a>
        </div>
        <a
          href="https://drive.google.com/file/d/1ec1UasvM7FrrEIvVB4oeHlokeg56EUWO/view?usp=sharing"
          style={{ textDecoration: "none" }}
          target="_blank"
        >
          <h3>My resume</h3>
        </a>
      </div>

      <div className="intro section-wrapper">
        <motion.div style={{ rotate, y }}>
          <MyReveal>
            <h1>
              Hey, I'm Amar<span>.</span>
            </h1>
          </MyReveal>

          <div
            style={{
              display: "flex",
              textWrap: "nowrap",
              gap: "12px",
              margin: "10px 0px",
            }}
          >
            <MyReveal>
              <h2 style={{ fontSize: "32px", fontWeight: "700" }}>I'm a </h2>
            </MyReveal>
            <div style={{ position: "relative" }}>
              <h2
                style={{
                  position: "absolute",
                  backgroundColor: "var(--blue)",
                  overflow: "hidden",
                  height: "40px",
                  marginBottom: "20px",
                }}
              >
                <motion.h2
                  layout
                  // initial={{ y: -70 }}
                  animate={{ y: [-70, 0, 0, -70] }}
                  transition={{
                    duration: 5,
                    type: spring,
                    times: [0, 0.25, 1],
                    repeat: Infinity,
                  }}
                  style={{
                    fontSize: "32px",
                    fontWeight: "700",
                    translateY: 70,
                  }}
                >
                  iOS App Developer
                </motion.h2>
                <motion.h2
                  layout
                  // initial={{ y: -140 }}
                  animate={{ y: [-140, -220, -140] }}
                  transition={{
                    duration: 5,
                    type: spring,
                    times: [0, 0.25, 1],
                    repeat: Infinity,
                  }}
                  style={{
                    fontSize: "32px",
                    fontWeight: "700",
                    translateY: 170,
                  }}
                >
                  Full Stack Developer
                </motion.h2>
                <motion.h2
                  layout
                  // initial={{ y: -90 }}
                  animate={{ y: [-30, -170, -30] }}
                  transition={{
                    duration: 5,
                    type: spring,
                    times: [0, 0.65, 1],
                    repeat: Infinity,
                  }}
                  style={{
                    fontSize: "32px",
                    fontWeight: "700",
                    translateY: 70,
                  }}
                >
                  UI/UX Designer
                </motion.h2>
              </h2>
            </div>
          </div>

          <MyReveal>
            <h3>
              I've spent the last 4 years designing and building multiple cool
              things such as websites, iOS Applications, UI designs, graphics,
              AR filters, etc. Let's connect!
            </h3>
          </MyReveal>
          <MyReveal>
            <a
              href="mailto:amartanveer@gmail.com"
              target="_blank"
              style={{ textDecoration: "none", fontWeight: "300" }}
            >
              <motion.button whileHover={{ rotate: "-1deg", scale: 1.2 }}>
                Contact me
              </motion.button>
            </a>
          </MyReveal>
        </motion.div>
        <motion.div style={{ rotate, y }} className="profileimgcomtainer">
          <motion.img src={profilepic} alt="My Profile Pic" />
        </motion.div>
      </div>

      <div id="about" className="about section-wrapper">
        <div className="heading">
          <div className="marquee">
            <motion.div style={{ x }} className="track">
              <p>
                About<span>.</span>About<span>.</span>About<span>.</span>About
                <span>.</span>About<span>.</span>About<span>.</span>About
                <span>.</span>About<span>.</span>About<span>.</span>About
                <span>.</span>About<span>.</span>
              </p>
            </motion.div>
          </div>
        </div>
        <div className="aboutcontainer">
          <div className="aboutbody">
            <MyReveal>
              <h3>
                Hey! I'm Amar, if you haven't already gathered that by now. I'm
                a tech guy from Gurgaon, India. I specialize in frontend and
                backend, primarily Node, Express, MonogDb and React but love
                building with whatever tools are right for the job.
              </h3>
            </MyReveal>
            <MyReveal>
              <h3>
                I'm a keen learner and on a path of learning various concepts
                like iOS app development, AR filters for Instagram and Facebook,
                front end and back end web development.
              </h3>
            </MyReveal>
            <MyReveal>
              <h3>
                Outside of work, I love to design. I design digital assests like
                flat illustrations, posters, brouchers, User Interfaces, and so
                on.
              </h3>
            </MyReveal>
            <MyReveal>
              <h3>
                I'm passively looking for new positions where I can showcase my
                enthusiasm for code. If you think you've got an opening that
                might be right for me, let's connect 🔗
              </h3>
            </MyReveal>
            <div className="aboutlinks">
              <h3>
                <span>My links</span> <FaArrowRight />
              </h3>
              <div className="nav-icons">
                <a
                  href="https://www.linkedin.com/in/amartanveer/"
                  target="_blank"
                >
                  {" "}
                  <IoLogoLinkedin />
                </a>
                <a href="https://github.com/AmarTanveer" target="_blank">
                  {" "}
                  <IoLogoGithub />
                </a>
                <a href="https://www.behance.net/amartanveer" target="_blank">
                  {" "}
                  <FaBehanceSquare />
                </a>

                <a href="https://dribbble.com/Artoholiccc" target="_blank">
                  {" "}
                  <FaSquareDribbble />
                </a>
              </div>
            </div>
          </div>
          <div className="tools">
            <div>
              <h3>
                <GoTools className="toolsicon" />
                <span>Use at work</span>
              </h3>
              <div className="toolnames">
                <span className="chip">JavaScript</span>
                <span className="chip">HTML</span>
                <span className="chip">CSS</span>
                <span className="chip">React</span>
                <span className="chip">NodeJS</span>
                <span className="chip">Express</span>
                <span className="chip">MongoDB</span>
                <span className="chip">GitHub</span>
                <span className="chip">Xcode</span>
                <span className="chip">Swift</span>
              </div>
            </div>

            <div>
              <h3>
                <FaFaceSmileBeam className="toolsicon" />
                <span>Use for fun</span>
              </h3>
              <div className="toolnames">
                <span className="chip">Figma</span>
                <span className="chip">Tailwind</span>
                <span className="chip">Java</span>
                <span className="chip">Adobe Illustrator</span>
                <span className="chip">Spark AR</span>
                <span className="chip">Adobe Photoshop</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="projects" className="projects section-wrapper">
        <div className="heading">
          <div className="marquee">
            <motion.div style={{ x }} className="track">
              <p>
                Projects<span>.</span>Projects<span>.</span>Projects
                <span>.</span>Projects
                <span>.</span>Projects<span>.</span>Projects<span>.</span>
                Projects
                <span>.</span>Projects<span>.</span>Projects<span>.</span>
              </p>
            </motion.div>
          </div>
        </div>
        <div className="projectsgridcontainer">
          <div className="project">
            <div className="projectimage">
              <motion.img
                initial={{ y: 50 }}
                whileHover={{ scale: 1.1, y: 10 }}
                src="/src/assets/aura-ai.png"
              ></motion.img>
            </div>
            <div className="projectdata">
              <div className="projectheading">
                <MyReveal width={"100%"}>
                  <div className="projecttitle">
                    <div>
                      <h3>Aura AI</h3>
                    </div>
                    <div className="projectline" style={{ width: "50%" }}></div>
                    <div style={{ display: "flex", gap: "5px" }}>
                      <a
                        href="https://github.com/AmarTanveer/Aura-AI"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        <IoLogoGithub className="projecticon" />
                      </a>
                      <a
                        href="https://aura-ai.netlify.app/"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        {" "}
                        <BiSolidExit className="projecticon" />
                      </a>
                    </div>
                  </div>
                </MyReveal>
              </div>
              <div className="projectdescription">
                <MyReveal>
                  <h4>React - Javascript - HTML - CSS - GeminiAPI</h4>
                </MyReveal>
                <MyReveal>
                  <h3>
                    A chat-bot to help with all the queries you have. It is
                    powered with the Gemini API. It stores the history of your
                    recent prompts in the side-bar.&nbsp;&nbsp;
                    <a
                      href="https://aura-ai.netlify.app/"
                      style={{ color: "var(--yellow)" }}
                      target="_blank"
                    >
                      PREVIEW {">"}
                    </a>
                  </h3>
                </MyReveal>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="projectimage">
              <motion.img
                initial={{ y: 50 }}
                whileHover={{ scale: 1.1, y: 10 }}
                src="/src/assets/memory-game.png"
              ></motion.img>
            </div>
            <div className="projectdata">
              <div className="projectheading">
                <MyReveal width={"100%"}>
                  <div className="projecttitle">
                    <div>
                      <h3>Memory Game</h3>
                    </div>
                    <div className="projectline"></div>
                    <div style={{ display: "flex", gap: "5px" }}>
                      <a
                        href="https://github.com/AmarTanveer/memoryGame"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        <IoLogoGithub className="projecticon" />
                      </a>
                      <a
                        href="https://github.com/AmarTanveer/memoryGame"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        {" "}
                        <BiSolidExit className="projecticon" />
                      </a>
                    </div>
                  </div>
                </MyReveal>
              </div>
              <div className="projectdescription">
                <MyReveal>
                  <h4>Swift - UIKit - Xcode - Figma</h4>
                </MyReveal>
                <MyReveal>
                  <h3>
                    Developed an iOS Game that challenges player’s memory and
                    concentration skills as they have to remember which tiles
                    they have flipped.&nbsp;&nbsp;
                    <a
                      href="https://github.com/AmarTanveer/memoryGame"
                      style={{ color: "var(--yellow)" }}
                      target="_blank"
                    >
                      PREVIEW {">"}
                    </a>
                  </h3>
                </MyReveal>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="projectimage">
              <motion.img
                initial={{ y: 50 }}
                whileHover={{ scale: 1.1, y: 10 }}
                src="/src/assets/food-website.png"
              ></motion.img>
            </div>
            <div className="projectdata">
              <div className="projectheading">
                <MyReveal width={"100%"}>
                  <div className="projecttitle">
                    <div>
                      <h3>Food For You</h3>
                    </div>
                    <div className="projectline" style={{ width: "40%" }}></div>
                    <div style={{ display: "flex", gap: "5px" }}>
                      <a
                        href="https://github.com/AmarTanveer/Food-website-project"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        <IoLogoGithub className="projecticon" />
                      </a>
                      <a
                        href="https://myfoodfrontend.netlify.app/"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        {" "}
                        <BiSolidExit className="projecticon" />
                      </a>
                    </div>
                  </div>
                </MyReveal>
              </div>
              <div className="projectdescription">
                <MyReveal>
                  <h4>HTML - CSS - AOS.js - JavaScript - JQuery</h4>
                </MyReveal>
                <MyReveal>
                  <h3>
                    A food delivery website that provides an easy walkthrough of
                    the web-page for the users with different smooth animations.
                    Also added a mobile application prototype for the website.
                    &nbsp;&nbsp;
                    <a
                      href="https://myfoodfrontend.netlify.app/"
                      style={{ color: "var(--yellow)" }}
                      target="_blank"
                    >
                      PREVIEW {">"}
                    </a>
                  </h3>
                </MyReveal>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="projectimage">
              <motion.img
                initial={{ y: 50 }}
                whileHover={{ scale: 1.1, y: 10 }}
                src="/src/assets/todo-list.png"
                style={{ width: "85%" }}
              ></motion.img>
            </div>
            <div className="projectdata">
              <div className="projectheading">
                <MyReveal width={"100%"}>
                  <div className="projecttitle">
                    <div>
                      <h3>TODO List</h3>
                    </div>
                    <div className="projectline" style={{ width: "45%" }}></div>
                    <div style={{ display: "flex", gap: "5px" }}>
                      <a
                        href="https://github.com/AmarTanveer/TODO-List-Project-copy"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        <IoLogoGithub className="projecticon" />
                      </a>
                      <a
                        href="https://github.com/AmarTanveer/TODO-List-Project-copy"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        {" "}
                        <BiSolidExit className="projecticon" />
                      </a>
                    </div>
                  </div>
                </MyReveal>
              </div>
              <div className="projectdescription">
                <MyReveal>
                  <h4>Node.js - Express.js - MongoDB</h4>
                </MyReveal>
                <MyReveal>
                  <h3>
                    A web app that allows users to add tasks which gets shown in
                    the form of a list on the screen and users after completing
                    those tasks can delete them too. &nbsp;&nbsp;
                    <a
                      href="https://github.com/AmarTanveer/TODO-List-Project-copy"
                      style={{ color: "var(--yellow)" }}
                      target="_blank"
                    >
                      PREVIEW {">"}
                    </a>
                  </h3>
                </MyReveal>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="experience" className="experiences section-wrapper">
        <div className="heading">
          <div className="marquee">
            <motion.div style={{ x }} className="track">
              <p>
                Experience<span>.</span>Experience<span>.</span>Experience
                <span>.</span>Experience
                <span>.</span>Experience<span>.</span>Experience<span>.</span>
                Experience
                <span>.</span>Experience<span>.</span>Experience<span>.</span>
              </p>
            </motion.div>
          </div>
        </div>
        <div className="experiencecontainer">
          <div className="experience">
            <div className="company">
              <MyReveal>
                <h2>Adobe</h2>
              </MyReveal>
              <MyReveal>
                <h2>July, 2020 - Present</h2>
              </MyReveal>
            </div>

            <div className="jobrole">
              <MyReveal>
                <h3>Digital Assets Contributor</h3>
              </MyReveal>
              <MyReveal>
                <h3>Remote</h3>
              </MyReveal>
            </div>
            <MyReveal>
              <h3>
                Contributed my best digital assets work such as event templates,
                business brochures, social media templates, vector arts, etc,
                for the Adobe stock since I joined and still continue to do it.
                Earned over $675 from 705 downloads of graphics till date.{" "}
                <a
                  href="https://stock.adobe.com/in/contributor/209642630/Amar%20Tanveer"
                  target="_blank"
                  style={{
                    textDecoration: "none",
                    fontWeight: "300",
                  }}
                >
                  (AdobeStock portfolio link)
                </a>
              </h3>
            </MyReveal>
            <MyReveal>
              <div className="toolnames">
                <span className="chip">Adobe Illustrator</span>
                <span className="chip">Adobe Photoshop</span>
                <span className="chip">Typography</span>
                <span className="chip">Color Theory</span>
              </div>
            </MyReveal>
            <hr />
          </div>
          <div className="experience">
            <div className="company">
              <MyReveal>
                <h2>Ritch Media & Co.</h2>
              </MyReveal>
              <MyReveal>
                <h2>May 1, 2024 - May 15, 2024</h2>
              </MyReveal>
            </div>
            <div className="jobrole">
              <MyReveal>
                <h3>Mobile Application Designer | Intern</h3>
              </MyReveal>
              <MyReveal>
                <h3>Remote</h3>
              </MyReveal>
            </div>
            <MyReveal>
              {" "}
              <h3>
                I worked on an exciting project involving the design and
                prototyping of interfaces for a mobile application called
                'FuelMate'. FuelMate is designed to simplify fuel management for
                vehicle owners by offering features such as doorstep fuel
                delivery, cost analysis, and nearby gas station locators.{" "}
                <a
                  href="https://www.figma.com/proto/CaFvhijaLbmMbso7NvPZzR/Fuel-Mate-App?page-id=0%3A1&node-id=1-23&starting-point-node-id=1%3A23&scaling=scale-down&content-scaling=fixed&t=VBlNlKtuDxqENtyg-1"
                  target="_blank"
                  style={{
                    textDecoration: "none",
                    fontWeight: "300",
                  }}
                >
                  (App prototype link)
                </a>
              </h3>
            </MyReveal>
            <MyReveal>
              <div className="toolnames">
                <span className="chip">Figma</span>
                <span className="chip">UI/UX</span>
                <span className="chip">Mockups</span>
                <span className="chip">Prototyping</span>
                <span className="chip">Wireframes</span>
              </div>
            </MyReveal>
            <hr />
          </div>

          <div className="experience">
            <div className="company">
              <MyReveal>
                <h2>Sklztect</h2>
              </MyReveal>
              <MyReveal>
                <h2>July 6, 2023 - August 5, 2023</h2>
              </MyReveal>
            </div>
            <div className="jobrole">
              <MyReveal>
                {" "}
                <h3>Front-end web developer | Intern</h3>
              </MyReveal>
              <MyReveal>
                <h3>Gurugram, Haryana</h3>
              </MyReveal>
            </div>
            <MyReveal>
              <h3>
                Designed the ”Ritch Media” website, a website aimed at providing
                template designs similar to Canva and Adobe Express using Figma.
                Helped achieve a simple but attractive visual hierarchy which
                keeps young users engaged as well as maintains ease of use for
                old aged users. Added interactive prototyping, and engaging
                animations.{" "}
                <a
                  href="https://shorturl.at/VK8NK"
                  target="_blank"
                  style={{
                    textDecoration: "none",
                    fontWeight: "300",
                  }}
                >
                  (Website prototype link)
                </a>
              </h3>
            </MyReveal>
            <MyReveal>
              <div className="toolnames">
                <span className="chip">Figma</span>
                <span className="chip">UI/UX</span>
                <span className="chip">Prototyping</span>
                <span className="chip">Wireframes</span>
              </div>
            </MyReveal>
            <hr />
          </div>
        </div>
      </div>
      <div id="contactme" className="contactme section-wrapper">
        <div className="heading">
          <MyReveal>
            <p>
              Contact<span>.</span>
            </p>
          </MyReveal>
        </div>
        <MyReveal>
          <h3>
            Want to connect with me? send me an email and also feel free to add
            me on{" "}
            <a
              href="https://www.linkedin.com/in/amartanveer/"
              target="_blank"
              style={{
                textDecoration: "none",
                fontWeight: "300",
                color: "var(--yellow)",
              }}
            >
              Linkedin
            </a>
          </h3>
        </MyReveal>
        <MyReveal>
          {" "}
          <a
            href="mailto:amartanveer@gmail.com"
            style={{ textDecoration: "none", fontWeight: "300" }}
          >
            {" "}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 6,
              }}
            >
              <IoMail style={{fontSize: "28px"}} />
              <h2>amartanveer@gmail.com</h2>
            </div>
          </a>
        </MyReveal>
      </div>
    </div>
  );
}

export default Content;
