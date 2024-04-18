import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>User Profile Card</h2>

      <div style={{ textAlign: "center" }}>
      <img align="left" src={`${process.env.PUBLIC_URL}/assets/bg (1).jpg`} alt="Image-1 not found" />
        
      </div>

      <div className="allcards">
        <div className="card">
      <img align="left" src={`${process.env.PUBLIC_URL}/assets/man1.jpeg`} alt="Image-1 not found" />
          
          <h1>John Doe</h1>
          <p className="title">CEO & Founder, Example</p>
          <p>Harvard University</p>
          <div style={{ margin: "24px 0" }}>
            <a href="#"><i className="fa fa-dribbble"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-facebook"></i></a>
          </div>
          <p><button>Contact</button></p>
        </div>

        <div className="card">
      <img align="left" src={`${process.env.PUBLIC_URL}/assets/Girl2.jpeg`} alt="Image-1 not found" />
          
          <h1>John Doe</h1>
          <p className="title">CEO & Founder, Example</p>
          <p>Harvard University</p>
          <div style={{ margin: "24px 0" }}>
            <a href="#"><i className="fa fa-dribbble"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-facebook"></i></a>
          </div>
          <p><button>Contact</button></p>
        </div>

        <div className="card">
      <img align="left" src={`${process.env.PUBLIC_URL}/assets/Girl2.jpeg`} alt="Image-1 not found" />
          
          <h1>John Doe</h1>
          <p className="title">CEO & Founder, Example</p>
          <p>Harvard University</p>
          <div style={{ margin: "24px 0" }}>
            <a href="#"><i className="fa fa-dribbble"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-facebook"></i></a>
          </div>
         <Link to='/desc'><button>Contact</button></Link>
        </div>
      </div>
    </>
  );
};

export default Profile;
