import React, { useEffect, useState } from "react";
import "./login.css";
import Navbar from "../../Home/Navbar/Navbar";
import { Link, useHistory } from "react-router-dom";
import {
  setLoginStatus,
  setUserRegister,
  getCompanyDetails,
  setUserDetails,
  getUserDetails,
  getUserRegister,
  setCompanyDetails,
} from "../../../data/Data";
import axios from "axios";

function Login() {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  const [isClientLogin, setIsClientLogin] = useState(true);
  const [loggedIN, setLoggedIn] = useState({ found: false });
  const history = useHistory();
  useEffect(() => {
    document.title = "Login ";
  }, [isClientLogin, loggedIN]);

  const handleFormSubmit = (event) => {
    console.log("isClientLogin : ", isClientLogin);
    axios
      .post(
        `http://localhost:5000/api/${
          isClientLogin ? "users" : "organisers"
          // "organisers"
        }/login`,
        info
      )
      .then(function (res) {
        console.log("response is : ", res.data.found);
        setLoggedIn(res.data);
      });
    // setUserRegister(isClientLogin);
    // setInfo({
    //   email: "",
    //   password: "",
    // });
    event.preventDefault();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => {
      return {
        ...prevInfo,
        [name]: value,
      };
    });
  };
  if (loggedIN.found === true) {
    console.log(loggedIN);
    setLoginStatus(true);
    setUserRegister(isClientLogin);
    !isClientLogin
      ? setCompanyDetails({ id: loggedIN.id })
      : setUserDetails({ id: loggedIN.id });
    console.log("UserId : ", getUserDetails());
    console.log("CompanyId : ", getCompanyDetails());
    history.push(
      `/${
        getUserRegister()
          ? `user/${getUserDetails()}`
          : `company/${getCompanyDetails()}`
      }`
    );
    return null;
  } else {
    if (loggedIN.found === "incorrect") {
      alert("Incorrect email or password");
      window.location.reload(false);
    }

    return (
      <div className="login__page">
        <div className="login_header">
          <Navbar />
          <div className="bgImage">
            <div className="wrapper">
              <div className="title">EventHub</div>

              <form action="#" onSubmit={handleFormSubmit}>
                <div className="login__page__selectButtons">
                  <button
                    style={{
                      backgroundColor: `${isClientLogin ? "#c850c0" : ""}`,
                      fontSize: `${isClientLogin ? "1.3rem" : ""}`,
                    }}
                    onClick={() => setIsClientLogin(true)}
                  >
                    Client
                  </button>
                  <button
                    style={{
                      backgroundColor: `${!isClientLogin ? "#c850c0" : ""}`,
                      fontSize: `${!isClientLogin ? "1.3rem" : ""}`,
                    }}
                    onClick={() => setIsClientLogin(false)}
                  >
                    Company
                  </button>
                </div>

                <div className="field">
                  <input
                    type="text"
                    required
                    name="email"
                    onChange={handleChange}
                  />
                  <label>Email Address</label>
                </div>
                <div className="field">
                  <input
                    type="password"
                    name="password"
                    required
                    onChange={handleChange}
                  />
                  <label>Password</label>
                </div>
                <div className="content">
                  <div className="checkbox">
                    <input type="checkbox" id="remember-me" />
                    <label for="remember-me">Remember me</label>
                  </div>
                  <div className="pass-link">
                    <Link to="/">Forgot password?</Link>
                  </div>
                </div>
                <div className="field">
                  <input type="submit" value="Login" />
                </div>
                <div className="signup-link">
                  <Link to="/user_registeration">Create User Account</Link>
                </div>
                <div className="signup-link">
                  <Link to="/company_registeration">
                    Create Company Account
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
