"use client";

import Title from "./Title";
import React, { useEffect, useState } from "react";
import styles from "./landing.module.css";

import Link from "next/link";
import Skills from "./Skills";

import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
const Landing = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div>
      <Title />

      <div
        className={`${styles.introduction} ${visible ? styles.show : ""}  ${
          roboto.className
        }`}
      >
        Hi, I am a{" "}
        <span className={styles.span}> full-stack web developer</span> with
        expertise in <span className={styles.span}>React.js</span>
        and <span className={styles.span}> Node.js</span>
      </div>
      <a
        href="./Resume.pdf"
        alt="alt text"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.contact}  ${visible ? styles.show : ""} `}
      >
        Resume/CV
      </a>
      <Skills />
      <div
        id="work"
        className={`${styles.landingContent} ${roboto.className}`}
      ></div>
    </div>
  );
};

export default Landing;
