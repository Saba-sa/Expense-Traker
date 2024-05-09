import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./compoenents/Header";
import Appui from "./compoenents/Appui";

const App = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <Appui />
      <Outlet />
    </div>
  );
};

export default App;
