import React, { useState, useEffect, useContext } from "react";
import { chkEmptyObj, chkFilledObj } from "../../Services/CommonFunctions";
import { validateEmail } from "../../Services/validators";
import "./signinForm.css";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../Services/UsersContext";

function SignInForm() {
  const location = useLocation();
  const navigate = useNavigate();

  let { users, setSelectedUsers } = useContext(UserContext);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showWarning, setshowWarning] = useState(false);

  const [userSignInDetails, setuserSignInDetails] = useState({
    email: "",
    passWord: "",
  });
  const [error, seterror] = useState({
    email: "",
    passWord: "",
  });
  useEffect(() => {
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  }, [showSuccess]);
  useEffect(() => {
    setTimeout(() => {
      setshowWarning(false);
    }, 3000);
  }, [showWarning]);

  useEffect(() => {
    if (location.state?.msg && !showSuccess) {
      setShowSuccess(true);
    }
    // eslint-disable-next-line
  }, []);
  let butDis = !chkFilledObj(userSignInDetails) || !chkEmptyObj(error);

  const onSignInClick = () => {
    let isValidUser = users?.filter(
      (user) =>
        user?.email === userSignInDetails?.email &&
        user?.password === userSignInDetails?.passWord
    );
    if (isValidUser?.length === 1) {
      setSelectedUsers(isValidUser[0]);
      navigate("/adminDash", {
        state: { msg: "Sign In !!" },
      });
    } else {
      setshowWarning(true);
    }
    console.log(isValidUser);
  };

  console.log(userSignInDetails, error, "signin");
  return (
    <div className={"signin-form-container"}>
      {showSuccess && <div className={"success"}>{location.state?.msg} </div>}
      {showWarning && <div className={"validation"}>Invalid User </div>}
      <h1>LogIn !!</h1>
      <span className={"warnings"}>Fill All the Mandatory Fields *</span>
      <div className={"input-form"}>
        {" "}
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            let valid = validateEmail(e?.target?.value);
            if (!valid) {
              seterror({ ...error, email: "Pls Enter valid Email" });
            } else {
              seterror({ ...error, email: "" });
            }
            setuserSignInDetails({
              ...userSignInDetails,
              email: e?.target?.value,
            });
          }}
          value={userSignInDetails?.email}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            if (e?.target?.value?.length < 8)
              seterror({ ...error, passWord: "Minimum eight Character" });
            else seterror({ ...error, passWord: "" });
            setuserSignInDetails({
              ...userSignInDetails,
              passWord: e?.target?.value,
            });
          }}
          value={userSignInDetails?.passWord}
        />
      </div>
      <div className={"warnings"}>
        <p> {error.passWord}</p>
        <p>{error.email}</p>
      </div>
      <button disabled={butDis} onClick={onSignInClick}>
        Sign In
      </button>
    </div>
  );
}

export default SignInForm;
