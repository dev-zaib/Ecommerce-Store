import { React, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import {
  removeAll,
  increment,
  decrement,
} from "../app/features/productSlice";

function Checkout() {
  const cartProducts = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();
  const removeToCart = () => {
    dispatch(removeAll());
    console.log("removeAll", cartProducts);
  };
  const incrementInProduct = (title) => {
    dispatch(increment(title));
  };
  const decrementInProduct = (title) => {
    dispatch(decrement(title));
  };  
  
  return (
    <div>
      <Navbar />
      <hr />
      <div className="w-[78%] m-auto">
        <div className="mt-16 mb-24">
          <div className="flex gap-3 text-lg text-gray-500 ">
            <Link to="/">Home</Link>
            <div>/</div>
            <h1 className="text-black">Cart</h1>
          </div>
        </div>

        <div className="w-full rounded text-xl">
          <div className="font-bold">
            <div className=" flex justify-between py-6 shadow">
              <div className="px-6">Product</div>
              <div>Price</div>
              <div>Quantity</div>
              <div className="px-6">Subtotal</div>
            </div>
          </div>
          <div>
            {cartProducts.map((product, index) => (
              <div
                className="text-center flex justify-between py-6 shadow items-center mt-12"
                key={index}
              >
                <div className="ml-2">
                  <div className="flex justify-center items-center">
                    <img src={product.image} className="w-12 h-12" />
                    <h1>{product.title}</h1>
                  </div>
                </div>

                <div className="mr-8">${product.newPrice}</div>

                <div class="mr-16">
                  <div className="flex justify-center ">
                    <div className="border-2 flex items-center justify-between border-black border-opacity-[0.2] rounded-md py-1 px-3">
                      <span className="mr-6">{product.quantity}</span>
                      <div className="flex flex-col">
                        <button
                          className="text-xs mb-2"
                          onClick={() => {
                            incrementInProduct(product.title);
                          }}
                        >
                          Ʌ
                        </button>
                        <button
                          className=" text-xs"
                          onClick={() => decrementInProduct(product.title)}
                        >
                          V
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mr-12">
                  ${product.newPrice * product.quantity}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between text-center mt-10">
          <Link
            to="/products"
            className="px-16 py-4 font-bold text-lg rounded-md border border-black border-opacity-[0.5]"
          >
            Return to Products
          </Link>
          <button
            className="px-16 py-4 font-bold text-lg rounded-md border border-black border-opacity-[0.5]"
            onClick={() => removeToCart()}
          >
            Remove All
          </button>
        </div>
        <div className="rounded-md border-black border-2 w-1/3 my-32 p-6">
          <div className="font-bold text-2xl">Cart Total</div>
          <div className="font-medium text-lg">
            <div className="flex justify-between mt-8 mb-4">
              <div>Subtotal:</div>
              <div>${}</div>
            </div>
            <hr className="bg-black h-0.5 bg-opacity-5" />
            <div className="flex justify-between my-4">
              <div>Shipping:</div>
              <div>Free</div>
            </div>
            <hr className="bg-black h-0.5 bg-opacity-5" />
            <div className="flex justify-between mt-4">
              <div>Total:</div>
              <div>$1750</div>
            </div>
            <div className="flex justify-center mt-8">
              <button className="px-10 py-4 rounded-md text-[#FAFAFA] bg-[#DB4444]">
                Download Receipt
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
