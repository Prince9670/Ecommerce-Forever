import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {

  const [method,setmethod] = useState("Cash on delivery");

  const {Navigate} = useContext(ShopContext);
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* Left side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl my-3 sm:text-2xl">
          <Title text1={"PLACE"} text2={"ORDER"} />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="First name"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
        </div>
        <input
          type="email"
          placeholder="Email Address"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
        <input
          type="text"
          placeholder="Street"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="City"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            placeholder="State"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
        </div>
        <div className="flex gap-3">
          <input
            type="number"
            placeholder="Zip Code"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            placeholder="Country"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
        </div>
        <input
          type="number"
          placeholder="Phone"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
      </div>

      {/* Right side  */}
      <div className="mt-8 min-w-80">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/* Text payment method selection */}
          <div className="flex flex-col gap-3 lg:flex-row">
            <div onClick={()=>setmethod('stripe')} className="flex items-center gap-3 border border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
              <img
                className="h-5 mx-4"
                src={assets.stripe_logo}
                alt="Stripe Logo"
              />
            </div>
            <div onClick={()=>setmethod('Razorpay')} className="flex items-center gap-3 border border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'Razorpay' ? 'bg-green-400' : ''}`}></p>
              <img
                className="h-5 mx-4"
                src={assets.razorpay_logo}
                alt="razorpay Logo"
              />
            </div>
            <div onClick={()=>setmethod('Cash on delivery')} className="flex items-center gap-3 border border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'Cash on delivery' ? 'bg-green-400' : ''}`}></p>
              <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button onClick={()=>Navigate('/Orders')} className="bg-black text-white text-sm px-16 py-3 cursor-pointer">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
