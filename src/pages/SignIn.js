import React from "react";

export default function SignIn() {
  return (
    <div className="h-screen w-screen border flex items-center justify-center">
      <div className="flex flex-col items-center text-center h-[687px] w-[695px] shadow-2xl">
        <h1 className="text-3xl mt-[4rem]">Welcome back.</h1>
        <div className="mt-[10rem] text-lg">
          <p>
            No account? 
            <button className="ml-1 text-createone">
              <b>Create one</b>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
