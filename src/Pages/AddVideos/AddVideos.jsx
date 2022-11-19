import React, { useContext, useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import { UserContext } from "../../Services/UsersContext";
import { validateURL } from "../../Services/validators";
import "./AddVideos.css";
import { useNavigate } from "react-router-dom";

function AddVideos() {
  const navigate = useNavigate();
  let { videos, setvideos } = useContext(UserContext);
  const [showWarning, setshowWarning] = useState(false);
  const [videoSelected, setvideoSelected] = useState({
    url: "",
    id: videos?.length + 1,
    desc: "",
    title: "",
  });
  const [error, seterror] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setshowWarning(false);
    }, 3000);
  }, [showWarning]);
  const onUploadVideo = () => {
    let duplicteFinder = videos?.filter(
      (vid) => vid?.url.toLowerCase() === videoSelected?.url.toLowerCase()
    );
    if (duplicteFinder?.length > 0) {
      setshowWarning(true);
    } else {
      let tmp = [...videos, videoSelected];
      setvideos(tmp);
      navigate("/adminDash", {
        state: { msg: "Video added Succesfully !!" },
      });
    }
  };
  return (
    <div>
      <Header />
      <div className={"input-container"}>
        {showWarning && (
          <div className={"validation"}>Video already exist </div>
        )}
        <h1>Upload Video Url</h1>
        <input
          type={"text"}
          id={"video"}
          placeholder={"Video URL"}
          onChange={(e) => {
            console.log(validateURL(e?.target?.value), "url");
            if (!validateURL(e?.target?.value)) {
              seterror("Invalid URL");
            } else {
              seterror("");
            }
            setvideoSelected({ ...videoSelected, url: e?.target?.value });
          }}
          value={videoSelected?.url}
        />
        <input
          type="text"
          placeholder={"Title"}
          value={videoSelected?.title}
          onChange={(e) => {
            setvideoSelected({ ...videoSelected, title: e?.target?.value });
          }}
        />
        <input
          type="text"
          placeholder={"Description"}
          value={videoSelected?.desc}
          onChange={(e) => {
            setvideoSelected({ ...videoSelected, desc: e?.target?.value });
          }}
        />
        <div>
          <button
            disabled={videoSelected?.url?.length === 0 || error?.length > 0}
            onClick={onUploadVideo}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddVideos;
