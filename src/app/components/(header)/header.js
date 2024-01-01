import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavbarItem from "./navbarItem";
import Link from 'next/link'
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
                <NavbarItem name="About Us" active={false} href="#digital-agency"/>
                <NavbarItem name="Services" active={false} href="#our-services"/>
                <NavbarItem name="Projects" active={false} href="#projects-section"/>
                {/* <NavbarItem name="Blog" active={false} /> */}
              </ul>
              <div className="nav_buttons">
                <Link target="_blank" href="https://wa.me/+918850283085?text=Hey%21+I+have+a+requirement+for+MetaRizz+for+building+a" className="contact_btn">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* <!-- Header Section --> */}
    </>
  );
}
