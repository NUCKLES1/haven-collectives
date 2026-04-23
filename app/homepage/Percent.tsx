"use client";

import React from "react";
import { PiStarFourFill } from "react-icons/pi";
import Image from "next/image";
import outfit from "../../public/outfit.png";
import { motion } from "framer-motion";

const Percent = () => {
  return (
    <div className="h-auto pb-20 mt-30">
      <div className="lg:w-[150%] w-400 py-6 bg-linear-to-l from-[#4d2c4d] to-indigo-400 flex uppercase overflow-hidden rotate-2 -ml-10">
        <div>
          <p className="ml-14 flex text-white text-2xl">
            get one 50% off <PiStarFourFill className="mt-1 ml-4" />
          </p>
        </div>
        <div>
          <p className="ml-4 flex text-white text-2xl">
            get one 50% off <PiStarFourFill className="mt-1 ml-4" />
          </p>
        </div>
        <div>
          <p className="ml-4 flex text-white text-2xl">
            get one 50% off <PiStarFourFill className="mt-1 ml-4" />
          </p>
        </div>
        <div>
          <p className="ml-4 flex text-white text-2xl">
            get one 50% off <PiStarFourFill className="mt-1 ml-4" />
          </p>
        </div>
        <div>
          <p className="ml-4 flex text-white text-2xl">
            get one 50% off <PiStarFourFill className="mt-1 ml-4" />
          </p>
        </div>
      </div>
      <div className="lg:px-20 px-4 lg:mt-20">
        <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-4 gap-4 max-sm:mt-10">
          <div className="bg:border-gray-300 group text-sm">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="lg:h-100 h-60 rounded-xl overflow-hidden"
            >
              <div className="w-20 max-sm:w-23 rounded-md text-white bg-linear-to-l from-[#4d2c4d] to-indigo-400 px-3 py-2  z-10 uppercase absolute  lg:mt-6 mt-2 lg:ml-6 ml-2">
                50% off
              </div>
              <Image
                src={outfit}
                width={500}
                height={500}
                alt=""
                loading="lazy"
                className="w-full h-100 duration-300 object-cover rounded-xl hover:scale-105"
              />
            </motion.div>

            <div className="mt-2">
              <div className="text-black lg:text-2xl text-xl uppercase">
                brown suit
              </div>
              <div className="text-black lg:text-xl">$75.00</div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="bg:border-gray-300 group text-sm"
          >
            <div className="lg:h-100 h-60 rounded-xl overflow-hidden ">
              <div className="w-20 max-sm:w-23 rounded-md text-white bg-linear-to-l from-[#4d2c4d] to-indigo-400 px-3 py-2 z-10 uppercase absolute  lg:mt-6 mt-2 lg:ml-6 ml-2">
                50% off
              </div>
              <Image
                src={outfit}
                width={500}
                height={500}
                alt=""
                loading="lazy"
                className="w-full h-100 duration-300 object-cover rounded-xl hover:scale-105"
              />
            </div>

            <div className="mt-2">
              <div className="text-black lg:text-2xl text-xl uppercase">
                brown suit
              </div>
              <div className="text-black lg:text-xl">$75.00</div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="bg:border-gray-300 group text-sm"
          >
            <div className="lg:h-100 h-60 rounded-xl overflow-hidden ">
              <div className="w-20 max-sm:w-23 rounded-md text-white bg-linear-to-l from-[#4d2c4d] to-indigo-400 px-3 py-2  z-10 uppercase absolute lg:mt-6 mt-2 lg:ml-6 ml-2">
                50% off
              </div>
              <Image
                src={outfit}
                width={500}
                height={500}
                alt=""
                loading="lazy"
                className="w-full h-100 duration-300 object-cover rounded-xl hover:scale-105"
              />
            </div>

            <div className="mt-2">
              <div className="text-black lg:text-2xl text-xl uppercase">
                brown suit
              </div>
              <div className="text-black lg:text-xl">$75.00</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Percent;
