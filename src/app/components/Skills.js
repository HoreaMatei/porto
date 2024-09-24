import React from "react";
import styles from "./skills.module.css";
import Link from "next/link";

const Skills = () => {
  return (
    <div className={styles.main}>
      <div className={styles.title}>Skills</div>
      <div className={styles.skillsDiv}>
        <div className={styles.skill}>CSS</div>
        <img className={styles.skillImg} src="./css3.png" />
      </div>
      <div className={styles.skillsDiv}>
        <div className={styles.skill}>React</div>
        <img className={styles.skillImg} src="./react2.png" />
      </div>
      <div className={styles.skillsDiv}>
        <div className={styles.skill}>Next.js</div>
        <img className={styles.skillImg} src="next1.svg" />
      </div>
      <div className={styles.skillsDiv}>
        <div className={styles.skill}></div>
        <img />
      </div>
    </div>
  );
};

export default Skills;
