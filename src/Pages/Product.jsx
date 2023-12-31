import { React, useState } from "react";
import Navbar from "../components/Navbar";
import SVG from "../components/SVG";
import {data} from "../app/data"
import { useDispatch } from "react-redux";
import { addCart, moveAllToCart } from '../app/features/productSlice'

const Products = () => {
  const images = data;
  console.log(images)
  const dispatch = useDispatch();
  const addToCart = (image) => {
      dispatch(addCart(image))
      console.log('addToCart', image)
  }

  const moveAllCart = () => {
      dispatch(moveAllToCart(images))
      console.log('moveAllToCart', images)
  }

  return (
    <div>
      <Navbar />
      <hr />
      <div className="flex items-center w-[89%] ml-auto justify-between mb-14 mt-20 ">
        <div className="text-2xl font-semibold">Total Products ({images.length})</div>
        <button className=" px-16 py-4 mr-10 text-lg font-bold border border-black border-opacity-[0.5] rounded-md" onClick={()=>moveAllCart(images)}>
          Move All to Cart
        </button>
      </div>
      <div className="w-4/5 m-auto">
        <div className="flex flex-wrap w-full justify-center gap-3.5">
          {images.map((image, index) => (
            <div key={index} className="mx-2 mb-20 relative">
              <img
                className="bg-[#F5F5F5] py-20 px-24 rounded-md"
                src={image.image}
                alt={image.alt}
              />
              <div className="pt-6 text-lg font-bold">
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

              <div className="absolute bottom-16 w-full">
                <div className="flex items-center gap-2 bg-black justify-center h-12 rounded-b-md">
                  <SVG
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    pathName="Cart1"
                    pathName2="Cart2"
                    pathName3="Cart3"
                    pathName4="Cart4"
                    strokeColor="white"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                  />
                  <button className="text-white" onClick={()=>addToCart(image)}>Add to cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
