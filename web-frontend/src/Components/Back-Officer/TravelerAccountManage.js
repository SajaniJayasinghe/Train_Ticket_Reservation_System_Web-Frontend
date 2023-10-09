import React, { useState, useEffect } from "react";
import UserNavBar from "../Layouts/UserNavBar";
import Button from "@material-ui/core/Button";
import axios from "axios";

export default function TravelerAccountManage() {
  const [travelers, setTravelers] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    retrieveTravelers();
  }, []);

  const retrieveTravelers = () => {
    axios.get("https://localhost:7280/api/Traveler").then((res) => {
      if (res.status === 200) {
        setTravelers(res.data);
      }
    });
  };

  const handleSearchArea = (e) => {
    const newSearchKey = e.target.value;
    setSearchKey(newSearchKey);

    // Filter travelers based on the search key (NIC)
    const filteredTravelers = travelers.filter((traveler) =>
      traveler.nic.includes(newSearchKey)
    );

    setTravelers(filteredTravelers);
  };

  const handleActivate = (nic) => {
    axios
      .post(`https://localhost:7280/api/Traveler/activate/${nic}`)
      .then((res) => {
        if (res.status === 200) {
          retrieveTravelers(); // Refresh the traveler list after activation
        }
      });
  };

  const handleDeactivate = (nic) => {
    axios
      .post(`https://localhost:7280/api/Traveler/deactivate/${nic}`)
      .then((res) => {
        if (res.status === 200) {
          retrieveTravelers(); // Refresh the traveler list after deactivation
        }
      });
  };

  return (
    <div>
      <UserNavBar />
      <div>
        <div style={{ width: "90%", marginLeft: 90 }}>
          <br />
          <br />
          <div align="center">
            <h3
              style={{
                fontFamily: "times new roman",
                fontSize: "40px",
                marginTop: 30,
              }}
            >
              <b>TRAVELERS ACCOUNT MANAGEMENT</b>
            </h3>
            <br />
            <div
              className="col-md-3"
              style={{ marginRight: "1300px", marginTop: "40px" }}
            >
              <input
                type="text"
                className="form-control"
                placeholder="Search Traveler NIC"
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
                    <font color="#fff">Full Name</font>
                  </th>
                  <th>
                    <font color="#fff">Email Address</font>
                  </th>
                  <th>
                    <font color="#fff">NIC</font>
                  </th>
                  <th>
                    <font color="#fff">Phone Number</font>
                  </th>
                  <th>
                    <font color="#fff">Account Status</font>
                  </th>
                  <th>
                    <font color="#fff">Account Action</font>
                  </th>
                </tr>
              </thead>
              <tbody>
                {travelers.map((traveler, index) => (
                  <tr key={traveler.nic}>
                    <td>{index + 1}</td>
                    <td>{traveler.fullName}</td>
                    <td>{traveler.email}</td>
                    <td>{traveler.nic}</td>
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
                      {traveler.isActive ? (
                        <Button
                          style={{
                            background: "#B21807",
                            flex: "1",
                            color: "#ffff",
                            marginRight: "10px",
                            borderRadius: 5,
                          }}
                          onClick={() => handleDeactivate(traveler.nic)}
                        >
                          Deactivate
                        </Button>
                      ) : (
                        <Button
                          style={{
                            background: "#004225",
                            flex: "1",
                            color: "#ffff",
                            marginRight: "10px",
                            borderRadius: 5,
                          }}
                          onClick={() => handleActivate(traveler.nic)}
                        >
                          Activate
                        </Button>
                      )}
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
