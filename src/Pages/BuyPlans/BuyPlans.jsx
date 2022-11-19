import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PlanCards from "../../Components/CardsPlans/Cards";
import Header from "../../Components/Header/Header";
import { UserContext } from "../../Services/UsersContext";

function BuyPlans() {
  let { plans, selectedUsers, setplans } = useContext(UserContext);
  const addPlan = (index) => {
    let tmp = plans;
    let selected = plans[index];
    selected.user.push(selectedUsers?.id);
    console.log(selected,'vbn');
    tmp = [...tmp, selected];
    setplans(tmp);
  };
    const navigate = useNavigate();

  return (
    <div>
      <Header />
      <h1>Available Plans</h1>
      <div className="chker">
        {plans?.map((plan, index) => (
          <span
            onClick={() => {
              addPlan(index);
            }}
          >
            <PlanCards
              title={plan?.planName}
              desc={plan?.desc}
              price={plan?.price}
              grey={plan?.user?.includes(selectedUsers?.id)}
            />
          </span>
        ))}
      </div>
      <button onClick={() => navigate("/adminDash")}> Buy Selected</button>
    </div>
  );
}

export default BuyPlans;
