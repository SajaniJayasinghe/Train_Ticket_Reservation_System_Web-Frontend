import React, { useState, useEffect } from "react";
import TravelAgentNavbar from "../Layouts/TravelAgentNavbar";
import Footer from "../Layouts/footer";
import axios from "axios";
import Button from "@material-ui/core/Button";

export default function Profile() {
  const [error, setError] = useState(""); // State for error messages

  // Function to handle the "Deactivate" button click
  const handleDeactivate = async (agentId) => {
    const confirmed = window.confirm(
      "Are you sure you want to permanently deactivate your account?"
    );
    if (confirmed) {
      try {
        // Make a DELETE request to the server to delete the account
        const response = await axios.delete(
          `https://localhost:7280/api/TravelAgents/${agentId}`
        );

        if (response.status === 200) {
          alert("Account deactivated successfully.");
          // Redirect to the sign-in page or perform other desired actions
        } else {
          console.error(
            "Deactivation request failed with status:",
            response.status
          );
        }
      } catch (error) {
        console.error("Deactivation request error:", error);
      }
    }
  };

  // Function to handle the "Logout" button click
  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (confirmed) {
      window.location.href = "/signin"; // Replace with the appropriate redirection path
    }
  };

  return (
    <div>
      <TravelAgentNavbar />
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
              marginLeft: "70px",
              marginTop: -10,
            }}
          >
            <b></b>
          </h3>
          <div
            className="col-xl-5"
            style={{
              float: "right",
              marginRight: 60,
              marginTop: -250,
            }}
          >
            <div className="form-outline mb-2">
              <label className="form-label" htmlFor="formFullName">
                <b>Full Name</b>
              </label>
              <input
                type="text"
                id="formFullName"
                className="form-control"
                value="Aroshini Amasha"
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
                value="aroshini@gmail.com"
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
                value="Travel Agent"
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
                value="987654321V"
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
                value="0712345678"
                className="form-control"
                readOnly
              />
            </div>
            <div className="row">
              <div className="col-md">
                <Button
                  type="submit"
                  onClick={handleDeactivate}
                  style={{
                    background: "#931314",
                    width: "120%",
                    height: "auto",
                    color: "white",
                    borderRadius: 20,
                    marginLeft: "-10px",
                    marginTop: "10px",
                  }}
                >
                  <i className="fa fa-check-circle"></i>&nbsp; Deactivate
                </Button>
              </div>
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
