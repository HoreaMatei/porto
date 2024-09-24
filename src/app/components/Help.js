import React from "react";
import styles from "./help.module.css";

const Help = () => {
  return (
    <div className={styles.main}>
      <div className={styles.help}>How I can help</div>
      <div className={styles.li}>
        <div className={styles.liHeader}>Components</div>
        <div className={styles.liElement}>
          Different components depending on the needs of the company
        </div>
      </div>
      <div className={styles.li}>
        <div className={styles.liHeader}>Business website</div>
        <div className={styles.liElement}>Full website for your company </div>
      </div>
      <div className={styles.li}>
        <div className={styles.liHeader}>Your request</div>
        <div className={styles.liElement}>
          Explore new ideas such as browser games
        </div>
      </div>
    </div>
  );
};

export default Help;
