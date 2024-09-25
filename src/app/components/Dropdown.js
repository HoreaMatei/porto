"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

import { Button } from "@nextui-org/react";

import "./dropdown.css";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {}

  function buttonClicked() {
    setIsOpen((prev) => !prev);
  }
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // if scroll down hide the navbar
      setIsOpen(false);
    } else {
      // if scroll up show the navbar
      setIsOpen(false);
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
    <div className={isOpen ? "menu2" : "menu"}>
      <Button
        className={isOpen ? "dropdownButton2" : "dropdownButton"}
        onClick={buttonClicked}
      >
        <div className="container">
          <div className={isOpen ? "bar1C" : "bar1"}></div>
          <div className={isOpen ? "bar2C" : "bar2"}></div>
          <div className={isOpen ? "bar3C" : "bar3"}></div>
        </div>
      </Button>
      {isOpen && (
        <div className="dropdown">
          <li>
            <Link
              style={{ textDecoration: "none" }}
              className="link"
              href="/#porto"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              className="link doi"
              href="/#work"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              style={{ textDecoration: "none" }}
              className="link"
              href="https://github.com/HoreaMatei"
            >
              Git
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              className="link"
              href="/#contact_div"
            >
              Contact
            </Link>
          </li>
        </div>
      )}
    </div>
  );
}
