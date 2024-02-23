import React, { useContext, useState } from "react";
import loginimg from "../../images/login-img.jpg";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Signup.css";
import URI from '../../URI'

export default function Signup() {
  const navigate = useNavigate();

  const [registerData, setregisterData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  function handleInput(event) {
    const { name, value } = event.target;
    setregisterData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  const { setAuthUser, isLoggedIn, setisLoggedIn } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(URI+"auth/register", {
      method: "POST",
      body: JSON.stringify(registerData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();

    if (!res.ok) {
      console.error();
    } else {
      setisLoggedIn(true);
      setAuthUser(result);
      setregisterData({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      });
    }
  };

  setTimeout(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, 100);

  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <div className="imgcol">
          <img src={loginimg} alt="login img" className="login-img" />
        </div>
        <div className="formContainer">
          <form className="form" onSubmit={handleSubmit}>
            <p className="form-title">Sign up to your account</p>
            <div className="input-container">
              <input
                type="text"
                className="signupItem"
                id="signupFirstname"
                name="firstname"
                value={registerData.firstname}
                onChange={handleInput}
                placeholder="Firstname"
                required
              />
              <span>
                <svg
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    stroke-width="2"
                    strokeLinejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="input-container">
              <input
                type="text"
                className="signupItem"
                id="signupLastname"
                name="lastname"
                value={registerData.lastname}
                onChange={handleInput}
                placeholder="Lastname"
                required
              />
              <span>
                <svg
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    stroke-width="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="input-container">
              <input
                type="email"
                className="signupItem"
                id="signupEmail"
                name="email"
                placeholder="Email"
                value={registerData.email}
                onChange={handleInput}
                required
              />
              <span>
                <svg
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    stroke-width="2"
                    stroke-linejoin="round"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="input-container">
              <input
                type="password"
                className="signupItem"
                id="signupPass"
                name="password"
                value={registerData.password}
                placeholder="Password"
                onChange={handleInput}
                required
              />

              <span>
                <svg
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    stroke-width="2"
                    strokeLinejoin="round"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    stroke-width="2"
                    stroke-linejoin="round"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </span>
            </div>
            <button className="submit" type="submit">
              SIGN UP
            </button>

            <p className="signup-link">
              Have a account?
              <Link to={"/login"}>Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
