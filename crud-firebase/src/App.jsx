import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";

function App() {
  return (
    <div className="mx-auto max-w-[370w] px-4">
      <Navbar />
      <div className="flex gap-2 ">
        <div className="flex relative flex-grow items-center  ">
          <FiSearch className="text-white absolute text-3xl ml-1  " />
          <input
            type="text"
            className="bg-transparent flex-grow border-white border rounded-md h-10 text-white pl-10"
          />
        </div>
        <div className="">
          <AiFillPlusCircle className="text-5xl text-white cursor-pointer " />
        </div>
      </div>
    </div>
  );
}

export default App;
