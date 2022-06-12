import React from "react";
import "./styles.css";
import "./styles/tailwind-pre-build.css";
import Card1 from "./Card1";

export default function App() {
  return (
    <div class="App">
      <Card1 />

      <div class="bg-white">
        <div class="max-w-2xl mx-auto py-5 px-4 sm:py-5u sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 class="text-1xl font-extrabold tracking-tight text-gray-900">
            Customers also purchased
          </h2>
        </div>
      </div>
    </div>
  );
}
