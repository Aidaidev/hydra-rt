import React from "react";
import { GoArrowRight } from "react-icons/go";
import imgGirl from "../../images/hero-img.png";
import infoStenka from "../../images/stenka-info.png";
import { VscLocation } from "react-icons/vsc";
import { PiPhoneCall } from "react-icons/pi";
import { RiMailLine } from "react-icons/ri";
const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero">
          <div className="hero-title">
            <h1>
              <span>Dive</span> Into The Depths <br />
              Of <span>Virtual Reality</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br />
              sed do eiusmod tempor incididunt ut labore et dolore <br />
              nisl tincidunt eget. Lectus mauris eros in vitae .
            </p>
            <div className="world">
              <button>BUILD YOUR WORLD</button>
              <a>
                <GoArrowRight />
              </a>
            </div>
          </div>
          <div className="img-hero">
            <img src={imgGirl} alt="" />
          </div>
        </div>

        <div className="info">
          <div className="location">
            <a className="info-img">
              <VscLocation />
            </a>
            <div className="info-title">
              <h3>Pay Us a Visit</h3>
              <p>Union St, Seattle, WA 98101, United States</p>
            </div>
          </div>
          <img src={infoStenka} alt="" />
          <div className="location">
            <a className="info-img">
              <PiPhoneCall />
            </a>
            <div className="info-title">
              <h3>Give Us a Call </h3>
              <p>(110) 1111-1010</p>
            </div>
          </div>
          <img src={infoStenka} alt="" />

          <div className="location">
            <a className="info-img">
              <RiMailLine />
            </a>
            <div className="info-title">
              <h3>Send Us a Message</h3>
              <p>Contact@HydraVTech.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
