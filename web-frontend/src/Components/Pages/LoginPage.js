import React from "react";
import Footer from "../Layouts/footer";
import NavBar from "../Layouts/NavBar";

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
                <div className="row d-flex align-items-center justify-content-center h-100">
                  <h2>
                    <u>
                      <b style={{ marginLeft: "450px" }}>
                        USER&nbsp;&nbsp;LOGIN
                      </b>
                    </u>
                  </h2>
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
