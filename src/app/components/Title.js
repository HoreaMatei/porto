import styles from "./title.module.css";
import React, { useEffect, useState } from "react";

const Title = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);
  return (
    <div>
      {" "}
      <div className={`${styles.title} ${visible ? styles.show : ""}`}>
        Horea
        <img src="/sun2.png" className={styles.rotating} /> Matei
      </div>
    </div>
  );
};

export default Title;
