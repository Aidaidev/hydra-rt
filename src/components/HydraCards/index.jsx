import React from "react";
import cardImg1 from "../../images/cardImg-1.png";
import cardImg2 from "../../images/cardImg-2.png";
import cardImg3 from "../../images/cardImg-3.png";
import cardImg4 from "../../images/cardImg-4.png";
import aboutS from "../../images/about-s.png";

const HydraCards = () => {
  return (
    <div id="hydra-cards">
      <div className="container">
        <div className="hydra-cards">
          <div className="card">
            <div className="img-card">
              <img src={cardImg1} alt="" />
            </div>
            <h2>SIMULATION</h2>
            <img src={aboutS} alt="" />
            <p>
              Vitae sapien pellentesque habitant morbi <br /> nunc. Viverra
              aliquet porttitor rhoncus <br /> libero justo laoreet sit amet
              vitae.
            </p>
            <button className="btn2">TRY IT NOW</button>
          </div>
          <div className="card">
            <div className="img-card">
              <img src={cardImg2} alt="" />
            </div>
            <h2>EDUCATION</h2>
            <img src={aboutS} alt="" />
            <p>
              Vitae sapien pellentesque habitant morbi <br /> nunc. Viverra
              aliquet porttitor rhoncus <br /> libero justo laoreet sit amet
              vitae.
            </p>
            <button className="btn2">TRY IT NOW</button>
          </div>
          <div className="card">
            <div className="img-card">
              <img src={cardImg3} alt="" />
            </div>
            <h2>SELF-CARE</h2>
            <img src={aboutS} alt="" />
            <p>
              Vitae sapien pellentesque habitant morbi <br /> nunc. Viverra
              aliquet porttitor rhoncus <br /> libero justo laoreet sit amet
              vitae.
            </p>
            <button className="btn2">TRY IT NOW</button>
          </div>
          <div className="card">
            <div className="img-card">
              <img src={cardImg4} alt="" />
            </div>
            <h2>OUTDOOR</h2>
            <img src={aboutS} alt="" />
            <p>
              Vitae sapien pellentesque habitant morbi <br /> nunc. Viverra
              aliquet porttitor rhoncus <br /> libero justo laoreet sit amet
              vitae.
            </p>
            <button className="btn2">TRY IT NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HydraCards;
