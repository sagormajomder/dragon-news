import React from "react";
import classImage from "../../assets/class.png";
import playImage from "../../assets/playground.png";
import swimmingImage from "../../assets/swimming.png";

export default function Qzone() {
  return (
    <div className="bg-base-200 p-3">
      <h2 className="mb-5 font-bold">QZone</h2>
      <div className="space-y-5">
        <img src={swimmingImage} alt="" />
        <img src={classImage} alt="" />
        <img src={playImage} alt="" />
      </div>
    </div>
  );
}
