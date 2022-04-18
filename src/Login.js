import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [emailAdd, setemailAdd] = useState("");
  const [password, setpassword] = useState("");
  const showCredentials = () => {
    console.log("Email :", emailAdd);
    console.log("Password :", password);
  };
  return (
    <div>
      <form className="container border mt-5 p-5">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            onChange={(e) => setemailAdd(e.target.value)}
            aria-describedby="emailHelp"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            onChange={(e) => setpassword(e.target.value)}
            id="exampleInputPassword1"
          />
        </div>
        <div type="submit" class="btn btn-primary" onClick={showCredentials}>
          Login
        </div>
        <br></br>
        <button class="btn btn-success mt-3" onClick={() => navigate("/")}>
          Home
        </button>
      </form>
    </div>
  );
}

export default Login;
