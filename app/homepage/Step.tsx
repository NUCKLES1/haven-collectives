import React from "react";
import Image from "next/image";
import outfit from "../../public/fashion.png";
import outfit1 from "../../public/outfit1.png";

const Step = () => {
  return (
    <>
    <div className="lg:mx-10 lg:mt-30 mt-20 mx-4 text-center h-90 bg-linear-to-l from-[#4d2c4d] to-[#0a0a0a] rounded-3xl text-white flex overflow-hidden justify-between">
      <div className="max-sm:-ml-40">
        <Image
          src={outfit}
          width={500}
          height={500}
          alt=""
          className="rounded-3xl h-100 w-80 object-cover"
        />
      </div>
      <div className="w-[80%] mx-auto bg-transparent max-sm:hidden">
        <h1 className="lg:text-4xl text-2xl pt-10">
          Step Into a World of Timeless <br /> Elegance with Haven-House
        </h1>
        <p className="text-gray-300 pt-4">
          Experience the harmony of luxury design and <br /> purposeful
          craftmanship.
        </p>
        <div className="p-1 mx-auto mt-10 lg:w-85 border border-indigo-400 rounded-md bg-white text-black">
          <input
            type="text"
            placeholder="Search here..."
            className="py-2.5 pl-2 max-sm:w-46 text-black"
          />
          <button className="text-white bg-black px-4 py-2.5 rounded-md">
            search
          </button>
        </div>
      </div>
      <div className="max-sm:-mr-40">
        <Image
          src={outfit1}
          width={500}
          height={500}
          alt=""
          className="rounded-3xl h-100 w-80 max-sm:w-full object-cover "
        />
      </div>
    </div>
    <div className="w-[80%] mx-auto text-center bg-transparent -mt-80">
        <h1 className="lg:text-4xl text-2xl pt-10 text-white">
          Step Into a World of Timeless <br /> Elegance with Haven-House
        </h1>
        <p className="text-gray-300 pt-4">
          Experience the harmony of luxury design and <br /> purposeful
          craftmanship.
        </p>
        <div className="p-1 mx-auto mt-10 lg:w-85 border border-indigo-400 rounded-md bg-white text-black relative z-10">
          <input
            type="text"
            placeholder="Search here..."
            className="py-2.5 pl-2 max-sm:w-46 text-black"
          />
          <button className="text-white bg-black px-4 py-2.5 rounded-md">
            search
          </button>
        </div>
      </div>
      </>
  );
};

export default Step;
