import React, { useState } from "react";

import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./Services/UsersContext";
import AdminDash from "./Pages/adminDashBoard/AdminDash";
import AddVideos from "./Pages/AddVideos/AddVideos";
import AddPlan from "./Pages/AddPlans/AddPlan";
import CreateGroup from "./Pages/CreateGroup/CreateGroup";
import BuyPlans from "./Pages/BuyPlans/BuyPlans";

function App() {
  const [users, setUsers] = useState([
    {
      userName: "Admin1",
      mobile: "9999999999",
      email: "admin@cstream.com",
      password: "12345678",
      role: "admin",
      id: 1,
    },
    {
      userName: "raghu",
      email: "ragu@mail.com",
      mobile: "9898989878",
      password: "As1!1234",
      auth: "customer",
      id: 2,
    },
    {
      userName: "ram",
      email: "ram@mail.com",
      mobile: "9898989898",
      password: "Rs1!1234",
      auth: "customer",
      id: 3,
    },
  ]);
  const [selectedUsers, setSelectedUsers] = useState({
    userName: "raghu",
    email: "ragu@mail.com",
    mobile: "9898989898",
    password: "As1!1234",
    auth: "customer",
    id: 2,
  });
  const [videos, setvideos] = useState([
    {
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
      id: 1,
      desc: "Tears of Steel was realized with crowd-funding by users of the open source 3D creation tool Blender",
      title: "Tears of Steel",
    },
    {
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
      id: 2,
      desc: "Smoking Tire takes the all-new Subaru Outback to the highest point we can find in hopes",
      title: "Subaru Outback",
    },
    {
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      id: 3,
      desc: "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when you want to make Buster's big",
      title: "For Bigger Meltdowns",
    },
  ]);
  const [plans, setplans] = useState([
    {
      planName: "Silver ",
      desc: "basic plan",
      price: "149",
      videos: [1],
      user: [],
      id: 1,
    },
    {
      planName: "Gold",
      desc: "gold plan ",
      price: "267",
      videos: [1, 2],
      user: [2],
      id: 2,
    },
    {
      planName: "Premium +",
      desc: "premiuum can access all videos",
      price: "567",
      videos: [1, 2, 3],
      user: [],
      id: 3,
    },
  ]);
  const [group, setgroup] = useState([
    {
      groupName: "Friends",
      desc: "to Share movie with friends",
      plan: [2],
      friends: [2, 3],
      id: 1,
    },
  ]);
  // console.log(users, videos, plans, group, "usersGlobal");
  return (
    <UserContext.Provider
      value={{
        users: users,
        setUsers: setUsers,
        selectedUsers: selectedUsers,
        setSelectedUsers: setSelectedUsers,
        videos: videos,
        setvideos: setvideos,
        plans: plans,
        setplans: setplans,
        group: group,
        setgroup: setgroup,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route index element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/adminDash" element={<AdminDash />} />
          <Route path="/addVideos" element={<AddVideos />} />
          <Route path="/addPlan" element={<AddPlan />} />
          <Route path="/createGroup" element={<CreateGroup />} />
          <Route path="/buyPlans" element={<BuyPlans />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
