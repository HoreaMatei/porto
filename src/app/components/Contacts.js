import styles from "./contacts.module.css";
import React from "react";

const Contacts = () => {
  return (
    <div id="contact_div" className={styles.contact_div}>
      <div className={styles.contact_subdiv}>
        <p className={styles.mail}>mail: mhorea19@gmail.com</p>

        <div>
          <a>
            <img className={styles.contact_img} src="./linkedin.png" />
          </a>
          <a href="https://github.com/HoreaMatei">
            <img className={styles.contact_img} src="./github.png" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
