import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { removeAll } from "../app/features/productSlice";

function Checkout() {
  const cartProducts = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();
  const removeToCart = () => {
    dispatch(removeAll());
    console.log("removeAll", cart);
  };
  return (
    <div>
      <Navbar />
      <hr />
      <div className="w-[75%] m-auto">
        <div>
          <div className="flex gap-3 text-lg text-gray-500 mt-8 mb-4">
            <Link to="/">Home</Link>
            <div>/</div>
            <h1 className="text-black">Cart</h1>
          </div>
        </div>

        <table class="table-auto w-full  rounded border-separate border-spacing-y-10 text-xl">
          <thead class=" font-bold ">
            <tr className="border">
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.map((product, index) => (
              <tr class="text-center">
                <td class="p-4 ">
                  <div className="flex justify-center items-center">
                    <img src={product.image} className="w-12 h-12"/>
                    <h1>{product.title}</h1>
                  </div>
                </td>
                
                  <td class="p-4">${product.newPrice}</td>
                
                <td class="p-4">
                  <input
                    type="number"
                    className="w-16 h-10 border border-gray-300 rounded-md px-2"
                  />
                </td>
                <td class="p-4">${product.newPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between text-center">
          <Link
            to="/products"
            className="px-16 py-4  rounded-md border-black border-2"
          >
            Return to Products
          </Link>
          <button
            className="px-16 py-4 rounded-md border-black border-2"
            onClick={removeToCart}
          >
            Remove All
          </button>
        </div>
        <div className="rounded-md border-black border-2 mt-16 mb-4 w-1/3 py-8 px-4">
          <div className="font-bold text-xl">Cart Total</div>
          <div className="flex justify-between mt-4">
            <div>Subtotal:</div>
            <div>$1750</div>
          </div>
          <hr />
          <div className="flex justify-between mt-4">
            <div>Shipping</div>
            <div>Free</div>
          </div>
          <hr />
          <div className="flex justify-between mt-4">
            <div>Total:</div>
            <div>$1750</div>
          </div>
          <div className="flex justify-center mt-8">
            <button className="px-10 py-4 rounded-md text-white bg-rose-700">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
