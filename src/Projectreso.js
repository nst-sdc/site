import React, { useEffect } from "react";
import "./Projectinsti.css";
import Connect from "./Connect";
import NavBar from "./NavBar";
import resobin from "./members_images/resobin.jpg";

function Projectreso() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <div className="project-box">
        <div className="project-box-head">
          <div className="project-logo">
            <div className="project-image">
              <img className="project-image" src={resobin}></img>
            </div>
            <div className="project-name">
              <p>Resobin</p>
            </div>
          </div>
          <div className="project-link">
            <div className="website-link">
              <a href="https://resobin.gymkhana.iitb.ac.in/">Website</a>
            </div>
            <div className="github-link">
              <a href="https://github.com/DevCom-IITB/ResoBin">Github</a>
            </div>
          </div>
        </div>
        <div className="project-box-body">
          <p>
            ResoBin is a one-stop solution for all your academic needs at IIT
            Bombay. You can search and filter courses, view reviews and past
            resources, and create your own personalized timetable. ResoBin uses
            IITB SSO for the authentication of users and authorization of form
            responses access.
          </p>
          <p>
            Here are some of the features of Resobin:
            <ul>
              <li>
                Course search: You can search for courses by name, code, or
                instructor.
              </li>
              <li>
                Reviews and resources: You can read reviews of courses and find
                past resources, such as lecture notes, assignments, and exams.
              </li>
              <li>
                Personalized timetable: You can create your own personalized
                timetable based on your classes, exams, and other commitments.
              </li>
              <li>
                IITB SSO: ResoBin uses IITB SSO for the authentication of users
                and authorization of form responses access. This means that you
                only need to log in once to access ResoBin, and you will be able
                to see all of your courses and resources.
              </li>
            </ul>
          </p>
          <p>
            ResoBin is a great way to stay organized and on top of your studies.
            It is a valuable resource for all IIT Bombay students.
          </p>
        </div>
      </div>
      <Connect />
    </>
  );
}

export default Projectreso;
