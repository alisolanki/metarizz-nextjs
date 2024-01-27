"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Parallax } from "react-scroll-parallax";
import Loader from "./Loader";
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

  const [refOne, inViewOne] = useInView({ threshold: 0.1 });
  const [refTwo, inViewTwo] = useInView({ threshold: 0.1 });
  const [refThree, inViewThree] = useInView({ threshold: 0.1 });

  const fadeOutLeft = {
    exit: { opacity: 0, x: -100 },
  };

  const fadeOutRight = {
    exit: { opacity: 0, x: 100 },
  };

  // State variables for loading and submission
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const resetForm = () => {
    setIsSubmitted(false);
    setMiniFormData({
      name: "",
      email: "",
      message: "",
      phoneNumber: "",
      budget: "",
    });
  };

  // Mini form state and handlers
  const [miniFormData, setMiniFormData] = useState({
    name: "",
    email: "",
    message: "",
    phoneNumber: "",
    budget: "",
  });

  const handleMiniFormChange = (e) => {
    setMiniFormData({ ...miniFormData, [e.target.name]: e.target.value });
  };

  const handleMiniFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(miniFormData),
    });

    const data = await response.json();
    setIsLoading(false);

    if (response.ok) {
      // Handle success
      setIsSubmitted(true);
    } else {
      // Handle error
      alert("Form submission error", data);
    }
  };

  return (
    <>
      <section className="hero_coporate_agency" id="#home">
        <div className="container">
          <div className="content cstm_content_mob">
            <div
              className="section_title cstm_sect_title_mob"
            >
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
                <b> Mobile App</b> to complete <b>infrastructure</b>{" "}
                development.
                <br />
                {" "}We design, develop, market to rizz up your digital presence.
              </motion.p>
              <motion.a
                href="#contact-section"
                className="bg_btn"
                variants={fadeInLeft}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.5 }}
              >
                Contact Us <FontAwesomeIcon icon={faArrowRight} />
              </motion.a>
            </div>
            {/* Mini Form */}
            <div
              className="min_contact_area cstm_mini_form"
            >
              <motion.div
                initial="initial"
                animate="animate"
                transition={{ duration: 0.8, delay: 0.3 }}
                variants={fadeInRight}
                className="section_title"
                style={{ paddingBottom: "60px" }}
              >
                <h2>Let&apos;s work together</h2>
              </motion.div>

              {isLoading && <Loader />}
              {!isLoading && !isSubmitted && (
                <form
                  onSubmit={handleMiniFormSubmit}
                  className="contact_form_hero"
                >
                  <div className="row">
                    <motion.input
                      type="text"
                      name="name"
                      value={miniFormData.name}
                      onChange={handleMiniFormChange}
                      className="form-control input"
                      placeholder="Your full name"
                      style={{ marginBottom: "10px" }}
                      initial="initial"
                      animate="animate"
                      transition={{ duration: 0.8, delay: 0.3 }}
                      variants={fadeInRight}
                    />
                    <motion.input
                      type="email"
                      name="email"
                      value={miniFormData.email}
                      onChange={handleMiniFormChange}
                      className="form-control input"
                      placeholder="Email address"
                      style={{ marginBottom: "10px" }}
                      initial="initial"
                      animate="animate"
                      transition={{ duration: 0.8, delay: 0.3 }}
                      variants={fadeInRight}
                    />
                    <motion.input
                      type="tel"
                      name="phoneNumber"
                      value={miniFormData.phoneNumber}
                      onChange={handleMiniFormChange}
                      className="form-control input"
                      placeholder="(+91-) Phone Number"
                      style={{ marginBottom: "10px" }}
                      initial="initial"
                      animate="animate"
                      transition={{ duration: 0.8, delay: 0.3 }}
                      variants={fadeInRight}
                      pattern="^\+\d+\s*\d+$"
                      title="Please enter a valid phone number with country code e.g. +91 7218271556"
                    />
                    <motion.select
                      name="budget"
                      value={miniFormData.budget}
                      onChange={handleMiniFormChange}
                      className="form-control input"
                      style={{ marginBottom: "10px" }}
                      initial="initial"
                      animate="animate"
                      transition={{ duration: 0.8, delay: 0.3 }}
                      variants={fadeInRight}
                    >
                      <option value="">Select Budget</option>
                      <option value="10000+">$10000+</option>
                      <option value="5000-10000">$5000 to $10000</option>
                      <option value="2500-5000">$2500 to $5000</option>
                      <option value="1500-2500">$1500 to $2500</option>
                      <option value="1000-1500">$1000 to $1500</option>
                      <option value="0-1000">$0 to $1000</option>
                    </motion.select>
                    <motion.textarea
                      name="message"
                      value={miniFormData.message}
                      onChange={handleMiniFormChange}
                      className="form-control input textarea"
                      placeholder="Enter Your Requirement"
                      rows="3"
                      style={{ marginBottom: "10px" }}
                      initial="initial"
                      animate="animate"
                      transition={{ duration: 0.8, delay: 0.3 }}
                      variants={fadeInRight}
                    ></motion.textarea>
                    <motion.input
                      type="submit"
                      className="bg_btn_color"
                      value="Send Message"
                      initial="initial"
                      animate="animate"
                      transition={{ duration: 0.8, delay: 0.3 }}
                      variants={fadeInRight}
                    />
                  </div>
                </form>
              )}

              {!isLoading && isSubmitted && (
                <div className="success-message">
                  <p>
                    Congratulations! Your form is submitted. We will reach out
                    to you within 1 day.
                  </p>
                  <button onClick={resetForm} className="bg_btn_color">
                    Submit Form Again
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* <div className="shape_img">
          <Parallax scale={[0.9, 1.5, 'linear']}>
          <motion.img
            src="assets/img/hero/shape/5/1.png"
            ref={refOne}
            alt=""
            className="one"
            variants={inViewOne ? fadeInLeft : fadeOutLeft}
            initial="exit"
            animate={inViewOne ? "animate" : "exit"}
          />
          </Parallax>
          <Parallax scale={[0.9, 1.5, 'linear']}>
          <motion.img
            src="assets/img/hero/shape/5/2.png"
            ref={refTwo}
            alt=""
            className="two"
            variants={inViewTwo ? fadeInLeft : fadeOutLeft}
            initial="exit"
            animate={inViewTwo ? "animate" : "exit"}
          />
          </Parallax>
          <Parallax scale={[0.9, 1.5, 'linear']}>
          <motion.img
            src="assets/img/hero/shape/5/3.png"
            ref={refThree}
            alt=""
            className="three"
            variants={inViewThree ? fadeInRight : fadeOutRight}
            initial="exit"
            animate={inViewThree ? "animate" : "exit"}
          />
          </Parallax>
        </div> */}
      </section>
    </>
  );
}
