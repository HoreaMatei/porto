"use client";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { Roboto } from "next/font/google";
import Dropdown from "./Dropdown";
import React, { useState, useEffect, useRef } from "react";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const lastScrollY = useRef(0); // Using ref instead of state to prevent excessive re-renders

  useEffect(() => {
    let ticking = false; // Prevents excessive function calls

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (window.scrollY > lastScrollY.current) {
            setIsOpen(false);
          } else {
            setIsOpen(true);
          }
          lastScrollY.current = window.scrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.Navbar}>
      <div className={isOpen ? styles.nav : styles.nav2}>
        <div>
          <Link href="/" className={`${styles.name} ${roboto.className}`}>
            Horea Matei
          </Link>
          <div className={styles.webDev}> FULLSTACK DEVELOPER </div>
        </div>

        <div className={styles.dropDown}>
          <Dropdown />
        </div>
        <a
          target="_blank"
          href="https://github.com/HoreaMatei"
          className={styles.git}
        >
          gitHub
        </a>
      </div>
    </div>
  );
};

export default Navbar;
