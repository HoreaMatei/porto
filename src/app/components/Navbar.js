"use client";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { Roboto } from "next/font/google";
import Dropdown from "./Dropdown";

import React, { useState, useEffect } from "react";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // if scroll down hide the navbar
      setIsOpen(false);
    } else {
      // if scroll up show the navbar
      setIsOpen(true);
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);
  return (
    <div className={styles.Navbar}>
      <div className={isOpen ? styles.nav : styles.nav2}>
        <div>
          <Link href="/" className={`${styles.name} ${roboto.className}`}>
            Horea Matei
          </Link>
          <div className={styles.webDev}> WEB DEVELOPER </div>
        </div>

        <div className={styles.dropDown}>
          <Dropdown />
        </div>
        <a
          target="_blank"
          href="https://github.com/HoreaMatei"
          className={styles.git}
        >
          git
        </a>
      </div>
    </div>
  );
};

export default Navbar;
