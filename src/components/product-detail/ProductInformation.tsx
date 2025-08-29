import React from "react";
import { FaStar } from "react-icons/fa";

const ProductInformation = () => {
  const dataSize = ["20ML","30ML","50ML","70ML","100ML"]
  return (
    <section className="container mx-auto px-6 ">
      <div className="grid grid-cols-2">
        <div className="grid grid-cols-1 gap-y-3 relative overflow-hidden">
          <img src="./img/product-list/bn1.jpg" className="w-full" alt="" />
          <div className="flex gap-x-3">
            <img src="./img/product-list/1.png" className="w-40" alt="" />
            <img src="./img/product-list/1.png" className="w-40" alt="" />
            <img src="./img/product-list/1.png" className="w-40" alt="" />
            <img src="./img/product-list/1.png" className="w-40" alt="" />
          </div>
        </div>
        <div className="ps-10 flex flex-col justify-between text-white">
          <div className="flex flex-col gap-y-2">
            <span className="title font-bold text-3xl text-white">awfwa</span>
            <div className="flex gap-x-1">
              {[...Array(3)].map((_, i) => (
                <>
                  {" "}
                  <FaStar key={i} size={"1.5em"} className="text-yellow-400" />
                </>
              ))}
            </div>
            <span>
              <strong className="">availability:</strong> in Stock
            </span>
            <span className="text-4xl py-2">23.000 IDR</span>

            <ul className="list-disc list-inside">
              <li>w</li>
              <li>2</li>
              <li>w</li>
            </ul>
            <div className="h-60 overflow-scroll">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
                perferendis itaque voluptate rerum eaque, voluptatum autem
                reprehenderit dolores eligendi. Dolorem.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div className="flex flex-col">
                <span>Size :</span>
                <div className="flex flex-wrap gap-x-2">
                  {
                    
                  }
                  <div>

                  </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInformation;
