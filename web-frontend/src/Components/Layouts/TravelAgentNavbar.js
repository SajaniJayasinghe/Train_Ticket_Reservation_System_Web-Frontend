import React from "react";
import { Link } from "react-router-dom";

function TravelAgentNavbar() {
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-end">
              <li className="nav-item">
                <Link
                  to="/travelAgentHome"
                  className="nav-link"
                  aria-current="page"
                  style={{
                    color: "black",
                    fontFamily: "times new roman",
                    fontSize: 20,
                    marginLeft: 250,
                    marginRight: 20,
                  }}
                >
                  <b>Home</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/history"
                  className="nav-link"
                  aria-current="page"
                  style={{
                    color: "black",
                    fontFamily: "times new roman",
                    fontSize: 20,
                    marginLeft: 30,
                    marginRight: 20,
                  }}
                >
                  <b>History</b>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="https://www.google.com/maps/search/railway+stations/@6.8785457,79.8465832,12z/data=!3m1!4b1?entry=ttu"
                  className="nav-link"
                  aria-current="page"
                  style={{
                    color: "black",
                    fontFamily: "times new roman",
                    fontSize: 20,
                    marginLeft: 30,
                    marginRight: 20,
                  }}
                >
                  <b>Locations</b>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="#"
                  className="nav-link"
                  aria-current="page"
                  style={{
                    color: "black",
                    fontFamily: "times new roman",
                    fontSize: 20,
                    marginLeft: 30,
                    marginRight: 20,
                  }}
                >
                  <b>About Us</b>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/contactus"
                  className="nav-link"
                  aria-current="page"
                  style={{
                    color: "black",
                    fontFamily: "times new roman",
                    fontSize: 20,
                    marginLeft: 30,
                    marginRight: 20,
                  }}
                >
                  <b>Contact Us</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/termsconditions"
                  className="nav-link"
                  aria-current="page"
                  style={{
                    color: "black",
                    fontFamily: "times new roman",
                    fontSize: 20,
                    marginLeft: 30,
                    marginRight: 20,
                  }}
                >
                  <b>Terms & Conditions</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/profile"
                  className="nav-link"
                  aria-current="page"
                  style={{
                    color: "black",
                    fontFamily: "times new roman",
                    fontSize: 20,
                    marginLeft: 30,
                    marginRight: 20,
                  }}
                >
                  <b>Profile</b>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default TravelAgentNavbar;
