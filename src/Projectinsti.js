import React, { useEffect } from "react";
import "./Projectinsti.css";
import instiapp from "./members_images/instiapp.jpg";
import Connect from "./Connect";
import NavBar from "./NavBar";

function Projectinsti() {
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
              <img className="project-image" src={instiapp} />
            </div>
            <div className="project-name">
              <p>InstiApp</p>
            </div>
          </div>
          <div className="project-link">
            <div className="website-link">
              <a href="https://www.insti.app/">Website</a>
            </div>
            <div className="github-link">
              <a href="https://github.com/DevCom-IITB/instiapp-flutter">Github</a>
            </div>
          </div>
        </div>
        <div className="project-box-body">
          <p>
            InstiApp is the official app of IIT Bombay. It provides students
            with a single point of access to all of the institute's resources,
            including:
          </p>
          <ul>
            <li>
              A main feed that shows updates from users and entities that the
              user follows, as well as popular and upcoming events from major
              institute bodies.
            </li>
            <li>
              A placement/training blog with the option to get notifications for
              all posts or posts with certain keywords.
            </li>
            <li>
              An institute map with navigation and all currently active events
              visible as clickable icons.
            </li>
            <li>
              A list of mess menus for all hostels, with the user's hostel's
              current-day menu occupying the top position.
            </li>
            <li>The calendars of major institute bodies.</li>
            <li>
              Emergency contacts, as well as the name, profile pic, and phone
              number of every PoR holder within the institute, are arranged and
              shown in a structured manner with a subsection for each council.
            </li>
          </ul>
          <p>
            InstiApp is a valuable resource for all IIT Bombay students. It is a
            great way to stay connected with the institute, stay informed about
            events, and find resources.
          </p>
        </div>
      </div>
      <Connect />
    </>
  );
}

export default Projectinsti;
