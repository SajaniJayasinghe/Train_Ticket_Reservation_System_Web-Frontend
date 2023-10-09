import React, { Component } from "react";

export default class TravelAgentNavbar extends Component {
  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        ></div>

        <nav
          className="navbar navbar-expand-lg "
          style={{ backgroundColor: "#DAE7F8" }}
        >
          <img
            style={{ marginLeft: 25, marginTop: -38, marginBottom: -35 }}
            src="https://static.vecteezy.com/system/resources/previews/023/790/853/original/running-train-icon-clipart-transparent-background-free-free-png.png"
            width="140"
            height="150"
            className="d-inline-block align-top"
            alt=""
          ></img>
          <div className="container">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-end">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="page"
                    href="/travelAgentHome"
                    style={{
                      color: "black",
                      fontFamily: "times new roman",
                      fontSize: 20,
                      marginLeft: 280,
                      marginRight: 20,
                    }}
                  >
                    <b>Home</b>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="page"
                    href="/history"
                    style={{
                      color: "black",
                      fontFamily: "times new roman",
                      fontSize: 20,
                      marginLeft: 50,
                      marginRight: 20,
                    }}
                  >
                    <b>History</b>
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="page"
                    // href="#"
                    style={{
                      color: "black",
                      fontFamily: "times new roman",
                      fontSize: 20,
                      marginLeft: 50,
                      marginRight: 20,
                    }}
                  >
                    <b>Locations</b>
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="page"
                    style={{
                      color: "black",
                      fontFamily: "times new roman",
                      fontSize: 20,
                      marginLeft: 50,
                      marginRight: 20,
                    }}
                  >
                    <b>About Us</b>
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="page"
                    href="/contactus"
                    style={{
                      color: "black",
                      fontFamily: "times new roman",
                      fontSize: 20,
                      marginLeft: 50,
                      marginRight: 20,
                    }}
                  >
                    <b>Contact Us</b>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="page"
                    href="/contactus"
                    style={{
                      color: "black",
                      fontFamily: "times new roman",
                      fontSize: 20,
                      marginLeft: 50,
                      marginRight: 20,
                    }}
                  >
                    <b>Terms & Conditions</b>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
