import React from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="bg-yellow-500 h-[455px] border-b border-black">
        <div className="p-[5rem] ml-[15rem]">
          <div>
            <div className="w-[550px] h-[95px] text-7xl font-samibold">
              <h1>Stay curious</h1>
            </div>
          </div>
          <div className="h-[48px] w-[480px] text-xl">
            <p>
              Discover stories, thinking, and expertise from writers on any
              topic.
            </p>
          </div>
          <div className="mt-[4rem] w-[213px] h-[42px]">
            <button className="bg-black text-white w-full h-full rounded-3xl font-semibold text-lg">Start reading</button>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
