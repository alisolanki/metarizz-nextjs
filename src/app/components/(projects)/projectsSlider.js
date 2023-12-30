"use client";
import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./projectsSlider.css";
import Carousel from "react-bootstrap/Carousel";
import { motion } from 'framer-motion';
import ItemsData from "../../../../public/Items.json";
const { items } = ItemsData;

//Define all projects data hard-code in this constant projectsData
const projectsData = [
  {
    id: 1,
    image: "/assets/img/medinobel.png",
    title: "TokenWale",
    tags: ["Branding", "UI/UX", "Development"],
    url: "https://www.tokenwale.in/",
    description: "Crypto Project"
  },
  {
    id: 2,
    image: "/assets/img/medinobel.png",
    title: "Imbuzi Ecom Fashion Brand",
    tags: ["Branding", "UI/UX", "Development"],
    url: "https://imbuzi.in/",
    description: "Premium Fashion Ecommerce brand"
  },
  {
    id: 3,
    image: "/assets/img/medinobel.png",
    title: "Medinobel",
    tags: ["Branding", "UI/UX", "Development"],
    url: "https://imbuzi.in/",
    description: "Patient Doctor Appointment App"
  },{
    id: 4,
    image: "/assets/img/medinobel.png",
    title: "GuestInMe Club App",
    tags: ["Branding", "UI/UX", "Development"],
    url: "https://imbuzi.in/",
    description: "Nightlife Aggregator Platform"
  },{
    id: 5,
    image: "/assets/img/medinobel.png",
    title: "Show World Film Directory",
    tags: ["Branding", "UI/UX", "Development"],
    url: "https://imbuzi.in/",
    description: "A directory of professionals from entertainment industry"
  },{
    id: 6,
    image: "/assets/img/medinobel.png",
    title: "The Stripes NFT",
    tags: ["Branding", "UI/UX", "Development"],
    url: "https://imbuzi.in/",
    description: "The Stripes NFT minting Dapp"
  },{
    id: 7,
    image: "/assets/img/medinobel.png",
    title: "Vega Auto Website",
    tags: ["Branding", "UI/UX", "Development"],
    url: "https://imbuzi.in/",
    description: "Motor gear brand"
  },{
    id: 8,
    image: "/assets/img/medinobel.png",
    title: "Watermelon Gang Creative Agency Website",
    tags: ["Branding", "UI/UX", "Development"],
    url: "https://imbuzi.in/",
    description: "An exceptional marketing agency"
  },{
    id: 9,
    image: "/assets/img/medinobel.png",
    title: "Ed-tech Platform",
    tags: ["Branding", "UI/UX", "Development"],
    url: "https://imbuzi.in/",
    description: "Hands-on Courses"
  },{
    id: 10,
    image: "/assets/img/medinobel.png",
    title: "Imbuzi Ecom Fashion Brand",
    tags: ["Branding", "UI/UX", "Development"],
    url: "https://imbuzi.in/",
    description: "Premium Fashion Ecommerce brand"
  },{
    id: 11,
    image: "/assets/img/medinobel.png",
    title: "Helper AI Chrome Extension",
    tags: ["Branding", "UI/UX", "Development"],
    url: "https://imbuzi.in/",
    description: "Chrome Extension"
  },{
    id: 12,
    image: "/assets/img/medinobel.png",
    title: "Kart Racing League Website",
    tags: ["Branding", "UI/UX", "Development"],
    url: "https://imbuzi.in/",
    description: "Blockchain game"
  },{
    id: 13,
    image: "/assets/img/medinobel.png",
    title: "Typer AI webapp",
    tags: ["Branding", "UI/UX", "Development"],
    url: "https://imbuzi.in/",
    description: "Webapp"
  },
  // ... other projects to be added here ...
];

