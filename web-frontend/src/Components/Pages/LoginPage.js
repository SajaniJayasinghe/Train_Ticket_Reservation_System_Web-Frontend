import React, { useState } from "react";
import Footer from "../Layouts/footer";
import NavBar from "../Layouts/NavBar";
import Button from "@material-ui/core/Button";
import axios from "axios";

export default function LoginPage() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Role, setRole] = useState(null);
  const [error, setError] = useState(""); // State for error messages

  // Function to reset the form data
  const resetForm = () => {
    setEmail("");
    setPassword("");
    setError(""); // Clear any previous error messages
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Reset previous error messages
    setError("");

    // Create an object with login credentials
    const loginData = {
      Email,
      Password,
    };

    try {
      const response = await axios.post(
        "https://localhost:7280/api/TravelAgents/login",
        loginData
      );
      console.log(response.data.role);

      if (response.status === 200) {
        // Login successful
        alert("Login Success");
        if (response.data.role === "Back Officer") {
          window.location.href = "/backofficerhome";
        }
        if (response.data.role === "Travel Agent") {
          window.location.href = "/travelAgentHome";
        }
      } else {
        // Handle login error, show a message to the user
        setError("Login failed. Please check your credentials.");
      }
    } catch (error) {
      // Handle any errors from the POST request
      console.error("Login error:", error);
      setError("Password or Email is incorrect.");
    }
  };

  return (
    <div>
      <NavBar />
      <div>
        <div className="row d-flex align-items-center justify-content-center">
          <div
            style={{
              width: 800,
              background: "#E8F2FF",
              height: 500,
              marginTop: 80,
              borderRadius: "20px",
            }}
          >
            <div className="card-body">
              <div className="container py-5 h-90">
                <h2>
                  <b style={{ marginLeft: "450px" }}>USER LOGIN</b>
                </h2>
                <div className="row d-flex align-items-center justify-content-center h-100">
                  <div className="col-md-8 col-lg-7 col-xl-6">
                    <img
                      src="https://res.cloudinary.com/nibmsa/image/upload/v1696782091/360_F_596964163_z9Nusp6ntu936haGJwuq3dEmUVkr9pAh-removebg-preview_phocbq.png"
                      className="img-fluid"
                      alt="Phone image"
                      style={{
                        height: "350px",
                        width: "550px",
                        marginLeft: "10px",
                        marginTop: -50,
                      }}
                    />
                    <br />
                    <br />
                  </div>
                  <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                    {Role ? (
                      // Redirect to relevant user homepage based on the role
                      Role === "Back Officer" ? (
                        (window.location.href = "/backofficerhome")
                      ) : (
                        (window.location.href = "/travelagenthomepage")
                      )
                    ) : (
                      // Render the login form if not logged in
                      <form name="form" onSubmit={handleLogin}>
                        <div className="form-outline mb-4">
                          <div className="col-md">
                            <span
                              id="passwordHelpInline"
                              className="form-text"
                              style={{ marginBottom: "2px" }}
                            >
                              <i className="fa fa-lock"> &nbsp;&nbsp;</i> USER
                              EMAIL ADDRESS{" "}
                            </span>
                            <input
                              type="text"
                              name="email"
                              placeholder="Enter Your Email"
                              className="form-control"
                              required
                              value={Email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="form-outline mb-4">
                          <div className="col-md">
                            <span
                              id="passwordHelpInline"
                              className="form-text"
                              style={{ marginBottom: "2px" }}
                            >
                              <i className="fa fa-key"> &nbsp;&nbsp;</i>{" "}
                              PASSWORD
                            </span>
                            <input
                              type="password"
                              name="password"
                              className="form-control"
                              placeholder="Enter Your Password"
                              value={Password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                        </div>
                        {error && ( // Display error message if there's an error
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
                                width: "100%",
                                height: "auto",
                                color: "BLACK",
                                borderRadius: 20,
                                marginTop: "10px",
                              }}
                            >
                              <i className="fa fa-check-circle"></i>&nbsp; SIGN
                              IN
                            </Button>
                          </div>
                          <div className="col-md">
                            <Button
                              type="button"
                              onClick={resetForm} // Call resetForm to clear the form data
                              style={{
                                background: "#368BC1",
                                width: "100%",
                                height: "auto",
                                color: "BLACK",
                                borderRadius: 20,
                                marginTop: "10px",
                              }}
                            >
                              <i className="fa fa-times-circle"></i>&nbsp;
                              CANCEL
                            </Button>
                          </div>
                        </div>
                        <div className="divider d-flex align-items-center my-4">
                          <span
                            id="passwordHelpInline"
                            className="form-text"
                            style={{ marginBottom: "2px" }}
                          >
                            <center>
                              <label>Don't have an account? &nbsp;&nbsp;</label>
                              <a href="/signup">Sign Up</a>
                            </center>
                          </span>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </div>
  );
}
