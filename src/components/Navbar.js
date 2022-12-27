import React from "react";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between border-b border-black bg-yellow-400 w-screen h-[5rem]">
      <div className="w-[161px] ml-[20rem]">
        <img
          src="https://miro.medium.com/max/640/1*s986xIGqhfsN8U--09_AdA.webp"
          className=""
          alt="medium-logo"
        />
      </div>
      <div className=" w-[50rem] mr-[7rem] flex items-center gap-[2rem]">
        <ul className="flex flex-row items center justify-center gap-[2rem]">
          <li>Our Story</li>
          <li>Membership</li>
          <li>Write</li>
          <li>Sign In</li>
        </ul>
        <button className="bg-[#191919] text-white w-[104px] h-[38px] text-sm flex items-center justify-center rounded-3xl">Get Started</button>
      </div>
    </div>
  );
}
