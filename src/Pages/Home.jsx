import { React, useState } from "react";
import Navbar from "../components/Navbar";
import SVG from "../components/SVG";
import { addFavourite } from "../app/features/productSlice";
import Poster from "../components/Poster";
import { data } from "../app/data";
import { useDispatch } from "react-redux";

const Home = () => {
  const images = data;
  const [loadData, setloadData] = useState(4);
  const moreImage = images.slice(0, loadData);
  const handleLoadData = () => {
    setloadData(loadData + (images.length - loadData));
  };
  const dispatch = useDispatch();
  const addToFavourite = (images) => {
    dispatch(addFavourite(images));
    const productIndex = moreImage.findIndex(
      (item) => item.title === images.title
    );
    setFavoriteProductIndices([...favoriteProductIndices, productIndex]);
  };
  const [favoriteProductIndices, setFavoriteProductIndices] = useState([]);

  return (
    <div>
      <Navbar />
      <hr />
      <Poster />
      <div className="w-4/5 m-auto">
        <div className="flex flex-wrap w-full justify-center gap-3">
          {moreImage.map((image, index) => (
            <div key={index} className="mx-2 my-2 relative">
              <img
                className="bg-[#F5F5F5] py-20 px-24 rounded-md"
                src={image.image}
                alt={image.alt}
              />
              <div className="pt-2 text-lg font-bold">
                <h1>{image.title}</h1>
                <div className="flex gap-5">
                  <h1 className="text-[#DB4444]">${image.newPrice}</h1>
                  <h1 className="line-through text-[#000000] text-opacity-[0.5]">
                    ${image.oldPrice}
                  </h1>
                </div>
              </div>
              <div className="absolute top-3 left-3 px-2 py-1 text-white rounded-lg bg-[#DB4444]">
                {image.discountInPercentage}%
              </div>
              <div
                className="absolute top-2 right-3 bg-white rounded-full p-1"
                onClick={() => addToFavourite(image)}
              >
                <SVG
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  pathName="Wishlist"
                  strokeColor={
                    favoriteProductIndices.includes(index) ? "none" : "black"
                  }
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  fill={favoriteProductIndices.includes(index) ? "red" : "none"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center my-10">
        <button
          className={`bg-[#DB4444] text-white rounded-md py-6 px-16 text-lg ${
            loadData === images.length ? "hidden" : ""
          }`}
          onClick={handleLoadData}
        >
          View All Product
        </button>
      </div>
    </div>
  );
};

export default Home;
