import React from "react";

export default function Testimonial() {
  return (
    <>
      {/* <!-- Testimonial --> */}
      <section className="testimonial">
        <div className="container">
          <div className="min_testimonial_area">
            <div className="single_testimonial">
              <img src="assets/img/testimonial/icon.png" alt="" />
              <p>
                "We’ve worked with multiple agencies in the past but they could
                never match the quality we got here. Thanks Ali for the
                excellent communication throughout the process!"
              </p>
              <div className="testimonial_people">
                <span className="name">Namita</span>
                <span>, </span>
                <span className="des">Schbang for Kotak 811</span>
              </div>
            </div>
            <div className="single_testimonial">
              <img src="assets/img/testimonial/icon.png" alt="" />
              <p>
                "Smooth communication, great work, and a very professional
                team!"
              </p>
              <div className="testimonial_people">
                <span className="name">Irina</span>
                <span>, </span>
                <span className="des">Brizy</span>
              </div>
            </div>
          </div>
        </div>
        <div className="shape_img">
          <img
            src="assets/img/testimonial/shape/1.png"
            alt=""
            className="one wow fadeInRight"
            data-wow-delay="0.1s"
          />
          <img
            src="assets/img/testimonial/shape/2.png"
            alt=""
            className="two wow fadeInLeft"
            data-wow-delay="0.3s"
          />
        </div>
      </section>
      {/* <!-- Testimonial --> */}
    </>
  );
}
