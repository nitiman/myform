import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="container border mt-5">
      <button
        type="button"
        onClick={() => navigate("/login")}
        class="btn btn-primary mt-5"
      >
        Login
      </button>
      <br></br>
      <br></br>
      <button
        type="button"
        onClick={() => navigate("/signup")}
        class="btn btn-success mt-5 mb-5"
      >
        Sign up
      </button>
    </div>
  );
}

export default Home;
