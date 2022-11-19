import React, { useContext } from "react";
import Cards from "../../Components/Cards/Cards";
import PlanCards from "../../Components/CardsPlans/Cards";
import Header from "../../Components/Header/Header";
import { UserContext } from "../../Services/UsersContext";
import "./AdminDash.css";

function AdminDash() {
  let { videos, plans, selectedUsers, group } = useContext(UserContext);
  console.log(
    group?.filter?.((pl) => pl?.friends?.includes(selectedUsers?.id)),
    "lkj"
  );
  return (
    <div>
      <Header />
      {selectedUsers?.role === "admin" ? (
        <>
          <h1>Plans</h1>
          <div className="chker">
            {plans?.map((plan) => (
              <PlanCards
                title={plan?.planName}
                desc={plan?.desc}
                price={plan?.price}
              />
            ))}
          </div>
          <h1>Videos</h1>

          <div className={"videos-container"}>
            {videos?.map((vid) => (
              <div>
                <Cards title={vid?.title} desc={vid?.desc} url={vid?.url} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <h1>Availabe Videos From SubScribed Plans</h1>
          <div className={"videos-container"}>
            {plans
              ?.filter?.((pl) => pl?.user?.includes(selectedUsers?.id))
              ?.map((p) =>
                p?.videos?.map((vid) => {
                  let sVid = videos.filter((v) => v.id === vid);
                  if (sVid.length === 0) {
                    <p className="warn">No Subscriptions Available</p>;
                  } else {
                    return (
                      <div>
                        <Cards
                          title={sVid[0]?.title}
                          desc={sVid[0]?.desc}
                          url={sVid[0]?.url}
                        />
                      </div>
                    );
                  }
                })
              )}
          </div>
          {/*  */}
          <h1>Availabe Videos From Shared Groups</h1>
          <div className={"videos-container"}>
            {group
              ?.filter?.((pl) => pl?.friends?.includes(selectedUsers?.id))
              ?.map((p) =>
                p?.plan?.map((item) =>
                  plans
                    .filter?.((m) => m?.id === item)
                    ?.map((e) =>
                      e?.videos?.map((fn) => {
                        let sVid = videos.filter((v) => v.id === fn);

                        if (sVid.length === 0) {
                          <p className="warn">No Subscriptions Available</p>;
                        } else {
                          return (
                            <div>
                              <Cards
                                title={sVid[0]?.title}
                                desc={sVid[0]?.desc}
                                url={sVid[0]?.url}
                              />
                            </div>
                          );
                        }
                      })
                    )
                )
              )}
          </div>
        </>
      )}
    </div>
  );
}

export default AdminDash;
