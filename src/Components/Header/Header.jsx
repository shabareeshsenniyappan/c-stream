import React, { useContext } from "react";
import { UserContext } from "../../Services/UsersContext";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  let { selectedUsers } = useContext(UserContext);
  return (
    <div className={"header-container"}>
      <div className={"inline-links"}>
        {" "}
        <div className={"title"}>c-stream</div>
        {selectedUsers?.role === "admin" ? (
          <>
            <span className={"links"} onClick={() => navigate("/addPlan")}>
              Add Plan{" "}
            </span>
            <span className={"links"} onClick={() => navigate("/addVideos")}>
              Add Video
            </span>
          </>
        ) : (
          <>
            <span className={"links"} onClick={() => navigate("/buyPlans")}>
              Buy Plan{" "}
            </span>{" "}
            <span className={"links"} onClick={() => navigate("/createGroup")}>
              Create Group
            </span>
          </>
        )}
      </div>
      <div className={"inline-links"}>
        {" "}
        <div>Welcome ! {" " + selectedUsers?.userName}</div>
        <div className={"links"} onClick={() => navigate("/")}>
          LogOut
        </div>
      </div>
    </div>
  );
}

export default Header;
