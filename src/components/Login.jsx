import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Login.css";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        let data = await JSON.parse(window.localStorage.getItem("users"));
        console.log(data);
        setUsers(data);
      } catch (e) {
        setUsers([]);
      }
    }

    getData();
  }, []);

  const onEnterDetails = e => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("enter email and password");
    } else if (users) {
      users.forEach(user => {
        if (user.email === email) {
          console.log(email);
          if (user.password === password) {
            props.history.push("/dashboard");
          } else {
            setError("password is incorrect");
          }
        } else {
          setError("email not found");
        }
      });
    } else {
      setError("user doest exist please sign up");
    }
  };
  return (
    <div className="Login ">
      {error ? (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      ) : (
        ""
      )}
      <form className="form-group" onSubmit={onEnterDetails}>
        <lable for="email-label">Email</lable>
        <input
          className="form-control mb-3"
          id="email-label"
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />

        <lable for="password-label">Password</lable>
        <input
          className="form-control "
          id="password-label"
          type="password"
          name="email"
          value={password}
          placeholder="password"
          onChange={e => setPassword(e.target.value)}
        />
        <button class="btn btn-primary mt-3">submit</button>
        <span className="Login-link">
          <Link to="/register">Didn't have accout then register</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
