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

export default function ProjectsSlider() {
  const fadeInLeftVariants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
  };
  
  const fadeInRightVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
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
                <h2 className="wow fadeInLeft" data-wow-delay="0.3s">
                  Explore some <br />
                  amazing projects
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project_slider_btn">
                <a
                  href="portfolio-2-column.html"
                  className="bg_btn wow fadeInLeft"
                  data-wow-delay="0.5s"
                >
                  View all projects
                </a>
              </div>
            </div>
          </div>
        </div>

        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className="custom_carousel"
        >
          {bootstrap.map((item) => (
            <Carousel.Item
              key={item.id}
              interval={3000}
              className="single_project_slider_two wow fadeInLeft"
            >
              <div className="project_top">
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
              </div>
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
          ))}
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
          <img src="/assets/img/project/shape/5/1.png" alt="" className="one" />
          <img src="/assets/img/project/shape/5/2.png" alt="" className="two" />
        </div>
      </section>
      {/* <!-- Project Slider Two --> */}
    </>
  );
}
