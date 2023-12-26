import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function ContactSection() {
  return (
    <>
      {/* <!-- Contact --> */}
      <section className="contact h_5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="map_area wow fadeInLeft" data-wow-delay="0.1s">
                <div className="min_map">
                  <div className="mapouter">
                    <div className="gmap_canvas">
                      <iframe
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=metarizz%2Ctechnologies%2Cmumbai%2012&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      ></iframe>
                      <a href="https://2piratebay.org">pirate bay</a>
                      <br />
                      <a href="https://www.embedgooglemap.net"></a>
                    </div>
                  </div>
                  <div className="map_icon">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="min_contact_area">
                <div
                  className="section_title wow fadeInLeft"
                  data-wow-delay="0.3s"
                >
                  <h2>
                    Have any projects in mind?
                    <br /> Let’s work <br /> together
                  </h2>
                </div>
                <form action="#" className="contact_form">
                  <div className="row">
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control input wow fadeInLeft"
                        data-wow-delay="0.5s"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="email"
                        className="form-control input wow fadeInLeft"
                        data-wow-delay="0.7s"
                        placeholder="Enter email address"
                      />
                    </div>
                    <div className="col-lg-12">
                      <textarea
                        name="massage"
                        id="massage"
                        className="form-control input textarea wow fadeInLeft"
                        data-wow-delay="0.9s"
                        placeholder="Enter your message"
                      ></textarea>
                      <input
                        type="submit"
                        className="bg_btn_color wow fadeInLeft"
                        data-wow-delay="1.1s"
                        value="Send message"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Contact --> */}
    </>
  );
}
