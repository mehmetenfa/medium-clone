import React from "react";

export default function SignIn() {
  return (
    <div className="h-screen w-screen border flex items-center justify-center">
      <div className="flex flex-col items-center text-center h-[687px] w-[695px] shadow-2xl">
        <h1 className="text-3xl mt-[4rem]">Welcome back.</h1>
        <div className="mt-[10rem]">
          <p>sign inputs</p>
          <p className="text-lg">
            No account?
            <button className="ml-1 text-createone">
              <b>Create one</b>
            </button>
          </p>
          <p className="mt-[5rem]">
            Forgot email or trouble signing in?{" "}
            <a href="#" className="underline">
              Get help.
            </a>
          </p>
        </div>
        <div>
          <p className="mt-[3rem]">
            Click “Sign In” to agree to Mediums{" "}
            <a href="#" className="underline">
              Terms of Services
            </a>{" "}
            and acknowledge that <br/> Mediums{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>{" "}
            applies to you.
          </p>
        </div>
      </div>
    </div>
  );
}
