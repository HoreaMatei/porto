import React from "react";
import styles from "./Portofolio.module.css";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import RevealComp from "./RevealComp";

const Portofolio = () => {
  return (
    <div id="porto" className={styles.main22}>
      <div className={styles.porto}>Projects</div>
      <div className={styles.relative}>
        <div className={styles.projectDivVideo}>
          <div className={styles.videoDesc}>
            Lord of the Rings inspired card game
          </div>
          <Link
            target="_blank"
            href="https://lotr-frontend.onrender.com/"
            className={styles.link}
          >
            <video className={styles.video1} autoPlay loop muted>
              <source src="./cardVid3.mp4" type="video/mp4" />
            </video>
          </Link>
          <Link
            target="_blank"
            href="https://github.com/HoreaMatei/lord"
            className={styles.code}
          >
            View Code
          </Link>
        </div>
      </div>

      <div className={styles.relative}>
        <div className={styles.projectDiv2}>
          <div className={styles.siteName}>Ecommerce app</div>
          <Link
            target="_blank"
            href="https://eshop-2222.onrender.com/"
            className={styles.link}
          >
            {" "}
            <img className={styles.food1} alt="img" src="./eshop.png" />
          </Link>
          <img className={styles.food2} alt="img" src="./eshop2.png" />

          <Link
            target="_blank"
            href="https://github.com/HoreaMatei/eShop"
            className={styles.code12}
          >
            View Code
          </Link>
        </div>
      </div>

      <div className={styles.relative}>
        <div className={styles.projectDiv1}>
          <div className={styles.siteName}>Flowershop website</div>
          <Link
            target="_blank"
            href="https://dandelionn.vercel.app/"
            className={styles.link}
          >
            <img
              className={styles.dandelion1}
              alt="img"
              src="./dandelion2.png"
            />
          </Link>{" "}
          <img className={styles.dandelion2} alt="img" src="./dandelion1.png" />
          <Link
            target="_blank"
            href="https://github.com/HoreaMatei/dandelion"
            className={styles.code}
          >
            View Code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
