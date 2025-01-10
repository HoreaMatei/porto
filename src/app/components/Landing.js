import Title from "./Title";
import React from "react";
import styles from "./landing.module.css";
import { Roboto } from "next/font/google";
import Link from "next/link";
import Skills from "./Skills";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
const Landing = () => {
  return (
    <div>
      <Title />
      <Skills />
      <div id="work" className={`${styles.landingContent} ${roboto.className}`}>
        <div className={styles.p1}>
          I build clean and modern websites that help you with your business
        </div>

        <a
          href="./Resume.pdf"
          alt="alt text"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contact}
        >
          Resume/CV
        </a>
        <div className={styles.base}>
          <p className={styles.baseP}>Based in Romania, available worldwide</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