export default function ProjectsSlider() {
  const fadeInLeftVariants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
  };
  
  const fadeInRightVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
  };

  const fadeInFromLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, delay: 0.1 }
  };
  
  const fadeInFromRight = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, delay: 0.1 }
  };

  const { bootstrap } = items;
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      {/* <!-- Project Slider Two --> */}
      <section className="project_slider_two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section_title">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                variants={fadeInLeftVariants}
                className="section_title"
              >
                Explore some <br />
                amazing projects
              </motion.h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project_slider_btn">
              <motion.a
                href="portfolio-2-column.html"
                className="bg_btn"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                variants={fadeInLeftVariants}
              >
                View all projects <FontAwesomeIcon icon={faArrowRight} />
              </motion.a>
              </div>
            </div>
          </div>
        </div>

        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className="custom_carousel"
        >
          {projectsData.map((project) => (
            <Carousel.Item key={project.id} interval={3000}>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeftVariants}>
                <ProjectItem {...project} />
              </motion.div>
            </Carousel.Item>
          ))}
          {/* {bootstrap.map((item) => (
            <Carousel.Item
              key={item.id}
              interval={3000}
            >
              <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInLeftVariants}
                  className="single_project_slider_two"
                >
                <img
                  src="/assets/img/medinobel.png"
                  alt=""
                  className="carousel_img"
                />
                <ul className="list-unstyled custom_carousel_list">
                  <li>
                    <a href="portfolio-single.html" className="tag_btn">
                      Branding
                    </a>
                  </li>
                  <li>
                    <a href="portfolio-single.html" className="tag_btn">
                      Ui/ux
                    </a>
                  </li>
                  <li>
                    <a href="portfolio-single.html" className="tag_btn">
                      Development
                    </a>
                  </li>
                </ul>
              </motion.div>
              <div className="project_bottom">
                <h4>
                  <a href="portfolio-single.html">
                    Collateral Design for Globex which is mentioned here
                  </a>
                </h4>
                <a className="project_btn" href="portfolio-single.html">
                  View project
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </div>
            </Carousel.Item>
          ))} */} {/*Commented from top till here*/}
          {/* </Carousel> */}

          {/* <Carousel
          indicators={true}
          variant="dark"
          className="min_project_slider_two_area"
          > */}
          {/* <Carousel.Item key={1} interval={3000}>
            <img src="/assets/img/project/5.png" alt="" />
            <Carousel.Caption>
              <h3>Hello World</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item key={2} interval={3000}>
            <img src="/assets/img/project/5.png" alt="" />
            <Carousel.Caption>
              <h3>Hello World</h3>
            </Carousel.Caption>
          </Carousel.Item> */}
          {/* <CarouselItem className="single_project_slider_two wow fadeInLeft">
            <div className="project_top">
              <img src="/assets/img/project/5.png" alt="" />
              <ul className="tags list-unstyled">
                <li>
                  <a href="portfolio-single.html">Branding</a>
                </li>
                <li>
                  <a href="portfolio-single.html">Ui/ux</a>
                </li>
                <li>
                  <a href="portfolio-single.html">Development</a>
                </li>
              </ul>
            </div>
            <div className="project_bottom">
              <h4>
                <a href="portfolio-single.html">Collateral Design for Globex</a>
              </h4>
              <a className="project_btn" href="portfolio-single.html">
                View project
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </CarouselItem> */}
          {/* <CarouselItem>
            <div className="project_top">
              <img src="/assets/img/project/5.png" alt="" />
              <ul className="tags list-unstyled">
                <li>
                  <a href="portfolio-single.html">Branding</a>
                </li>
                <li>
                  <a href="portfolio-single.html">Ui/ux</a>
                </li>
                <li>
                  <a href="portfolio-single.html">Development</a>
                </li>
              </ul>
            </div>
            <div className="project_bottom">
              <h4>
                <a href="portfolio-single.html">Collateral Design for Globex</a>
              </h4>
              <a className="project_btn" href="portfolio-single.html">
                View project
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="project_top">
              <img src="/assets/img/project/5.png" alt="" />
              <ul className="tags list-unstyled">
                <li>
                  <a href="portfolio-single.html">Branding</a>
                </li>
                <li>
                  <a href="portfolio-single.html">Ui/ux</a>
                </li>
                <li>
                  <a href="portfolio-single.html">Development</a>
                </li>
              </ul>
            </div>
            <div className="project_bottom">
              <h4>
                <a href="portfolio-single.html">Collateral Design for Globex</a>
              </h4>
              <a className="project_btn" href="portfolio-single.html">
                View project
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </CarouselItem> */}
        </Carousel>

        {/* <div className="min_project_slider_two_area"> */}

        {/* <div
          className="single_project_slider_two wow fadeInLeft"
          data-wow-delay="0.5s"
        >
          <div className="project_top">
            <img src="/assets/img/project/5.png" alt="" />
            <ul className="tags list-unstyled">
              <li>
                <a href="portfolio-single.html">Branding</a>
              </li>
              <li>
                <a href="portfolio-single.html">Ui/ux</a>
              </li>
              <li>
                <a href="portfolio-single.html">Development</a>
              </li>
            </ul>
          </div>
          <div className="project_bottom">
            <h4>
              <a href="portfolio-single.html">Collateral Design for Globex</a>
            </h4>
            <a className="project_btn" href="portfolio-single.html">
              View project
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
        <div
          className="single_project_slider_two wow fadeInLeft"
          data-wow-delay="0.5s"
        >
          <div className="project_top">
            <img src="/assets/img/project/6.png" alt="" />
            <ul className="tags list-unstyled">
              <li>
                <a href="portfolio-single.html">Branding</a>
              </li>
              <li>
                <a href="portfolio-single.html">Ui/ux</a>
              </li>
              <li>
                <a href="portfolio-single.html">Development</a>
              </li>
            </ul>
          </div>
          <div className="project_bottom">
            <h4>
              <a href="portfolio-single.html">Collateral Design for Globex</a>
            </h4>
            <a className="project_btn" href="portfolio-single.html">
              View project
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
        <div
          className="single_project_slider_two wow fadeInLeft"
          data-wow-delay="0.5s"
        >
          <div className="project_top">
            <img src="/assets/img/project/7.png" alt="" />
            <ul className="tags list-unstyled">
              <li>
                <a href="portfolio-single.html">Branding</a>
              </li>
              <li>
                <a href="portfolio-single.html">Ui/ux</a>
              </li>
              <li>
                <a href="portfolio-single.html">Development</a>
              </li>
            </ul>
          </div>
          <div className="project_bottom">
            <h4>
              <a href="portfolio-single.html">Collateral Design for Globex</a>
            </h4>
            <a className="project_btn" href="portfolio-single.html">
              View project
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
        <div
          className="single_project_slider_two wow fadeInLeft"
          data-wow-delay="0.5s"
        >
          <div className="project_top">
            <img src="/assets/img/project/6.png" alt="" />
            <ul className="tags list-unstyled">
              <li>
                <a href="portfolio-single.htmlportfolio-single.html">
                  Branding
                </a>
              </li>
              <li>
                <a href="portfolio-single.htmlportfolio-single.html">Ui/ux</a>
              </li>
              <li>
                <a href="portfolio-single.htmlportfolio-single.html">
                  Development
                </a>
              </li>
            </ul>
          </div>
          <div className="project_bottom">
            <h4>
              <a href="portfolio-single.html">Collateral Design for Globex</a>
            </h4>
            <a className="project_btn" href="portfolio-single.html">
              View project
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div> */}
        {/* </Flickity> */}
        <div className="shape_img">
        <motion.img
          src="/assets/img/project/shape/5/1.png"
          alt=""
          className="one"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInFromLeft}
        />
        <motion.img
          src="/assets/img/project/shape/5/2.png"
          alt=""
          className="two"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInFromRight}
        />
        </div>
      </section>
      {/* <!-- Project Slider Two --> */}
    </>
  );
}
