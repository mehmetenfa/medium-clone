import React from "react";
import Navbar from "../components/Navbar";
import { BiTrendingUp } from "react-icons/bi";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="bg-yellow-500 h-[455px] border-b border-black">
        <div className="p-[5rem] ml-[15.5rem]">
          <div>
            <div className="w-[550px] h-[95px] text-8xl font-samibold">
              <h1>Stay curious.</h1>
            </div>
          </div>
          <div className="h-[48px] w-[480px] mt-7 text-2xl font-semibold">
            <p>
              Discover stories, thinking, and expertise from writers on any
              topic.
            </p>
          </div>
          <div className="mt-[4rem] w-[213px] h-[42px]">
            <button className="bg-black text-white w-full h-full rounded-3xl font-semibold text-lg">
              Start reading
            </button>
          </div>
        </div>
        <div className=""></div>
      </div>
      <div className="border-b border-slate-300">
        <div className="p-[4rem] ml-[16.5rem] flex gap-[17rem]">
          <div>
            <div className="flex gap-4">
              <BiTrendingUp className="mt-1" />
              <p className="text-sm font-bold">TRENDING ON MEDIUM</p>
            </div>
            <div className="flex mt-4 gap-3">
              <div className="text-2xl font-bold text-slate-300">
                <p>01</p>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex">
                  <img
                    className="w-[2.5rem] mt-1.5 h-[1.5rem] rounded-full"
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c0840e59-db43-4681-ae7b-31a04dc4bc55/d7eqdvw-4e97ac92-e4b9-4498-9655-e4d612eb478b.png/v1/fill/w_1600,h_900,strp/random_logo_by_criticl_d7eqdvw-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvYzA4NDBlNTktZGI0My00NjgxLWFlN2ItMzFhMDRkYzRiYzU1XC9kN2VxZHZ3LTRlOTdhYzkyLWU0YjktNDQ5OC05NjU1LWU0ZDYxMmViNDc4Yi5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.X991O1jF5lTNZbbEoHEfoo6nlHEihBMHMIm5-uBCXcU"
                  />
                  <label className="mt-1.5 font-semibold">Barack Obama</label>
                </div>
                <div className="flex flex-col ml-3">
                  <div className="font-bold mb-3">
                    <h1>My 2022 End of Year Lists</h1>
                  </div>
                  <div className="flex text-slate-500">
                    <p>Dec 24, 2022</p>
                    <span className="flex items-center">
                      <p className=" ml-2 mr-2">.</p>
                    </span>
                    <p>3 min read</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-4">
              <BiTrendingUp className="mt-1" />
              <p className="text-sm font-bold">TRENDING ON MEDIUM</p>
            </div>
            <div className="flex mt-4 gap-3">
              <div className="text-2xl font-bold text-slate-300">
                <p>01</p>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex">
                  <img
                    className="w-[2.5rem] mt-1.5 h-[1.5rem] rounded-full"
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c0840e59-db43-4681-ae7b-31a04dc4bc55/d7eqdvw-4e97ac92-e4b9-4498-9655-e4d612eb478b.png/v1/fill/w_1600,h_900,strp/random_logo_by_criticl_d7eqdvw-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvYzA4NDBlNTktZGI0My00NjgxLWFlN2ItMzFhMDRkYzRiYzU1XC9kN2VxZHZ3LTRlOTdhYzkyLWU0YjktNDQ5OC05NjU1LWU0ZDYxMmViNDc4Yi5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.X991O1jF5lTNZbbEoHEfoo6nlHEihBMHMIm5-uBCXcU"
                  />
                  <label className="mt-1.5 font-semibold">Barack Obama</label>
                </div>
                <div className="flex flex-col ml-3">
                  <div className="font-bold mb-3">
                    <h1>My 2022 End of Year Lists</h1>
                  </div>
                  <div className="flex text-slate-500">
                    <p>Dec 24, 2022</p>
                    <span className="flex items-center">
                      <p className=" ml-2 mr-2">.</p>
                    </span>
                    <p>3 min read</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div>kafdkaşdflkbadfb</div>
    </div>
  );
}
