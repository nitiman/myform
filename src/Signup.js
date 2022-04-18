import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [emailAdd, setemailAdd] = useState("");
  const [password1, setpassword1] = useState("");
  const [password2, setpassword2] = useState("");
  const [name, setname] = useState("");
  const [address, setaddress] = useState("");

  const showCredentials = () => {
    if (password1 === password2) {
      console.log("password matches");
    } else {
      console.log("password not match");
    }
    console.log("Email :", emailAdd);
    console.log("Password :", password1);
    console.log("Name :", name);
    console.log("Address :", address);
  };
  return (
    <div>
      <form className="container border mt-5 p-5">
        <div class="form-group">
          <label>Name</label>
          <input
            class="form-control"
            onChange={(e) => setname(e.target.value)}
          />
        </div>
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
            onChange={(e) => setpassword1(e.target.value)}
            id="exampleInputPassword1"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Confirm Password</label>
          <input
            type="password"
            class="form-control"
            onChange={(e) => setpassword2(e.target.value)}
            id="exampleInputPassword1"
          />
        </div>
        <div class="form-group">
          <label>Address</label>
          <input
            class="form-control"
            onChange={(e) => setaddress(e.target.value)}
          />
        </div>
        <div type="submit" class="btn btn-primary" onClick={showCredentials}>
          Signup
        </div>
        <br></br>
        <button class="btn btn-success mt-3" onClick={() => navigate("/")}>
          Home
        </button>
      </form>
    </div>
  );
}

export default Signup;
