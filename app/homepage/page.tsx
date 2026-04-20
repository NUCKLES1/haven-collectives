import React from "react";
import { Hero } from "./Hero";
import About from "./About";
import Product from "./our-product/Product";

const Homepage = () => {
  return (
    <div className="bg-[#ffffff]">
      {/*
      <div className="flex flex-col items-center justify-center h-screen bg-black py-30">
        <h1 className="logo-text">HAVEN HOUSE</h1>
        <div className="flex items-center gap-4 mt-2">
          <div className="line" /> al
          <span className="logo-sub">COLLECTIVE</span>
          <div className="line" />
        </div>
      </div>
        */}
      <Hero />
      <About />
      <Product />
    </div>
  );
};

export default Homepage;
