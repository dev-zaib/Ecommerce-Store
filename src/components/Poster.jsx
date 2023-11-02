import React from "react";
import phone from "../assets/iPhone.jpg";
import appleLogo from "../assets/apple.png"
import SVG from "../components/SVG";
function Poster() {
  return (
    <div className="w-[70%] m-auto h-92 bg-black  flex flex-row   ">
      <div className="ml-16">
        <div className="flex flex-row  mt-6 ">
          <img className="w-20 h-20" src={appleLogo} />
          <h1 className="text-white mt-8">Iphone 14 Series</h1>
        </div>
        <h1 className="text-white  w-[280px] text-5xl  mt-4">Upto 10%</h1>
        <h1 className="text-white  w-[280px] text-5xl  mt-4">off Voucher</h1>
        <button className="text-white mt-8 text-2xl underline flex flex-row  ml-8">
          Shop Now{" "}
          <SVG
            width={26}
            height={26}
            viewBox="0 0 24 24"
            strokeColor="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </button>
      </div>
      <div>
        {" "}
        <img className="ml-16" src={phone} alt="hello" />
      </div>
    </div>
  );
}

export default Poster;
