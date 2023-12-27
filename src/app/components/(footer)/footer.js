"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

import "./footer.css";

export default function Footer() {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer className="footer" data-bg-color="#D9E0DD">
        <div className="container">
          <div className="main_footer">
            <div className="row">
              <div className="col-xl-5 col-md-6">
                <div
                  className="site_info logo_area wow fadeInLeft"
                  data-wow-delay="0.3s"
                >
                  <img
                    src="assets/img/logo/metarizz_logo.svg"
                    alt=""
                    className="footer_logo custom_footer_logo"
                  />
                  <p>
                    We are focused on providing the best digital services to our
                    clients. Contact us for more information.
                  </p>
                  <div className="social_icons">
                    <a href="https://twitter.com/">
                      <FontAwesomeIcon icon={faXTwitter} />
                    </a>
                    <a href="https://instagram.com/meta.rizz">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://bd.linkedin.com/">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 mid">
                <div className="site_info wow fadeInLeft" data-wow-delay="0.5s">
                  <h5>Contact info</h5>
                  <ul className="loc_list list-unstyled">
                    <li>Mumbai, Bengaluru, Ahmedabad</li>
                    <li>India</li>
                  </ul>
                  <ul className="contact_list list-unstyled">
                    <li className="mail">
                      <a href="mailto:inquire@metarizz.com">
                        inquire@metarizz.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:44793123456">+91 88502 83085</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 last">
                <div className="site_info wow fadeInLeft" data-wow-delay="0.7s">
                  <h5>Subscribe newsletter</h5>
                  <form action="#" className="subscribe_form">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email address"
                    />
                    <input
                      type="submit"
                      className="bg_btn_color"
                      value="Subscribe"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_bottom wow fadeInLeft" data-wow-delay="0.9s">
            <div className="footer_bottom_list">
              <div className="row">
                <div className="col-xl-6">
                  <ul className="footer_nav list-unstyled">
                    <li>
                      <a href="portfolio-2-column.html">Portfolio</a>
                    </li>
                    <li>
                      <a href="team.html">our team</a>
                    </li>
                    <li>
                      <a href="pricing.html">pricing plan</a>
                    </li>
                    <li>
                      <a href="service.html">Services</a>
                    </li>
                    <li>
                      <a href="contact.html">contact us</a>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-6">
                  <ul className="footer_nav right list-unstyled">
                    <li>
                      <a href="contact.html">Terms & conditions</a>
                    </li>
                    <li>
                      <a href="contact.html">privacy policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer_copyright">
              <p>© 2023 MetaRizz</p>
            </div>
          </div>
        </div>
        <div className="shape_img">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <img
              src="assets/img/footer/1.png"
              alt=""
              className="one wow fadeInLeft"
              data-wow-delay="1.3s"
            />
            <img
              src="assets/img/footer/2.png"
              alt=""
              className="two wow fadeInLeft"
              data-wow-delay="1.1s"
            />
            <img
              src="assets/img/footer/3.png"
              alt=""
              className="three wow fadeInLeft"
              data-wow-delay="0.1s"
            />
          </motion.div>
        </div>
      </footer>
      {/* <!-- Footer --> */}
    </>
  );
}
