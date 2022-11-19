import React from "react";
import SignInForm from "../../Layouts/SignInForm/SigninForm";
import "./SignIn.css";
import Banner from "../../Components/DisplayBanner/Banner";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  return (
    <div className={"signin-container"}>
      <div className={"banner-container"}>
        <Banner
          tite={"Hola Amigo !!"}
          heading={
            "To start a new connection please signup with us by filling the detailson the form"
          }
          buttonName={"Sign Up"}
          buttonOnClick={() => navigate("/signUp")}
          footer={
            "To keep connected with us please login with your login info By clickingSignup button"
          }
        />
      </div>
      <div className={"form-container"}>
        <SignInForm />
      </div>
    </div>
  );
}

export default SignIn;
