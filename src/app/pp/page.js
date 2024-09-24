"use client";
import React, { useState, useEffect } from "react";
import "./page1.css";
const Navbar = () => {
  return (
    <div class="dropdown">
      <button title="General Information" class="dropbtn">
        General Information
      </button>
      <div class="dropdown-content">
        <a href="#">
          <b>Life Span</b>: around 16y
        </a>
        <a href="#">
          <b>Adult Size</b>: 3-5 inches long
        </a>
        <a href="#">
          <b>Weight</b>: 1-3 oz
        </a>
        <a href="#">
          <b>Common Name</b>: White's Dumpy tree frog
        </a>
        <a href="#">
          <b>Scientific name</b>: <i>Litoria Caerulea</i>
        </a>{" "}
      </div>{" "}
    </div>
  );
};

export default Navbar;
