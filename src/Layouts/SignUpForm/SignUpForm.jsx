import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { chkEmptyObj, chkFilledObj } from "../../Services/CommonFunctions";
import { UserContext } from "../../Services/UsersContext";
import {
  validateEmail,
  ValidateName,
  validatePassword,
} from "../../Services/validators";
import "./signUpForm.css";

function SignUpForm() {
  const navigate = useNavigate();
  let { users, setUsers } = useContext(UserContext);
  const [showWarning, setshowWarning] = useState(false);
  const [userDetailsSignUp, setuserDetailsSignUp] = useState({
    userName: "",
    email: "",
    mobile: "",
    password: "",
    auth: "customer",
    id: users.length + 1,
  });
  const [error, seterror] = useState({
    userName: "",
    email: "",
    mobile: "",
    password: "",
  });

  useEffect(() => {
    setTimeout(() => {
      setshowWarning(false);
    }, 3000);
  }, [showWarning]);
  let butDis = !chkFilledObj(userDetailsSignUp) || !chkEmptyObj(error);

  const onSignUpClick = () => {
    let duplicate = users.filter(
      (user) =>
        user?.email.toLowerCase() === userDetailsSignUp?.email.toLowerCase() ||
        user?.mobile === userDetailsSignUp?.mobile
    );
    if (duplicate?.length !== 0) {
      setshowWarning(true);
    } else {
      let tmp = [...users, userDetailsSignUp];
      setUsers(tmp);
      navigate("/", {
        state: { msg: "SignUp successfull Please Sign In !!" },
      });
    }
  };
  console.log(userDetailsSignUp, error, butDis, "thnk");
  return (
    <div className={"signup-form-container"}>
      {showWarning && (
        <div className={"validation"}>
          User email or Phone already exist - Please Login{" "}
        </div>
      )}
      <h1> Create Account</h1>
      <span className={"warnings"}>Fill All the Mandatory Fields *</span>
      <div className={"input-form"}>
        {" "}
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => {
            if (
              !ValidateName(e?.target?.value) ||
              e?.target?.value?.length < 3
            ) {
              seterror({ ...error, userName: "Invalid Name must have 3 char" });
            } else {
              seterror({ ...error, userName: "" });
            }
            setuserDetailsSignUp({
              ...userDetailsSignUp,
              userName: e?.target?.value,
            });
          }}
          value={userDetailsSignUp?.userName}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            if (!validateEmail(e?.target?.value)) {
              seterror({ ...error, email: "Invalid Email" });
            } else {
              seterror({ ...error, email: "" });
            }
            setuserDetailsSignUp({
              ...userDetailsSignUp,
              email: e?.target?.value,
            });
          }}
          value={userDetailsSignUp?.email}
        />
        <input
          type="text"
          id="mobile"
          pattern={"[0-9]+"}
          placeholder="Mobile No."
          onChange={(e) => {
            if (e?.target?.value?.length !== 10) {
              seterror({ ...error, mobile: "Invalid Mobile No." });
            } else {
              seterror({ ...error, mobile: "" });
            }
            setuserDetailsSignUp({
              ...userDetailsSignUp,
              mobile: e?.target?.value?.replace(/[^0-9.]/g, ""),
            });
          }}
          value={userDetailsSignUp?.mobile}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            if (!validatePassword(e?.target?.value)) {
              seterror({
                ...error,
                password:
                  "Password must contain min eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
              });
            } else {
              seterror({ ...error, password: "" });
            }
            setuserDetailsSignUp({
              ...userDetailsSignUp,
              password: e?.target?.value,
            });
          }}
          value={userDetailsSignUp?.password}
        />
      </div>
      <div className={"warnings"}>
        <p> {error.password}</p>
        <p>{error.email}</p>
        <p>{error.mobile}</p>
        <p>{error.name}</p>
      </div>
      <button disabled={butDis} onClick={onSignUpClick}>
        Sign Up
      </button>
    </div>
  );
}

export default SignUpForm;
