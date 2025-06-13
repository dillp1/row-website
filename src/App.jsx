import React from "react";
import "./vars.css";

function App() {
  return (
    <div className="text-white bg-custom min-h-screen">
      {/* Header Section */}
      <div className="flex flex-row justify-between items-center px-[150px] py-[70px] text-[32px]">
        <p className="font-bold">ROW</p>
        <div className="flex flex-row gap-[50px]">
          <p>Demands</p>
          <p>Intimidation</p>
          <p>Press</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
      </div>
      {/* Hero Section */}
      <div className="flex flex-row justify-between items-center px-[150px]">
        <div className="flex flex-col space-y-[25px]">
          <p className="text-[96px] font-bold leading-tight">
            ResLife Organized Workers
          </p>
          <p className="text-[24px]">
            Representing all Resident Assistants and Residential Education
            Assistants at Purdue University
          </p>
          <div className="flex flex-row items-center gap-[15px]">
            <button className="btn-primary-yellow text-black w-[275px] h-[80px] rounded-[40px] text-[24px]">
              About Us
            </button>
            <button className="btn-secondary-yellow text-white w-[275px] h-[80px] rounded-[40px] text-[24px]">
              Sign A Card
            </button>
          </div>
        </div>
        <img src="/src/assets/row-logo.png" className="" />
      </div>
      {/* Demands Section */}
      <div className="flex flex-col justify-between px-[150px]">
        <p className="text-[64px] font-semibold">We Demand...</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] text-black text-[20px]">
          <div className="demand-box flex flex-row gap-[16px] rounded-xl p-6">
            <div className="w-[70px] h-[70px] flex-shrink-0 flex items-center justify-center">
              <img
                src="/src/assets/MetNotification.svg"
                className="w-[70px] h-[70px]"
              />
            </div>
            <p>
              ... that any ResLife student staff never be assigned to share a
              living space with residents or a bedroom with any other
              individuals.
            </p>
          </div>
          <div className="demand-box flex flex-row gap-[16px] rounded-xl p-6">
            <div className="w-[70px] h-[70px] flex-shrink-0 flex items-center justify-center">
              <img
                src="/src/assets/MetNotification.svg"
                className="w-[70px] h-[70px]"
              />
            </div>
            <p>
              ... that any ResLife student staff never be assigned to share a
              living space with residents or a bedroom with any other
              individuals.
            </p>
          </div>
          <div className="demand-box flex flex-row gap-[16px] rounded-xl p-6">
            <div className="w-[70px] h-[70px] flex-shrink-0 flex items-center justify-center">
              <img
                src="/src/assets/AddressedNotification.svg"
                className="w-[70px] h-[70px]"
              />
            </div>
            <p>
              ... that any ResLife student staff never be assigned to share a
              living space with residents or a bedroom with any other
              individuals.... that any ResLife student staff never be assigned
              to share a living space with residents or a bedroom with any other
              individuals.... that any ResLife student staff never be assigned
              to share a living space with residents or a bedroom with any other
              individuals.
            </p>
          </div>
          <div className="demand-box flex flex-row gap-[16px] rounded-xl p-6">
            <div className="w-[70px] h-[70px] flex-shrink-0 flex items-center justify-center">
              <img
                src="/src/assets/AddressedNotification.svg"
                className="w-[70px] h-[70px]"
              />
            </div>
            <p>
              ... that any ResLife student staff never be assigned to share a
              living space with residents or a bedroom with any other
              individuals.... that any ResLife student staff never be assigned
              to share a living space with residents or a bedroom with any other
              individuals.... that any ResLife student staff never be assigned
              to share a living space with residents or a bedroom with any other
              individuals.
            </p>
          </div>
          <div className="demand-box flex flex-row gap-[16px] rounded-xl p-6">
            <div className="w-[70px] h-[70px] flex-shrink-0 flex items-center justify-center">
              <img
                src="/src/assets/UnaddressedNotification.svg"
                className="w-[70px] h-[70px]"
              />
            </div>
            <p>
              hello world this demand has not been addressed by Purdue how sad
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
