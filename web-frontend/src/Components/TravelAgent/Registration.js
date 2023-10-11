import React, { useState } from "react";
import axios from "axios";
import Footer from "../Layouts/footer";
import NavBar from "../Layouts/NavBar";
import Button from "@material-ui/core/Button";

export default function Registration() {
  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [NIC, setNIC] = useState("");
  const [PasswordHash, setPasswordHash] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(""); // State for error messages

  const resetForm = () => {
    setFullName("");
    setEmail("");
    setConfirmPassword("");
    setPasswordHash("");
    setNIC("");
    setPhoneNumber("");
    setError(""); // Clear any previous error messages
  };

  const sendData = async (e) => {
    e.preventDefault();

    // Reset previous error messages
    setError("");

    if (PasswordHash !== ConfirmPassword) {
      setError("Passwords do not match");
      return;
    }

    let travelAgents = {
      FullName: FullName,
      Email: Email,
      PasswordHash: PasswordHash,
      NIC: NIC,
      PhoneNumber: PhoneNumber,
      ConfirmPassword: ConfirmPassword,
      role: "Travel Agent",
    };

    axios
      .post("https://localhost:7280/api/TravelAgents", travelAgents)
      .then(() => {
        alert("Registration Success");
        window.location.href = "/signin";
      })
      .catch((err) => {
        setError("Registration failed. Please try again.");
      });

    resetForm();
  };

  return (
    <div>
      <NavBar />
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
                    <h3 style={{ marginLeft: "60px", marginTop: -20 }}>
                      <b>TRAVEL AGENT&nbsp;&nbsp;REGISTRATION</b>
                    </h3>
                    <br />
                    <br />
                    <img
                      src="https://eticket.railway.gov.bd/v2/assets/img/home/search.svg"
                      style={{ width: 390, marginLeft: 60, marginTop: -20 }}
                    />
                  </div>

                  <div className="col-xl-5">
                    <div
                      className="form-outline mb-2"
                      style={{ marginTop: 30 }}
                    >
                      <br />
                      <span id="passwordHelpInline" className="form-text">
                        <i className="fa fa-user"></i>&nbsp;&nbsp;&nbsp;Full
                        Name
                      </span>
                      <div className="col-md-10">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your Full name"
                          required
                          value={FullName}
                          onChange={(e) => setFullName(e.target.value)}
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
                          required
                          value={PhoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
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
                          required
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
                    {error && (
                      <div className="alert alert-danger" role="alert">
                        {error}
                      </div>
                    )}
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
                          <i className="fa fa-check-circle"></i>&nbsp; SIGN UP
                        </Button>
                      </div>
                      <div className="col-md">
                        <Button
                          type="button"
                          onClick={resetForm}
                          style={{
                            marginLeft: "-30px",
                            background: "#368BC1",
                            width: "80%",
                            height: "auto",
                            color: "BLACK",
                            borderRadius: 20,
                            marginTop: "20px",
                          }}
                        >
                          <i className="fa fa-times-circle"></i>&nbsp; CANCEL
                        </Button>
                      </div>
                    </div>
                    <div className="d-flex justify-left pt-1">
                      <span
                        id="passwordHelpInline"
                        className="form-text"
                        style={{ marginBottom: "2px", marginTop: "10px" }}
                      >
                        Already Registered? &nbsp;&nbsp;
                      </span>
                      <a
                        style={{ marginBottom: "2px", marginTop: "6px" }}
                        href="/signin"
                      >
                        Sign In
                      </a>{" "}
                    </div>
                    <br />
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
