import React from "react";
import phone from "../assets/iPhone.jpg";
import appleLogo from "../assets/apple.png";
import SVG from "../components/SVG";
function Poster() {
  return (
    <div className="w-[78%] m-auto h-92 bg-black  flex mt-10 mb-32">
      <div className="ml-16 flex flex-col justify-around mt-8">
        <div className="flex items-center gap-2">
          <img className="h-14 " src={appleLogo} alt="hello" />
          <h1 className="text-white text-xl mt-2">iPhone 14 Series</h1>
        </div>
        <div className="text-white text-5xl font-bold">
          <h1>Up to 10%</h1>
          <h1 className="mt-3">off Voucher</h1>
        </div>
        <button className="text-white text-xl flex items-center mb-10">
          <div>
            <h1>Shop Now</h1>
            <hr />
          </div>
          <SVG
            width={24}
            height={24}
            viewBox="0 0 24 24"
            strokeColor="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathName={"Arrow"}
          />
        </button>
      </div>
      <div>
        <img className="ml-16" src={phone} alt="hello" />
      </div>
    </div>
  );
}

export default Poster;
