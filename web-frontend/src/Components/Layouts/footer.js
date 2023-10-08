import React, { Component } from "react";
import "./footer.css";

export default class footer extends Component {
  render() {
    return (
      <div>
        <div className="footer-dark">
          <footer>
            <br />
            <div className="container">
              <div className="row">
                <div className="col-md-3 item">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/023/790/853/original/running-train-icon-clipart-transparent-background-free-free-png.png"
                    width="130px"
                    height="140"
                    className="d-inline-block align-top"
                    alt=""
                  />

                  <div style={{ fontFamily: "TIMES NEW ROMAN" }}>
                    <h3 style={{ fontSize: "25px" }}>
                      Train Tickets Reservation
                    </h3>
                    <ul>
                      <li>
                        <a>Fllow us on Social Media </a>
                      </li>
                      <div
                        className="col item social"
                        style={{ marginRight: "45px", marginTop: "10px" }}
                      >
                        <a className="fab fa-facebook-f"></a>
                        <a className="fab fa-twitter"></a>
                        <a className="fab fa-instagram"></a>
                        <a className="fab fa-linkedin"></a>
                        <a className="fab fa-pinterest"></a>
                      </div>
                      <br />
                      <li>
                        <a>Copyright 2022 © Titans. All Rights Reserved.</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className="col-md-3 item"
                  style={{ marginTop: 40, fontFamily: "TIMES NEW ROMAN" }}
                >
                  <h3 style={{ fontSize: "20px" }}>Explore</h3>
                  <ul>
                    <li>
                      <a href="#" style={{ fontSize: "16px" }}>
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ fontSize: "16px" }}>
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ fontSize: "16px" }}>
                        Profile
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ fontSize: "16px" }}>
                        Support Service
                      </a>
                    </li>
                  </ul>
                </div>

                <div
                  className="col-md-3 item"
                  style={{ marginTop: 40, fontFamily: "TIMES NEW ROMAN" }}
                >
                  <h3 style={{ fontSize: "20px" }}>Get In Touch</h3>
                  <ul>
                    <a style={{ fontSize: "14px" }}>
                      Address : Titans Train Tickets Reservation, New Kandy Road
                      ,Malabe{" "}
                    </a>
                    <a style={{ fontSize: "16px" }}>
                      Tel No : +94112342310 | +94712345318{" "}
                    </a>
                    <br />
                    <a style={{ fontSize: "16px" }}>
                      Email : titans.trainticketsreservation@gmail.com
                    </a>
                  </ul>
                </div>

                <div
                  className="col-md-3 item"
                  style={{ marginTop: 40, fontFamily: "TIMES NEW ROMAN" }}
                >
                  <h3 style={{ fontSize: "20px" }}>Informations</h3>
                  <ul>
                    <a style={{ fontSize: "16px" }}>Privacy Policy</a>
                    <br />
                    <a style={{ fontSize: "16px" }}>Terms of Services</a>
                  </ul>
                </div>
              </div>
              <p className="copyright">SLIIT.com © 20223</p>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
