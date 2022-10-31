import React from "react";
import User from "../User/User";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="homeleft"></div>
      <div className="homeright">
        <User
          userId={"userId"}
          name={"user.name"}
          avatar={
            "https://t4.ftcdn.net/jpg/00/65/77/27/240_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
          }
        />
      </div>
    </div>
  );
};
