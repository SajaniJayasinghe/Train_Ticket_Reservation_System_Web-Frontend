import React from "react";
import Footer from "../Layouts/footer";
import NavBar from "../Layouts/NavBar";

export default function LandingPage() {
  return (
    <div>
      <NavBar />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <img
            className="card-img-top"
            src="https://res.cloudinary.com/nibmsa/image/upload/v1696772655/showcasing-new-transportation-company-social-media-post-spotlighting-dynamic-lines_916191-74389_nsojs0.jpg"
            style={{
              height: "400px",
              marginRight: 320,
              marginLeft: 250,
              objectFit: "cover",
            }}
            alt="Description of the image"
          />
        </div>
      </div>
      <div
        className="card"
        style={{
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 30,
          height: 50,
          marginTop: 20,
          backgroundColor: "#dae7f8",
        }}
      >
        <div className="card-body" style={{ textAlign: "left" }}>
          <p
            className="card-text"
            style={{ fontSize: "20px", marginTop: "-6px" }}
          >
            <b>Services </b>
          </p>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          className="card"
          style={{
            marginLeft: 20,
            marginTop: 20,
            marginRight: 20,
            marginBottom: 30,
            width: 350,
            height: 300,
            backgroundColor: "#dae7f8",
          }}
        >
          <img
            className="card-img-top"
            src="https://img.freepik.com/free-photo/steam-train-chugs-through-mountain-forest-scene-generative-ai_188544-8072.jpg?w=2000"
            alt="Senkadagala Menike train"
            style={{ height: "240px" }}
          />
          <div className="card-body" style={{ textAlign: "center" }}>
            <p className="card-text" style={{ fontSize: "20px" }}>
              <b>Senkadagala Menike</b>
            </p>
          </div>
        </div>
        <div
          className="card"
          style={{
            marginTop: 20,
            marginRight: 20,
            marginBottom: 30,
            width: 350,
            height: 300,
            backgroundColor: "#dae7f8",
          }}
        >
          <img
            className="card-img-top"
            src="https://www.metrorailnews.in/wp-content/uploads/2021/09/Railways-696x469.png"
            alt="Senkadagala Menike train"
            style={{ height: "240px" }}
          />
          <div className="card-body" style={{ textAlign: "center" }}>
            <p className="card-text" style={{ fontSize: "20px" }}>
              <b>Galu Kumari </b>
            </p>
          </div>
        </div>
        <div
          className="card"
          style={{
            marginTop: 20,
            marginRight: 20,
            marginBottom: 30,
            width: 350,
            height: 300,
            backgroundColor: "#dae7f8",
          }}
        >
          <img
            className="card-img-top"
            src="https://media.cnn.com/api/v1/images/stellar/prod/220824105619-01-hydrogen-powered-trains-coralia-ilint.jpg?c=16x9&q=h_720,w_1280,c_fill"
            alt="Senkadagala Menike train"
            style={{ height: "240px" }}
          />
          <div className="card-body" style={{ textAlign: "center" }}>
            <p className="card-text" style={{ fontSize: "20px" }}>
              <b>Sagarika </b>
            </p>
          </div>
        </div>

        <div
          className="card"
          style={{
            marginRight: 20,
            marginTop: 20,
            marginBottom: 30,
            width: 350,
            height: 300,
            backgroundColor: "#dae7f8",
          }}
        >
          <img
            className="card-img-top"
            src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhaW58ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            alt="Senkadagala Menike train"
            style={{ height: "240px" }}
          />
          <div className="card-body" style={{ textAlign: "center" }}>
            <p className="card-text" style={{ fontSize: "20px" }}>
              <b>Samudra Devi </b>
            </p>
          </div>
        </div>

        <div
          className="card"
          style={{
            marginRight: 20,
            marginTop: 20,
            marginBottom: 30,
            width: 350,
            height: 300,
            backgroundColor: "#dae7f8",
          }}
        >
          <img
            className="card-img-top"
            src="https://media.istockphoto.com/id/457433171/photo/red-high-speed-train-with-blurred-motion.jpg?s=612x612&w=0&k=20&c=dtaL6VyNhrKhM1-tQIE7OF3WcpVgc9SFEjFVmcOFFLM="
            alt="Senkadagala Menike train"
            style={{ height: "240px" }}
          />
          <div className="card-body" style={{ textAlign: "center" }}>
            <p className="card-text" style={{ fontSize: "20px" }}>
              <b>Ruhunu Kumari </b>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
