import React from "react";
import { ShopContext } from "../context/ShopContext";
import { useContext, useState, useEffect } from "react";
import Title from "./Title";
import Product from "../pages/Product";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"BEST"} text2={"SELLER"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut
          erat nec enim efficitur facilisis. Donec ac ligula id nunc tincidunt
          convallis.
        </p>
      </div>
    
        {/* Rendring Products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
            bestSeller.map((item,index) => (
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
        }
        </div>

    </div>
  );
};

export default BestSeller;
