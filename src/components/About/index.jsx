import React from "react";
import strelka from "../../images/strelka-about.png";
import aboutImg from "../../images/about-img.png";

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="about">
          <div className="discription">
            <div>
              <h1>INTRODUCTION</h1>
              <div className="vr">
                <span className="span">TO HYDRA VR</span>
                <img src={strelka} alt="" />
              </div>
            </div>
            <p>
              Vitae sapien pellentesque habitant morbi tristique senectus et
              netus et. Feugiat <br /> nibh sed pulvinar proin gravida hendrerit
              lectus. Mi sit amet mauris commodo <br /> quis imperdiet massa
              tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare{" "}
              <br />
              lectus sit amet est placerat in. Lectus magna fringilla urna
              porttitor rhoncus vitae.
            </p>
          </div>
          <div className="about-img">
            <img src={aboutImg} alt="img" />
            <div className="about-dis">
              <h1>
                ABOUT <br /> <span className="span">HYDRA VR</span>
              </h1>
              <p>
                Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
                mattis rhoncus <br /> urna neque viverra justo. Vivamus at augue
                eget arcu dictum. Ultrices gravida <br /> dictum fusce ut
                placerat orci. Aenean et tortor at risus viverra adipiscing at
                in. <br /> Mattis aliquam faucibus purus in massa. Est placerat
                in egestas erat imperdiet <br /> sed. Consequat semper viverra
                nam libero justo laoreet sit amet. Aliquam <br /> etiam erat
                velit scelerisque in dictum non consectetur a. Laoreet sit amet{" "}
                <br />
                cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem
                nulla pha <br /> retra diam sit amet nisl suscipit adipiscing
                bibendum. Leo a diam sollicitudi <br /> n tempor.
              </p>
              <button className="btn2">LET’S GET IN TOUCH</button>
            </div>
          </div>
          <div className="discription">
            <div>
              <h1>WHY BUILD</h1>
              <div className="vr">
                <span className="span">WITH HYDRA?</span>
                <img src={strelka} alt="" />
              </div>
            </div>
            <p>
              Vitae sapien pellentesque habitant morbi tristique senectus et
              netus et. Feugiat <br /> nibh sed pulvinar proin gravida hendrerit
              lectus. Mi sit amet mauris commodo <br /> quis imperdiet massa
              tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare{" "}
              <br />
              lectus sit amet est placerat in. Lectus magna fringilla urna
              porttitor rhoncus vitae.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
