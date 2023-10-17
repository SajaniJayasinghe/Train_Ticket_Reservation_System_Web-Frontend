import React, { useState, useEffect } from "react";
import TravelAgentNavbar from "../Layouts/TravelAgentNavbar";
import Button from "@material-ui/core/Button";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../Layouts/footer";

export default function UpdateTravelers() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [NIC, setNIC] = useState("");
  const [Phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [PasswordHash, setPasswordHash] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const params = useParams();
  const travelerID = params.travelerID;

  useEffect(() => {
    axios
      .get(`https://localhost:7280/api/Traveler/${travelerID}`)
      .then((res) => {
        if (res.status === 200) {
          const travelerData = res.data;
          setFirstName(travelerData.firstName);
          setLastName(travelerData.lastName);
          setEmail(travelerData.email);
          setNIC(travelerData.nic);
          setPhone(travelerData.phone);
          setPasswordHash(travelerData.passwordHash);
          setConfirmPassword(travelerData.confirmPassword);
        } else {
          console.error("Error retrieving traveler data", res);
        }
      })
      .catch((error) => {
        console.error("Error retrieving traveler data", error);
      });
  }, [travelerID]);

  const sendData = async (e) => {
    e.preventDefault();
    setError(""); // Reset the error message

    if (!validateNIC(NIC)) {
      setError("Invalid NIC format. Please enter a valid NIC.");
      return;
    }

    if (!validatePhone(Phone)) {
      setError(
        "Invalid phone number format. Please enter a valid phone number."
      );
      return;
    }

    const updatedTraveler = {
      FirstName: FirstName,
      LastName: LastName,
      Email: Email,
      PasswordHash: PasswordHash,
      NIC: NIC,
      Phone: Phone,
      ConfirmPassword: ConfirmPassword,
    };

    axios
      .put(`https://localhost:7280/api/Traveler/${travelerID}`, updatedTraveler)
      .then((res) => {
        console.log("Response status:", res.status);
        if (res.status === 200) {
          setIsSuccess(true);
        } else {
          setError("Update failed. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Update failed with error:", error);
        setError("Update failed. Please try again.");
      });
  };
  const validateNIC = (nic) => {
    return nic.length === 10;
  };

  const validatePhone = (phone) => {
    return phone.match(/^\d{10}$/);
  };

  return (
    <div>
      <TravelAgentNavbar />
      <div>
        <div className="row d-flex align-items-center justify-content-center">
          <div
            style={{
              width: 1000,
              background: "#DCEAFB",
              height: 650,
              marginTop: 60,
              borderRadius: "20px",
            }}
          >
            <div className="card-body">
              <form action="" method="post" name="form" onSubmit={sendData}>
                <div className="row g-0">
                  <div className="col-xl-7 d-none d-xl-block">
                    <br />
                    <br />
                    <h3
                      style={{
                        marginLeft: "130px",
                        marginTop: -10,
                        marginLeft: 40,
                      }}
                    >
                      <b>TRAVELER &nbsp;&nbsp;ACCOUNT CREATION</b>
                    </h3>
                    <br />
                    <br />
                    <img
                      src="https://res.cloudinary.com/nibmsa/image/upload/v1696960725/wb1x0y-removebg-preview_emevtn.png"
                      style={{ width: 550, marginLeft: 10, marginTop: -60 }}
                    />
                  </div>

                  <div className="col-xl-5">
                    <div className="form-outline mb-2">
                      <br />
                      <span id="passwordHelpInline" className="form-text">
                        <i className="fa fa-user"></i>&nbsp;&nbsp;&nbsp;First
                        Name
                      </span>
                      <div className="col-md-10">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your First name"
                          required
                          value={FirstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-outline mb-2">
                      <span
                        id="passwordHelpInline"
                        className="form-text"
                        style={{ marginBottom: "2px" }}
                      >
                        <i className="fa fa-user"></i>
                        &nbsp;&nbsp;&nbsp;Last Name
                      </span>
                      <div className="col-md-10">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your Last Name"
                          required
                          value={LastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-outline mb-2">
                      <span
                        id="passwordHelpInline"
                        className="form-text"
                        style={{ marginBottom: "2px" }}
                      >
                        <i className="fa fa-envelope"></i>
                        &nbsp;&nbsp;&nbsp;Email Address
                      </span>
                      <div className="col-md-10">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter your E-mail address"
                          required
                          value={Email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-outline mb-2">
                      <span
                        id="passwordHelpInline"
                        className="form-text"
                        style={{ marginBottom: "2px" }}
                      >
                        <i className="fa fa-address-card"></i>
                        &nbsp;&nbsp;&nbsp;NIC
                      </span>
                      <div className="col-md-10">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your NIC number"
                          required
                          value={NIC}
                          onChange={(e) => setNIC(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-outline mb-2">
                      <span
                        id="passwordHelpInline"
                        className="form-text"
                        style={{ marginBottom: "2px" }}
                      >
                        <i className="fa fa-phone"></i>&nbsp;&nbsp;&nbsp;Phone
                        Number
                      </span>
                      <div className="col-md-10">
                        <input
                          type="text"
                          className="form-control"
                          pattern="[0-9]{10}"
                          placeholder="Enter your phone number"
                          value={Phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-outline mb-2">
                      <span
                        id="passwordHelpInline"
                        className="form-text"
                        style={{ marginBottom: "2px" }}
                      >
                        <i className="fa fa-key" aria-hidden="true"></i>
                        &nbsp;&nbsp;&nbsp;Password
                      </span>
                      <div className="col-md-10">
                        <input
                          type="password"
                          placeholder="Enter your password"
                          className="form-control"
                          data-toggle="tooltip"
                          data-placement="center"
                          value={PasswordHash}
                          onChange={(e) => setPasswordHash(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-outline mb-2">
                      <span
                        id="passwordHelpInline"
                        className="form-text"
                        style={{ marginBottom: "2px" }}
                      >
                        <i className="fa fa-unlock-alt"></i>
                        &nbsp;&nbsp;&nbsp;Confirm Password
                      </span>
                      <div className="col-md-10">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Enter your confirm password"
                          value={ConfirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md">
                        <Button
                          type="submit"
                          style={{
                            background: "#8BC0FF",
                            width: "80%",
                            height: "auto",
                            color: "BLACK",
                            borderRadius: 20,
                            marginTop: "20px",
                          }}
                        >
                          <i className="fa fa-check-circle"></i>&nbsp; UPDATE
                        </Button>
                      </div>
                    </div>
                    <br />
                    {/* {error && (
                      <div className="alert alert-danger" role="alert">
                        {error}
                      </div>
                    )}
                    {isSuccess && (
                      // Display success message and redirect
                      <div className="alert alert-success" role="alert">
                        Update successful.
                      </div>
                    )} */}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
