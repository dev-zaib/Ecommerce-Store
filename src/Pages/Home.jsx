import {React, useState} from "react";
import Navbar from "../components/Navbar";
import SVG from "../components/SVG";
import { useSelector } from "react-redux";
import Poster from "../components/Poster";


const Home = () => {
  const images = useSelector((state) => state.products);
  const [loadData, setloadData] = useState(4)
  const moreImage = images.slice(0, loadData);
  const handleLoadData = () => {
    setloadData(loadData + (images.length-loadData))
  }
  return (
    <div>
      <Navbar />
      <hr />
      <Poster/>
      <div className="w-4/5 m-auto mt-10">
        <div className="flex flex-wrap w-full justify-center">
          {moreImage.map((image, index) => (
            <div key={index} className="mx-2 my-2 relative">
              <img
                className="bg-gray-200 py-20 px-24 rounded-md"
                src={image.image}
                alt={image.alt}
              />
              <div className="pt-2 text-lg font-bold">
                <h1>{image.title}</h1>
                <div className="flex gap-5">
                  <h1 className="text-rose-600">${image.newPrice}</h1>
                  <h1 className="line-through text-gray-400">${image.oldPrice}</h1>
                </div>
              </div>
              <div className="absolute top-3 left-3 px-2 py-1 text-white rounded-lg bg-rose-600">
                {image.discountInPercentage}%
              </div>
              <div className="absolute top-2 right-3 bg-white rounded-full p-1">
                <SVG
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  pathName="Wishlist"
                  strokeColor="black"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                />
              </div>
              
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button className={`bg-rose-600 text-white rounded-md py-6 px-20 text-lg ${loadData === images.length ? "hidden" : ""}`} onClick={handleLoadData}>View All Product</button>
      </div>
          
    </div>
  );
};

export default Home;
