import React from "react";
import { motion } from "framer-motion";
import "../../styles/pages/About.css";
import image from "../../assets/images/About_img.png";
import clrp from "../../assets/images/clrpick.png";
import ter from "../../assets/images/terminal.png";

function About() {
  return (
    <div className="container About-us-container">
      <div className="row About-us-content">
        <div className="text-column">
          <div className="row About-us">
            <motion.p 
              className="About-us-title"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              viewport={{ once: false, amount: 0.3, margin: "-100px" }}
              transition={{ 
                duration: 1.2,
                type: "spring",
                stiffness: 50,
                damping: 15
              }}
            >
              Who we are?
            </motion.p>
            <motion.p 
              className="About-us-desc"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              viewport={{ once: false, amount: 0.3, margin: "-100px" }}
              transition={{ 
                duration: 1,
                ease: [0.43, 0.13, 0.23, 0.96],
                delay: 0.2
              }}
            >
              We’re the crew at NST-SDC — developers and designers who don’t just ‘write code,’ we debug student life. From late-night bugs to real-life glitches, we use tech and creativity to make college smoother, smarter, and a lot less frustrating. Because honestly, Ctrl+Z doesn’t work on real problems… so we build the solutions instead.
            </motion.p>
            <motion.img
              className="clrpicker_image"
              src={clrp}
              alt="an image of a color picker"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              viewport={{ once: false, amount: 0.3, margin: "-100px" }}
              transition={{ 
                duration: 1.5,
                type: "spring",
                stiffness: 40,
                damping: 15
              }}
            />
          </div>
          <div className="row About-work">
            <motion.p 
              className="About-work-title"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              viewport={{ once: false, amount: 0.3, margin: "-100px" }}
              transition={{ 
                duration: 1.2,
                type: "spring",
                stiffness: 50,
                damping: 15
              }}
            >
              What we do?
            </motion.p>
            <motion.p 
              className="About-work-desc"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              viewport={{ once: false, amount: 0.3, margin: "-100px" }}
              transition={{ 
                duration: 1,
                ease: [0.43, 0.13, 0.23, 0.96],
                delay: 0.2
              }}
            >
              At NST-SDC, we take real student problems and turn them into tech solutions. From creating event platforms like Skillfest (our recruitment leaderboard) and Quick Snatch (the ultimate treasure hunt experience), to building websites, apps, and tools that simplify student life — we blend creativity with code to make college smarter, smoother, and more fun. We also host events, competitions, and workshops to keep the innovation alive and give students the space to build, learn, and showcase their skills.
            </motion.p>
            <motion.img
              className="terminal_image"
              src={ter}
              alt="an image of a terminal"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              viewport={{ once: false, amount: 0.3, margin: "-100px" }}
              transition={{ 
                duration: 1.5,
                type: "spring",
                stiffness: 40,
                damping: 15,
                delay: 0.2
              }}
            />
          </div>
        </div>
        <motion.div 
          className="image-column"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          viewport={{ once: false, amount: 0.3, margin: "-100px" }}
          transition={{ 
            duration: 1.5,
            type: "spring",
            stiffness: 35,
            damping: 15
          }}
        >
          <img
            className="devcom-img"
            src={image}
            alt="Image describing devcom"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default About;
