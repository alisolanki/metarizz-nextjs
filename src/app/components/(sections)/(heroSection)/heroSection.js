import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./heroSection.css";

export default function HeroSection() {
  return (
    <>
      {/* <!-- Hero --> */}
      <section className="hero_coporate_agency" id="#home">
        <div className="container">
          <div className="content">
            <div className="section_title">
              <h1 className="hero_title wow fadeInLeft" data-wow-delay="0.1s">
                Design<span style={{ color: "var(--red-dark-clr)" }}>.</span>{" "}
                Develop<span style={{ color: "var(--red-dark-clr)" }}>.</span>{" "}
                Market<span style={{ color: "var(--red-dark-clr)" }}>.</span>{" "}
                <span style={{ color: "var(--green-dark-clr)" }}>
                  Rizz<span style={{ color: "var(--red-dark-clr)" }}>.</span>
                </span>
              </h1>
              <p className="wow fadeInLeft" data-wow-delay="0.2s">
                <b style={{ color: "var(--red-dark-clr)" }}>MetaRizz </b>
                helps you right from <b>Blockchain</b>, <b>AI</b>,<b>Web</b>,
                <b>Mobile App</b> to complete <b>infrastructure</b> development.
                <br />
                We design, develop, market to rizz up your digital presence.
              </p>
            </div>
            <a
              href="#contact-us"
              className="bg_btn wow fadeInLeft"
              data-wow-delay="0.5s"
            >
              Contact Us <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
        <div className="shape_img">
          <img
            src="assets/img/hero/shape/5/1.png"
            alt=""
            className="one wow fadeInLeft"
            data-wow-delay="0.7s"
          />
          <img
            src="assets/img/hero/shape/5/2.png"
            alt=""
            className="two wow fadeInLeft"
          />
          <img
            src="assets/img/hero/shape/5/3.png"
            alt=""
            className="three wow fadeInRight"
          />
        </div>
      </section>
      {/* <!-- Hero --> */}
    </>
  );
}
