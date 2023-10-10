import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams from react-router-dom
import TravelAgentNavbar from "../Layouts/TravelAgentNavbar";
import Footer from "../Layouts/footer";
import axios from "axios";

export default function Profile() {
  const [travelAgent, setTravelAgent] = useState({});
  const { id } = useParams(); // Extract the ID from the URL

  useEffect(() => {
    // Define a function to retrieve the travel agent by ID
    const retrieveTravelAgent = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7280/api/TravelAgents/${id}`
        );
        if (response.status === 200) {
          setTravelAgent(response.data);
        } else {
          console.error("API request failed with status:", response.status);
        }
      } catch (error) {
        console.error("API request error:", error);
      }
    };

    // Call retrieveTravelAgent with the user ID
    retrieveTravelAgent();
  }, [id]); // Include id in the dependency array to trigger the effect when it changes

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
            style={{ width: 250, marginLeft: 60, marginTop: 0 }}
            alt="Travel Agent Avatar"
          />
          <h3
            style={{
              marginLeft: "70px",
              marginTop: -10,
            }}
          >
            <b>{travelAgent.FullName}</b>
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
                value={travelAgent.FullName || ""}
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
                className="form-control"
                value={travelAgent.Email || ""}
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
                className="form-control"
                value={travelAgent.Role || ""}
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
                className="form-control"
                value={travelAgent.NIC || ""}
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
                className="form-control"
                value={travelAgent.PhoneNumber || ""}
                readOnly
              />
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
