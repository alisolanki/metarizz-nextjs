import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavbarItem from "./navbarItem";
import "./header.css";

export default function Header() {
  return (
    <>
      {/* <!-- Header Section --> */}
      <header className="header_aria navbar_fixed">
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img
                src="assets/img/logo/metarizz_logo.svg"
                alt=""
                className="logo"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon icon={faBars} style={{ color: "black" }} />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <NavbarItem name="Home" active={false} />
                <NavbarItem name="About Us" active={false} />
                <NavbarItem name="Services" active={false} />
                <NavbarItem name="Projects" active={false} />
                <NavbarItem name="Blog" active={false} />
              </ul>
              <div className="nav_buttons">
                <a href="contact.html" className="contact_btn">
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* <!-- Header Section --> */}
    </>
  );
}
