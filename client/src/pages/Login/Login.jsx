import React, { useContext, useState } from "react";
import loginimg from "../../images/login-img.jpg";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Login.css";
import URI from '../../URI'

export default function Login() {
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });

  const { AuthUser, setAuthUser, isLoggedIn, setisLoggedIn } =
    useContext(AuthContext);

  const navigate = useNavigate();

  function handleInput(event) {
    const { name, value } = event.target;
    setloginData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(loginData);
    const res = await fetch(URI+"auth/login", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(loginData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();

    if (!res.ok) {
      setisLoggedIn(false);
      console.error();
    } else {
      setAuthUser(result);
      setisLoggedIn(true);
      setloginData({
        email: "",
        password: "",
      });
    }
  };
  console.log(AuthUser);
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
            <p className="form-title">Sign in to your account</p>
            <div className="input-container">
              <input
                type="email"
                className="signupItem"
                id="signupEmail"
                name="email"
                value={loginData.email}
                onChange={handleInput}
                placeholder="Email"
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
                value={loginData.password}
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
                    stroke-linejoin="round"
                    strokeLinecap="round"
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
              Sign in
            </button>

            <p className="signup-link">
              No account?
              <Link to={"/signup"}>Signup</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
