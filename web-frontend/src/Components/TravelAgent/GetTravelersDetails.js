import React, { useState, useEffect } from "react";
import TravelAgentNavbar from "../Layouts/TravelAgentNavbar";
import Button from "@material-ui/core/Button";
import axios from "axios";

export default function GetTravelersDetails() {
  const [travelerDetails, settravelerDetails] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [filteredTravelerDetails, setfilteredTravelerDetails] = useState([]); // State to store filtered reservations
  const [error, setError] = useState("");

  useEffect(() => {
    retrieveTravelers();
  }, []);

  const retrieveTravelers = () => {
    axios.get("https://localhost:7280/api/Traveler").then((res) => {
      if (res.status === 200) {
        settravelerDetails(res.data);
        setfilteredTravelerDetails(res.data); // Initialize filtered reservations with all reservations
      }
    });
  };

  const handleSearchArea = (e) => {
    const newSearchKey = e.target.value;
    setSearchKey(newSearchKey);

    // Filter reservations based on the search key (NIC)
    const filteredTravelerDetails = travelerDetails.filter((travelerDetails) =>
      travelerDetails.nic.includes(newSearchKey)
    );

    setfilteredTravelerDetails(filteredTravelerDetails); // Update filtered reservations
  };

  return (
    <div>
      <TravelAgentNavbar />
      <div>
        <div style={{ width: "90%", marginLeft: 90 }}>
          <br />
          <br />
          <div align="center">
            <h3
              style={{
                fontFamily: "times new roman",
                fontSize: "40px",
                marginTop: 40,
              }}
            >
              <b>TRAVELERS HISTORY</b>
            </h3>
            <br />

            <div className="col-md-3" style={{ marginRight: "1300px" }}>
              <input
                type="text"
                className="form-control"
                placeholder="Search NIC"
                onChange={handleSearchArea}
              />
              <br />
            </div>
            <div
              className="buttons"
              style={{
                position: "absolute",
                right: 0,
                margin: "-60px",
              }}
            >
              <Button
                variant="contained"
                style={{
                  background: "#006A4E",
                  flex: "1",
                  color: "#ffff",
                  marginRight: "150px",
                  borderRadius: 5,
                }}
                href="/travelerRegistration"
                disableElevation
                type="submit"
              >
                <b>Traveler Registration</b>
              </Button>
            </div>
            <table className="table">
              <thead>
                <tr bgcolor="#2B3856">
                  <th>
                    <font color="#fff">No</font>
                  </th>
                  <th>
                    <font color="#fff">Traveler NIC</font>
                  </th>
                  <th>
                    <font color="#fff">Traveler First Name</font>
                  </th>
                  <th>
                    <font color="#fff">Traveler Last Name</font>
                  </th>
                  <th>
                    <font color="#fff">Email</font>
                  </th>
                  <th>
                    <font color="#fff">Phone Number</font>
                  </th>
                  <th>
                    <font color="#fff">Status</font>
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredTravelerDetails.map((travelerDetails, index) => (
                  <tr key={travelerDetails.nic}>
                    <th scope="row">{index + 1}</th>
                    <td>{travelerDetails.nic}</td>
                    <td>{travelerDetails.firstName}</td>
                    <td>{travelerDetails.lastName}</td>
                    <td>{travelerDetails.email}</td>
                    <td>{travelerDetails.phone}</td>
                    <td
                      style={{
                        fontWeight: "bold",
                        color: travelerDetails.isActive ? "#004225" : "red",
                      }}
                    >
                      {travelerDetails.isActive ? "Active" : "Deactivated"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
