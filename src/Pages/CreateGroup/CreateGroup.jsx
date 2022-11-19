import React, { useContext, useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import { UserContext } from "../../Services/UsersContext";
import { useNavigate } from "react-router-dom";
import "./CreateCroup.css";
import PlanCards from "../../Components/CardsPlans/Cards";

function CreateGroup() {
  const navigate = useNavigate();
  let { plans, group, setgroup, users, selectedUsers } =
    useContext(UserContext);
  const [showWarning, setshowWarning] = useState(false);
  const [selectedGroup, setselectedGroup] = useState({
    groupName: "",
    desc: "",
    plan: [],
    friends: [],
    id: group?.length + 1,
  });
  //
  useEffect(() => {
    setTimeout(() => {
      setshowWarning(false);
    }, 3000);
  }, [showWarning]);
  //
  const onAddPlans = () => {
    let duplicteFinder = group?.filter(
      (vid) =>
        vid?.groupName?.toLowerCase() === selectedGroup?.groupName.toLowerCase()
    );
    if (duplicteFinder?.length > 0) {
      setshowWarning(true);
    } else {
      let tmp = [...group, selectedGroup];
      setgroup(tmp);
      navigate("/adminDash", {
        state: { msg: "Group added Succesfully !!" },
      });
    }
  };
  //
  const addPlan = (id) => {
    if (!selectedGroup?.plan?.includes(id)) {
      let tmp = selectedGroup.plan;
      tmp = [...tmp, id];
      setselectedGroup({ ...selectedGroup, plan: tmp });
    }
  };

  const addFriends = (id) => {
    if (!selectedGroup?.friends?.includes(id)) {
      let tmp = selectedGroup.friends;
      tmp = [...tmp, id];
      setselectedGroup({ ...selectedGroup, friends: tmp });
    }
  };

  console.log(selectedGroup, "curr");
  //   let butDis = !chkFilledObj(currentPlans);
  return (
    <div>
      <Header />
      <div className={"input-container"}>
        {showWarning && <div className={"validation"}>Plan already exist </div>}
        <h1>Create New Group</h1>

        <input
          type="text"
          placeholder={"Group Name"}
          value={selectedGroup?.groupName}
          onChange={(e) => {
            setselectedGroup({ ...selectedGroup, groupName: e?.target?.value });
          }}
        />
        <input
          type="text"
          placeholder={"Description"}
          value={selectedGroup?.desc}
          onChange={(e) => {
            setselectedGroup({ ...selectedGroup, desc: e?.target?.value });
          }}
        />

        <div className="warnings">
          {selectedGroup?.groupName?.length !== 0 &&
          selectedGroup.plan?.length === 0
            ? "Please add Atleast 1 plan to add plan"
            : `Total Added Plans ${selectedGroup?.plan?.length}`}
        </div>
        <div className="warnings">
          {selectedGroup?.groupName?.length !== 0 &&
          selectedGroup.friends?.length === 0
            ? "Please add Atleast 1 Friend to add plan"
            : `Total Added Friends ${selectedGroup?.friends?.length}`}
        </div>
        <div>
          <button
            disabled={
              selectedGroup?.plan?.length === 0 ||
              selectedGroup?.friends?.length === 0 ||
              selectedGroup?.groupName === ""
            }
            onClick={onAddPlans}
          >
            Create Group
          </button>
        </div>
      </div>
      <div>
        <h1>Plans</h1>
        <div className="chker">
          {plans
            ?.filter?.((pl) => pl?.user?.includes(selectedUsers?.id))
            ?.map((plan) => (
              <span
                onClick={() => {
                  addPlan(plan?.id);
                }}
              >
                <PlanCards
                  title={plan?.planName}
                  desc={plan?.desc}
                  price={plan?.price}
                  grey={selectedGroup?.plan?.includes(plan?.id)}
                />
              </span>
            ))}
        </div>
        <h1>Users</h1>
        <div>
          <div className="users-list bg-grey">
            <div>Name</div>
            <div>Email</div>
            <div>In Group</div>
          </div>
          {users
            ?.filter(
              (us) => us?.id !== selectedUsers?.id && us?.role !== "admin"
            )
            ?.map((user) => (
              <div className="users-list">
                <div>{user?.userName}</div>
                <div>{user?.email}</div>
                <div>
                  {selectedGroup?.friends?.includes(user?.id) ? (
                    <>
                      <img src="https://img.icons8.com/windows/32/null/--checkmark-yes.png" alt="selected" />
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          addFriends(user?.id);
                        }}
                      >
                        Add
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default CreateGroup;
