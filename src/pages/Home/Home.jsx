import React from "react";
import "./Home.scss";

//material icon
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";


import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();


  return (
    <>
      <div className="home-main">
        <div className="home-content">
          <div className="content">
            <h2> Lahore's Latest Tech Shopping </h2>
            <h3>Start Shopping for the Best Tech Products in Lahore</h3>
          </div>

          <div className="play_icon">
            <PlayCircleFilledWhiteOutlinedIcon className="play" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
