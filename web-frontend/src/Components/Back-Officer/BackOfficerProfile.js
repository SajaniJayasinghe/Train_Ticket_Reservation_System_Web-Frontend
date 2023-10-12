import React, { useState, useEffect } from "react";
import UserNavBar from "../Layouts/UserNavBar";
import Footer from "../Layouts/footer";
import axios from "axios";
import Button from "@material-ui/core/Button";

export default function BackOfficerProfile() {
  // Function to handle the "Logout" button click
  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (confirmed) {
      window.location.href = "/signin"; // Replace with the appropriate redirection path
    }
  };

  return (
    <div>
      <UserNavBar />
      <div className="row d-flex align-items-center justify-content-center">
        <div
          style={{
            width: 700,
            background: "#DCEAFB",
            height: 550,
            marginTop: 60,
            borderRadius: "20px",
          }}
        >
          <img
            src="https://res.cloudinary.com/nibmsa/image/upload/v1696965037/1-removebg-preview_lac2ec.png"
            style={{ width: 250, marginLeft: 60, marginTop: 80 }}
            alt="Travel Agent Avatar"
          />
          <h3
            style={{
              marginLeft: "60px",
              marginTop: -10,
            }}
          >
            <b>Nimna Thiranjaya</b>
          </h3>
          <div
            className="col-xl-5"
            style={{
              float: "right",
              marginRight: 60,
              marginTop: -300,
            }}
          >
            <div className="form-outline mb-2">
              <label className="form-label" htmlFor="formFullName">
                <b>Full Name</b>
              </label>
              <input
                type="text"
                id="formFullName"
                value="Nimna Thiranjaya"
                className="form-control"
                readOnly
              />
            </div>
            <div className="form-outline mb-2">
              <label className="form-label" htmlFor="formEmail">
                <b>Email</b>
              </label>
              <input
                type="text"
                id="formEmail"
                value="nimnathiranjaya@gmail.com"
                className="form-control"
                readOnly
              />
            </div>
            <div className="form-outline mb-2">
              <label className="form-label" htmlFor="formRole">
                <b>Role</b>
              </label>
              <input
                type="text"
                id="formRole"
                value="Back Officer"
                className="form-control"
                readOnly
              />
            </div>
            <div className="form-outline mb-2">
              <label className="form-label" htmlFor="formNIC">
                <b>NIC</b>
              </label>
              <input
                type="text"
                id="formNIC"
                value="2001122333"
                className="form-control"
                readOnly
              />
            </div>
            <div className="form-outline mb-2">
              <label className="form-label" htmlFor="formPhoneNumber">
                <b>Phone Number</b>
              </label>
              <input
                type="text"
                id="formPhoneNumber"
                value="072112331"
                className="form-control"
                readOnly
              />
            </div>
            <div className="row">
              <div className="col-md">
                <Button
                  type="button"
                  onClick={handleLogout}
                  style={{
                    background: "#151B54",
                    width: "100%",
                    height: "auto",
                    color: "white",
                    borderRadius: 20,
                    marginTop: "10px",
                  }}
                >
                  <i className="fa fa-times-circle"></i>&nbsp; Logout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /> <br />
      <br />
      <Footer />
    </div>
  );
}
