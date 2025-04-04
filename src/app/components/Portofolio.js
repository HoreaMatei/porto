"use client";

import React from "react";
import styles from "./Portofolio.module.css";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import dynamic from "next/dynamic";

import { Revalia, Roboto } from "next/font/google";
import RevealOnScroll from "./RevealOnScroll";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const Portofolio = () => {
  return (
    <div>
      <div className={styles.porto}>Projects</div>
      <div id="porto" className={`${styles.main22} ${roboto.className}`}>
        {/* <div className={styles.porto}>Projects</div> */}

        <RevealOnScroll>
          <div className={styles.relative}>
            <RevealOnScroll>
              <div className={styles.projectDiv1}>
                <Link
                  target="_blank"
                  href="https://layout-project-one.vercel.app"
                  className={styles.link}
                >
                  {" "}
                  <img
                    className={styles.food1}
                    alt="img"
                    src="./digital1.png"
                  />
                </Link>
                <img className={styles.food2} alt="img" src="./digital2.png" />
              </div>
            </RevealOnScroll>
            <div className={styles.description}>
              <RevealOnScroll>
                <div>
                  <div className={styles.videoDesc}>
                    Digital Creative Studio
                  </div>
                  <p>Frontend App </p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll>
                <p className={styles.description_p}>
                  Digital Creative Studio is a frontend project showcasing
                  dynamic and complex animations. Built with{" "}
                  <span className={styles.span}>
                    React, TypeScript, Tailwind CSS, Framer Motion
                  </span>
                  , and <span className={styles.span}>React Router</span>, it
                  delivers a seamless and visually engaging experience while
                  highlighting the developer's skills in creating sophisticated
                  UI interactions.
                </p>
              </RevealOnScroll>

              <RevealOnScroll>
                {" "}
                <div className={styles.links_div}>
                  <Link
                    target="_blank"
                    href="https://github.com/HoreaMatei/layout-project"
                    className={styles.code}
                  >
                    View Code
                  </Link>

                  <Link
                    target="_blank"
                    href="https://layout-project-one.vercel.app"
                    className={styles.site_link}
                  >
                    Visit Website
                  </Link>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className={styles.relative1}>
            <RevealOnScroll>
              <div className={styles.projectDiv1}>
                <Link
                  target="_blank"
                  href="https://background-remover-virid-kappa.vercel.app"
                  className={styles.link}
                >
                  {" "}
                  <img
                    className={styles.food1}
                    alt="img"
                    src="./bg-remover.png"
                  />
                </Link>
                <img
                  className={styles.food2}
                  alt="img"
                  src="./bg-remover-auth.png"
                />
              </div>
            </RevealOnScroll>
            <div className={styles.description}>
              <RevealOnScroll>
                <div>
                  <div className={styles.videoDesc}>AI Background Remover</div>
                  <p>FullStack Web App</p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll>
                <p className={styles.description_p}>
                  AI-driven Background Remover built with{" "}
                  <span className={styles.span}>React.js, Node.js</span> and
                  <span className={styles.span}>Express</span>. Utilizing
                  <span className={styles.span}>Better-SQLite3</span> for the
                  database, <span className={styles.span}>TailwindCSS </span>{" "}
                  for styling and the
                  <span className={styles.span}>Replicate API</span> for
                  processing images.With secure authentication, users can manage
                  their processed images with ease.
                </p>
              </RevealOnScroll>

              <RevealOnScroll>
                <div className={styles.links_div}>
                  <Link
                    target="_blank"
                    href="https://github.com/HoreaMatei/bg_project"
                    className={styles.code}
                  >
                    View Code
                  </Link>

                  <Link
                    target="_blank"
                    href="https://background-remover-virid-kappa.vercel.app"
                    className={styles.site_link}
                  >
                    Visit Website
                  </Link>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className={styles.relative}>
            <RevealOnScroll>
              <div className={styles.projectDiv1}>
                <Link
                  target="_blank"
                  href="https://image-generator-3h9j.vercel.app"
                  className={styles.link}
                >
                  {" "}
                  <img className={styles.food1} alt="img" src="./img-gen.png" />
                </Link>
                <img
                  className={styles.food2}
                  alt="img"
                  src="./img-gen-auth.png"
                />
              </div>
            </RevealOnScroll>
            <div className={styles.description}>
              <RevealOnScroll>
                <div>
                  <div className={styles.videoDesc}>AI Image Generator</div>
                  <p>FullStack Web App</p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll>
                <p className={styles.description_p}>
                  Image Generator built with{" "}
                  <span className={styles.span}>ReactJS, NodeJS</span> and{" "}
                  <span className={styles.span}> Express</span>. Utilizing{" "}
                  <span className={styles.span}>Better-SQLite3</span> for a
                  lightweight database and{" "}
                  <span className={styles.span}>TailwindCSS </span> for styling
                  this app allows users to generate and explore AI-created
                  images seamlessly, with secure authentication for personalized
                  access
                </p>
              </RevealOnScroll>

              <RevealOnScroll>
                {" "}
                <div className={styles.links_div}>
                  <Link
                    target="_blank"
                    href="https://github.com/HoreaMatei/image-generator"
                    className={styles.code}
                  >
                    View Code
                  </Link>

                  <Link
                    target="_blank"
                    href="https://image-generator-3h9j.vercel.app"
                    className={styles.site_link}
                  >
                    Visit Website
                  </Link>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </RevealOnScroll>
        {/* <RevealOnScroll>
          <div className={styles.relative1}>
            <RevealOnScroll>
              <div className={styles.projectDiv1}>
                <Link
                  target="_blank"
                  href="https://e-shop-w6l4.vercel.app"
                  className={styles.link}
                >
                  {" "}
                  <img className={styles.food1} alt="img" src="./eshop.png" />
                </Link>
                <img className={styles.food2} alt="img" src="./eshop2.png" />
              </div>
            </RevealOnScroll>

            <div className={styles.description}>
              <RevealOnScroll>
                <div>
                  <div className={styles.videoDesc}>Ecommerce Website</div>
                  <p>FullStack MERN App</p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll>
                <p className={styles.description_p}>
                  "Fullstack eCommerce application built with the{" "}
                  <span className={styles.span}>MERN </span> stack (
                  <span className={styles.span}>
                    MongoDB, Express.js, React.js, Node.js
                  </span>
                  ). It features user authentication, product management, a
                  shopping cart, and a seamless checkout experience.
                </p>
              </RevealOnScroll>

              <RevealOnScroll>
                <div className={styles.links_div}>
                  <Link
                    target="_blank"
                    href="https://github.com/HoreaMatei/eShop"
                    className={styles.code}
                  >
                    View Code
                  </Link>

                  <Link
                    target="_blank"
                    href="https://e-shop-w6l4.vercel.app"
                    className={styles.site_link}
                  >
                    Visit Website
                  </Link>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </RevealOnScroll> */}

        <RevealOnScroll>
          <div className={styles.relative1}>
            <RevealOnScroll>
              <div className={styles.projectDivVideo}>
                <Link
                  target="_blank"
                  href="https://lotr-frontend.onrender.com/"
                  className={styles.link}
                >
                  <video className={styles.video1} autoPlay loop muted>
                    <source src="./cardVid3.mp4" type="video/mp4" />
                  </video>
                </Link>
              </div>
            </RevealOnScroll>
            <div className={styles.description}>
              <RevealOnScroll>
                <div>
                  <div className={styles.videoDesc}>Card Game</div>
                  <p>FullStack MERN App</p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll>
                <p className={styles.description_p}>
                  Fullstack <span className={styles.span}>MERN</span> card
                  matching game featuring secure authentication with token-based
                  security for session management. Built with
                  <span className={styles.span}>ReactJS</span> and{" "}
                  <span className={styles.span}>NodeJS</span>. Integrated with
                  <span className={styles.span}> Storyblok CMS</span>, it allows
                  dynamic updates to character data and game content.
                </p>
              </RevealOnScroll>

              <RevealOnScroll>
                <div className={styles.links_div}>
                  <Link
                    target="_blank"
                    href="https://github.com/HoreaMatei/lord"
                    className={styles.code}
                  >
                    View Code
                  </Link>

                  <Link
                    target="_blank"
                    href="https://github.com/HoreaMatei/lord"
                    className={styles.site_link}
                  >
                    Visit Website
                  </Link>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className={styles.relative}>
            <RevealOnScroll>
              <div className={styles.projectDiv1}>
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
                <img
                  className={styles.dandelion2}
                  alt="img"
                  src="./dandelion1.png"
                />
              </div>
            </RevealOnScroll>

            <div className={styles.description}>
              <RevealOnScroll>
                <div>
                  <div className={styles.videoDesc}>FlowerShop</div>
                  <p>NextJS App</p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll>
                <p className={styles.description_p}>
                  Modern and responsive{" "}
                  <span className={styles.span}>NextJS</span> web application
                  designed with intuitive{" "}
                  <span className={styles.span}>UI/UX</span> principles. It
                  features reusable components for efficiency and seamles{" "}
                  <span className={styles.span}>API </span> integration for
                  real-time dynamic updates, providing users with a smooth and
                  engaging shopping experience
                </p>
              </RevealOnScroll>

              <RevealOnScroll>
                <div className={styles.links_div}>
                  <Link
                    target="_blank"
                    href="https://github.com/HoreaMatei/dandelion"
                    className={styles.code}
                  >
                    View Code
                  </Link>

                  <Link
                    target="_blank"
                    href="https://dandelionn.vercel.app/"
                    className={styles.site_link}
                  >
                    Visit Website
                  </Link>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
};

export default Portofolio;
