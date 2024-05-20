import React from "react";
import bg from "../../images/tehno-img.png";

const Tehno = () => {
  return (
    <div id="tehno">
      <div className="container">
        <div
          className="tehno"
          style={{
            background: `url("${bg}") no-repeat center/cover`,
            minHeight: "45vh",
          }}
        >
          <h1>TECHNOLOGIES & HARDWARE</h1>
          <span>USED BY HYDRA VR.</span>
        </div>
      </div>
    </div>
  );
};

export default Tehno;
