import Image from "next/image";
import React from "react";
import guy from "../../public/fashion.png";

const page = () => {
  return (
    <div className="px-10 pt-20">
      <div>
        <ul className="w-full flex uppercase justify-between">
          <li className="cur hover:text-indigo-400 duration-300">
            all category
          </li>
          <li className="cur hover:text-indigo-400 duration-300">fashion</li>
          <li className="cur hover:text-indigo-400 duration-300">fragrance</li>
          <li className="cur hover:text-indigo-400 duration-300">jewelry</li>
          <li className="cur hover:text-indigo-400 duration-300">life style</li>
          <li className="cur hover:text-indigo-400 duration-300">
            personal care
          </li>
        </ul>
      </div>
      <div className="flex gap-4 h-[90vh] mt-4">
        <div className="w-[60%] flex overflow-hidden bg-purple-200 p-6">
          <div className="w-[50%] mt-[42vh]">
            <div className="w-full">
              <h1 className="uppercase text-xl">
                <span className="text-8xl">50%</span> off
              </h1>
              <p className="text-gray-600">
                Discover quality fashion that reflects your style and make
                everyday living more enjoyable.
              </p>
            </div>
            <button className="uppercase mt-6 bg-black text-white px-6 py-2.5 rounded-md cur">
              Explore product
            </button>
          </div>
          <div className="mt-4">
            <Image src={guy} alt="" />
          </div>
        </div>
        <div className="w-[40%] flex flex-col gap-4">
          <div className="w-full h-1/2 bg-pink-200 overflow-hidden p-6">
            <div className="flex">
              <div className="mt-2 w-1/2">
                <Image src={guy} alt="" />
              </div>
              <div className="w-1/2 items-end">
                <div className="ml-8">
                  <button className="uppercase text-black text-sm border px-4 py-2">
                    for new commerce
                  </button>
                </div>
                <div className="text-right uppercase text-3xl pt-4">
                  <h1>
                    exclusive <br /> offer
                  </h1>
                </div>
              </div>
            </div>
            <div className="-mt-33 h-12 w-full bg-white relative z-20 px-4 py-2 flex">
              <p className="text-sm leading-4">
                Welcome for new commerce, we have special offer! claim now!
              </p>
              <button className="text-white bg-black hover:bg-white text-sm hover:border hover:border-black hover:text-black px-4 py-1 cur duration-300 rounded-full">
                Explore
              </button>
            </div>
          </div>
          <div className="w-full h-1/2 bg-blue-200 p-6 overflow-hidden">
            <div className="uppercase text-gray-600 justify-between flex">
              <p>new arrival</p>
              <p>2026</p>
            </div>
              <div className="-mt-8 w-1/2 mx-auto scale-90">
                <Image src={guy} alt=""/>
              </div>
              <div className="text-3xl uppercase w-1/2 -mt-35 relative z-20">
                <p>browse accessories</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
