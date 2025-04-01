import React, { useEffect, useState } from "react";
import "./Skills.css";

const Skills = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${"skills-div "} ${visible ? "show" : ""} `}>
      <p className="skills-p">Skills:</p>
      <div className="skills-subdiv">
        <div className="skills-and-name">
          <img className="skill-img" src="css-icon.png" />
          <p>CSS</p>
        </div>

        <div className="skills-and-name">
          <img className="skill-img" src="ts.png" />
          <p>Typescript</p>
        </div>
        <div className="skills-and-name">
          <img className="skill-img" src="express-icon.png" />
          <p>ExpressJS</p>
        </div>

        <div className="skills-and-name">
          <img className="skill-img" src="html-icon.png" />
          <p>HTML</p>
        </div>

        <div className="skills-and-name">
          <img className="skill-img" src="tailwind.png" />
          <p>TailwindCSS</p>
        </div>
        <div className="skills-and-name">
          <img className="skill-img" src="js-icon.png" />
          <p>Javascript</p>
        </div>
        <div className="skills-and-name">
          {" "}
          <img className="skill-img" src="nextjs-icon.png" />
          <p>NextJS</p>
        </div>
        <div className="skills-and-name">
          <img className="skill-img" src="react-icon.png" />
          <p>ReactJS</p>
        </div>
        <div className="skills-and-name">
          <img className="skill-img" src="node.png" />
          <p>NodeJS</p>
        </div>
        <div className="skills-and-name">
          {" "}
          <img className="skill-img" src="redux-icon.png" />
          <p>Redux</p>
        </div>

        <div className="skills-and-name">
          {" "}
          <img className="skill-img" src="router.png" />
          <p>React-Router</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
