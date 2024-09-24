import React from "react";
import styles from "./Portofolio.module.css";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import RevealComp from "./RevealComp";

const Portofolio = () => {
  return (
    <div id="porto" className={styles.main22}>
      <div className={styles.porto}>Projects</div>

      <RevealComp y={-20} duration="600ms" threshold={0.5}>
        <div className={styles.projectDivVideo}>
          <div className={styles.videoDesc}>
            Lord of the Rings inspired card game
          </div>
          <video className={styles.video1} autoPlay loop muted>
            <source src="./cardVideo.mp4" type="video/mp4" />
          </video>
          <Link href="#" className={styles.code}>
            View Code
          </Link>
        </div>
      </RevealComp>

      <RevealComp y={-20} duration="600ms" threshold={0.5}>
        <div className={styles.projectDiv2}>
          <div className={styles.siteName}>Flowershop website</div>
          <img className={styles.food1} alt="img" src="./dandelion2.png" />
          <Link href="#" className={styles.link}>
            {" "}
            <img className={styles.food2} alt="img" src="./dandelion1.png" />
          </Link>
          <Link href="#" className={styles.code}>
            View Code
          </Link>
        </div>
      </RevealComp>

      <RevealComp y={-20} duration="600ms" threshold={0.5}>
        <div className={styles.projectDiv1}>
          <div className={styles.siteName}>Recipe finder website</div>
          <img className={styles.food1} alt="img" src="./food1.png" />
          <Link href="#" className={styles.link}>
            {" "}
            <img className={styles.food2} alt="img" src="./food2.png" />
          </Link>
          <Link href="#" className={styles.code12}>
            View Code
          </Link>
        </div>
      </RevealComp>
    </div>
  );
};

export default Portofolio;
