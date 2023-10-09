import React from "react";
import Footer from "../Layouts/footer";
import NavBar from "../Layouts/NavBar";
import Button from "@material-ui/core/Button";

export default function LoginPage() {
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
                        marginTop: -10,
                      }}
                    />
                    <br />
                    <br />
                  </div>
                  <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                    <form name="form">
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
                            className="form-control "
                            required
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
                            <i className="fa fa-key"> &nbsp;&nbsp;</i> PASSWORD
                          </span>
                          <input
                            type="password"
                            name="password"
                            className="form-control "
                            placeholder="Enter Your Password"
                          />
                        </div>
                      </div>
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
                            <i className="fa fa-check-circle"></i>&nbsp; SIGN IN
                          </Button>
                        </div>
                        <div className="col-md">
                          <Button
                            type="submit"
                            style={{
                              background: "#368BC1",
                              width: "100%",
                              height: "auto",
                              color: "BLACK",
                              borderRadius: 20,
                              marginTop: "10px",
                            }}
                          >
                            <i className="fa fa-times-circle"></i>&nbsp; CANCEL
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
