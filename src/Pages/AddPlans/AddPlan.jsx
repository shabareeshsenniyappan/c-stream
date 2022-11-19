import React, { useContext, useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import { UserContext } from "../../Services/UsersContext";
import { useNavigate } from "react-router-dom";
import Cards from "../../Components/Cards/Cards";
import "./AddPlan.css";

function AddPlan() {
  const navigate = useNavigate();
  let { plans, setplans, videos } = useContext(UserContext);
  const [showWarning, setshowWarning] = useState(false);
  const [currentPlans, setcurrentPlans] = useState({
    planName: "",
    id: plans?.length + 1,
    desc: "",
    price: "",
    videos: [],
    user: [],
  });
  //
  useEffect(() => {
    setTimeout(() => {
      setshowWarning(false);
    }, 3000);
  }, [showWarning]);
  //
  const onAddPlans = () => {
    let duplicteFinder = plans?.filter(
      (vid) =>
        vid?.planName?.toLowerCase() === currentPlans?.planName.toLowerCase()
    );
    if (duplicteFinder?.length > 0) {
      setshowWarning(true);
    } else {
      let tmp = [...plans, currentPlans];
      setplans(tmp);
      navigate("/adminDash", {
        state: { msg: "Plan added Succesfully !!" },
      });
    }
  };
  //
  const addVideo = (id) => {
    let tmp = currentPlans.videos;
    tmp = [...tmp, id];
    setcurrentPlans({ ...currentPlans, videos: tmp });
  };

  console.log(currentPlans, "curr");
  let butDis =
    currentPlans.planName === "" ||
    currentPlans.price === "" ||
    currentPlans.videos?.length === 0;
  return (
    <div>
      <Header />
      <div className={"input-container"}>
        {showWarning && <div className={"validation"}>Plan already exist </div>}
        <h1>Add New Plans</h1>

        <input
          type="text"
          placeholder={"Plan Name"}
          value={currentPlans?.planName}
          onChange={(e) => {
            setcurrentPlans({ ...currentPlans, planName: e?.target?.value });
          }}
        />
        <input
          type="text"
          placeholder={"Description"}
          value={currentPlans?.desc}
          onChange={(e) => {
            setcurrentPlans({ ...currentPlans, desc: e?.target?.value });
          }}
        />
        <input
          type="text"
          placeholder={"Price"}
          value={currentPlans?.price}
          onChange={(e) => {
            setcurrentPlans({
              ...currentPlans,
              price: e?.target?.value?.replace(/[^0-9.]/g, ""),
            });
          }}
        />
        <div className="warnings">
          {currentPlans?.planName?.length !== 0 &&
          currentPlans.videos?.length === 0
            ? "Please add Atleast 1 Video to add plan"
            : `Total Added Videos ${currentPlans?.videos?.length}`}
        </div>
        <div>
          <button disabled={butDis} onClick={onAddPlans}>
            Add Plan
          </button>
        </div>
      </div>
      <div>
        <h1>Click on the Videos to add on the Plan</h1>
        <div className={"videos-container"}>
          {videos?.map((vid) => (
            <div className="pointer " onClick={() => addVideo(vid?.id)}>
              <Cards
                title={vid?.title}
                desc={vid?.desc}
                url={vid?.url}
                grey={currentPlans?.videos?.includes(vid?.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AddPlan;
