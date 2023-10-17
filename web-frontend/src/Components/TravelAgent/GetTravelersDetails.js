import React, { useState, useEffect } from "react";
import TravelAgentNavbar from "../Layouts/TravelAgentNavbar";
import Button from "@material-ui/core/Button";
import axios from "axios";

export default function GetTravelersDetails() {
  const [travelerDetails, setTravelerDetails] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [filteredTravelerDetails, setFilteredTravelerDetails] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    retrieveTravelers();
  }, []);

  const retrieveTravelers = () => {
    axios.get("https://localhost:7280/api/Traveler").then((res) => {
      if (res.status === 200) {
        setTravelerDetails(res.data);
        setFilteredTravelerDetails(res.data);
      }
    });
  };

  const handleSearchArea = (e) => {
    const newSearchKey = e.target.value;
    setSearchKey(newSearchKey);

    const filteredTravelerDetails = travelerDetails.filter((traveler) =>
      traveler.nic.includes(newSearchKey)
    );

    setFilteredTravelerDetails(filteredTravelerDetails);
  };

  const handleDelete = (nic) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      axios
        .delete(`https://localhost:7280/api/Traveler/${nic}`)
        .then((res) => {
          if (res.status === 200) {
            retrieveTravelers(); // Refresh the traveler list after deletion
          } else {
            setError("Deletion failed. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Deletion failed with error:", error);
          setError("Deletion failed. Please try again.");
        });
    }
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
                  <th>
                    <font color="#fff">Edit</font>
                  </th>
                  <th>
                    <font color="#fff">Delete</font>
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredTravelerDetails.map((traveler, index) => (
                  <tr key={traveler.nic}>
                    <th scope="row">{index + 1}</th>
                    <td>{traveler.nic}</td>
                    <td>{traveler.firstName}</td>
                    <td>{traveler.lastName}</td>
                    <td>{traveler.email}</td>
                    <td>{traveler.phone}</td>
                    <td
                      style={{
                        fontWeight: "bold",
                        color: traveler.isActive ? "#004225" : "red",
                      }}
                    >
                      {traveler.isActive ? "Active" : "Deactivated"}
                    </td>
                    <td>
                      <Button
                        style={{
                          background: traveler.isActive ? "#004225" : "#CECECE",
                          flex: "1",
                          color: "#ffff",
                          marginRight: "10px",
                          borderRadius: 5,
                        }}
                        href={`/Traveler/${traveler.nic}`}
                        disabled={!traveler.isActive} // Disable if isActive is false
                      >
                        Edit
                      </Button>
                    </td>
                    <td>
                      <Button
                        style={{
                          background: "#B21807",
                          flex: "1",
                          color: "#ffff",
                          marginRight: "10px",
                          borderRadius: 5,
                        }}
                        onClick={() => handleDelete(traveler.nic)}
                      >
                        Delete
                      </Button>
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
