import React, { useState } from "react";
import "./login1.css";
import axios from "axios";
export const Register = () => {
  const [user, setUser] = useState();
  const [pass, setPass] = useState();
  const [email, setEmail] = useState();
  const [popUp, setPopup] = useState(false);
  let handleSignup = () => {
    axios.post("http://localhost:8000/user", {
      username: user,
      password: pass,
      email: email,
    });

    setPopup(true);
    setTimeout(() => {
      setPopup(false);
    }, 5000);
  };

  return (
    <div className="sign-cont">
      {popUp && (
        <div
          className="bg-success"
          style={{
            left: 100,
            padding: 25,
            color: "white",
            borderRadius: 20,
            position: "absolute",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "row-reverse", gap: 40 }}
          >
            <h5 onClick={() => setPopup(false)} style={{ cursor: "pointer" }}>
              X
            </h5>
            <h5>Successfully Registered</h5>
          </div>
        </div>
      )}
      <form action="#" className="form-si" onSubmit={handleSignup}>
        <h1 className="form-title-si">Sign up Form</h1>
        <div className="firstbtn-si">
          <div className="btn1-si">
            <button class="button1-si"></button>
          </div>
          <div className="btn2-si">
            <button className="button2-si"></button>
          </div>
        </div>
        <div className="form-group-si">
          <input
            type="text"
            className="form-control-si"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group-si">
          <input
            type="text"
            class="form-control-si"
            placeholder="Username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
          />
        </div>
        <div class="form-group-si">
          <input
            type="password"
            className="form-control-si"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />
        </div>
        <br />
        <div className="bottom-box-si">
          <br />
          <br />
          <br />
          <a href="#" className="contain-si">
            Forgotpassword{" "}
          </a>
          <br />
          <button className="button-30-si" type="submit" role="button">
            Signup
          </button>
        </div>
        <br />
        <div class="container-si">
          <p>
            Already have an Account <a href="/login">Login</a>
          </p>
        </div>
      </form>
    </div>
  );
};
