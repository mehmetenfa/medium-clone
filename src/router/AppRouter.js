import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "../pages/SignUp";
import SignUp from "../pages/SignUp";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
