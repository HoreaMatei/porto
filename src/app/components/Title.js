import styles from "./title.module.css";

import React from "react";

const Title = () => {
  return (
    <div>
      {" "}
      <div className={styles.title}>
        Horea
        <img src="/sun2.png" className={styles.rotating} /> Matei
      </div>
    </div>
  );
};

export default Title;
