import React from "react";
import "./styles.css";
import "./styles/tailwind-pre-build.css";

export default function Pdp1() {
  return (
    <div className="App">
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-5 px-4 sm:py-5u sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex justify-between items-center mb-5">
            <span className="font-bold text-xl">
              <img className="w-full" src="back.jpg" alt="back" />
            </span>

            <span className="flex font-bold text-xl">
              <img className="w-full px-2" src="discount.jpg" alt="logo" />
              <img className="w-full" src="save.jpg" alt="logo" />
            </span>
          </div>

          <div className="container1 w-full aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <img
              alt="imag"
              src="https://cdn.shopify.com/s/files/1/0026/5178/3237/products/charcoalBB-4_1080x.png?v=1640930452"
              className="w-full h-64 lg:h-1/2 object-center object-cover group-hover:opacity-75"
            />
          </div>
          <h1 className="text-2xl py-2">Luxome Lightweight Blanket</h1>
          <p className="text-1xl py-2">
            With a thinner profile than a traditional comforter, this perfectly
            soft & breathable quilted blanket will keep you comfortable all year
            round. The naturally thermal-regulating bamboo viscose fabric and
            fill is perfect for hot sleepers, while still providing adequate
            warmth in the cooler months.
          </p>
          <div className="mb-1 text-2xl font-medium flex">
            $330
            <span className="line-through px-2 text-gray-500">$350</span>
          </div>

          <div className="border-b"></div>

          <h1 className="text-1xl text-gray-500 py-2">OFFERS</h1>

          <div className="flex justify-between items-center">
            <span className="text-xl">Use code to get 20%</span>

            <div className="flex text-xl">
              <button class="border-1 p-3">GLIMPSE-KPI101</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}