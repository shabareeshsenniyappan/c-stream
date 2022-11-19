import React from "react";
import Banner from "../../Components/DisplayBanner/Banner";
import SignUpForm from "../../Layouts/SignUpForm/SignUpForm";
import "./signUp.css";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  return (
    <div className={"signup-container"}>
      <div className={"form-container"}>
        <SignUpForm />
      </div>
      <div className={"banner-container"}>
        <Banner
          tite={"Welcome Back!"}
          heading={
            "To keep connected with us please login with your login info By clickingSignup button"
          }
          buttonName={"Sign In"}
          buttonOnClick={() => navigate("/")}
          footer={
            "To start a new connection please signup with us by filling the detailson the form"
          }
        />
      </div>
    </div>
  );
}

export default SignUp;
