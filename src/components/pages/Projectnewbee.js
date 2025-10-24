import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "../../styles/pages/Projectinsti.css";
import Connect from "./Connect";
import NavBar from "../layout/NavBar";
import newbee from "../../assets/images/NewBee.png";

function Projectnewbee() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="project-box"
      >
        <motion.div className="project-box-head">
          <motion.div 
            className="project-logo"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="project-image"
              whileHover={{ scale: 1.1 }}
            >
              <img className="project-image" src={newbee} alt="NewBee" />
            </motion.div>
            <motion.div 
              className="project-name"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p>NewBee</p>
            </motion.div>
          </motion.div>
          <motion.div 
            className="project-link-newbee"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div 
              className="website-link-newbee"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="https://gymkhana.iitb.ac.in/newbee/">Website</a>
            </motion.div>
            {/* <div className="github-link">
              <a href="#">Github</a>
            </div> */}
          </motion.div>
        </motion.div>
        <motion.div
          className="project-box-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            NewBee is a website dedicated to helping freshies explore their way
            through their initial days at IIT Bombay. Students be feeling
            confused and intimidated about what all stuff they have to register
            for when the fees should be paid, and what they have to bring along
            with them while coming to campus. That's why in collaboration with
            Student Mentorship Program at IIT Bombay, we've created NewBee, a
            portal where you can ask questions about anything related to your
            initial days at IITB.
          </motion.p>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            There is also a comprehensive FAQ(InfoPosts) section that covers all
            of the most common questions that freshies have.
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3>Here are some of the benefits of using NewBee:</h3>
            <motion.ul
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                You can ask questions about anything related to your admission
                process and initial days at IITB.
              </motion.li>
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                You can get answers from current first-year students and SMPCs
                who have been through it all before.
              </motion.li>
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                You can access a comprehensive FAQ section that covers all of
                the most common questions that freshies have.
              </motion.li>
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                You can connect with other freshies who are going through the
                same thing as you.
              </motion.li>
            </motion.ul>
          </motion.div>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            So whether you're wondering about how to register for classes or
            what to do on your first day on campus, NewBee is the perfect
            resource for you.
          </motion.p>
        </motion.div>
      </motion.div>
      <Connect />
    </>
  );
}

export default Projectnewbee;
