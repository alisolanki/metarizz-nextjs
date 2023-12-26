'use client';
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "./heroSection.css";

export default function HeroSection() {
  const fadeInLeft = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <>
      <section className="hero_coporate_agency" id="#home">
        <div className="container">
          <div className="content">
            <div className="section_title">
              <motion.h1
                className="hero_title"
                variants={fadeInLeft}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.1 }}
              >
                Design<span style={{ color: "var(--red-dark-clr)" }}>.</span>{" "}
                Develop<span style={{ color: "var(--red-dark-clr)" }}>.</span>{" "}
                Market<span style={{ color: "var(--red-dark-clr)" }}>.</span>{" "}
                <span style={{ color: "var(--green-dark-clr)" }}>
                  Rizz<span style={{ color: "var(--red-dark-clr)" }}>.</span>
                </span>
              </motion.h1>
              <motion.p
                className="wow fadeInLeft"
                variants={fadeInLeft}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.2 }}
              >
                <b style={{ color: "var(--red-dark-clr)" }}>MetaRizz </b>
                helps you right from <b>Blockchain</b>, <b>AI</b>, <b>Web</b>,
                <b> Mobile App</b> to complete <b>infrastructure</b> development.
                <br />
                We design, develop, market to rizz up your digital presence.
              </motion.p>
              <motion.a
                href="#contact-us"
                className="bg_btn"
                variants={fadeInLeft}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.5 }}
              >
                Contact Us <FontAwesomeIcon icon={faArrowRight} />
              </motion.a>
            </div>
          </div>
        </div>
        <div className="shape_img">
          <motion.img
            src="assets/img/hero/shape/5/1.png"
            alt=""
            className="one"
            variants={fadeInLeft}
            initial="initial"
            animate="animate"
          />
          <motion.img
            src="assets/img/hero/shape/5/2.png"
            alt=""
            className="two"
            variants={fadeInLeft}
            initial="initial"
            animate="animate"
          />
          <motion.img
            src="assets/img/hero/shape/5/3.png"
            alt=""
            className="three"
            variants={fadeInRight}
            initial="initial"
            animate="animate"
          />
        </div>
      </section>
    </>
  );
}
