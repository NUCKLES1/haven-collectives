"use client";

import React from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import Image from "next/image";
import fashion from "../../public/fashion.png";
import outfit from "../../public/outfit.png";
import outfit1 from "../../public/outfit1.png";

export const Hero = () => {
  return (
    <>
      <div className="overflow-hidden relative h-screen w-full text-white max-sm:mt-30">
        <div className="px-6 lg:hidden">
          <div>
            <p className="w-70 text-2xl text-black">
              Inspired by the city. Designed for modern lives
            </p>
          </div>
          <div className="mt-6">
            <button className="py-3 bg-linear-to-t from-[#4d2c4d] to-indigo-400 px-8 hover:duration-300 font-bold rounded-full shadow-2xl cur hover:from-indigo-500 hover:scale-95">
              Shop Now
            </button>
          </div>
        </div>
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-screen w-full px-6 lg:px-16 lg:bg-linear-to-t from-[#4d2c4d] to-[#0a0a0a] font-sans max-sm:pt-30 absolute inset-0 flex overflow-hidden max-sm:mt-28"
        >
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="font-bold leading-10 tracking-wider text-white z-40 lg:z-10 relative scale-y-150 fj"
              style={{
                letterSpacing: "0.01em",
                textAlign: "center",
                width: "100%", // take full width
                fontSize: "11.3vw", // responsive font size based on viewport width
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              COLLECTIVES
            </motion.h1>
            <div className="w-full flex justify-between lg:pt-25 max-sm:pt-40">
              <div className="w-auto relative z-50">
                <div>
                  <p className="w-70 text-xl max-sm:hidden">
                    Inspired by the city. Designed for modern lives
                  </p>
                </div>
                <div className="mt-6">
                  <button className="py-3 bg-linear-to-t from-[#4d2c4d] to-indigo-400 px-8 hover:duration-300 font-bold rounded-full shadow-2xl cur hover:from-indigo-500 hover:scale-95 max-sm:hidden">
                    Shop Now
                  </button>
                </div>
                <div className="pt-10 uppercase">
                  <p className="text-sm font-bold">collective vibes</p>
                  <p className="tracking-wider">define your style</p>
                </div>
              </div>
              <div className="mt-15 relative z-50 text-right">
                <div className="bg-indigo-300 shadow-2xl pt-4 px-6 rounded-xl overflow-hidden">
                  <Image
                    src={outfit1}
                    width={60}
                    height={60}
                    alt=""
                    className="object-contain overflow-hidden hover:scale-110"
                  />
                </div>
                <h1 className="font-semibold pt-4">COLLECTIONS</h1>
                <p>2026</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="z-30 relative lg:mx-auto w-full max-sm:w-[95%] max-sm:bg-linear-to-t mx-2 from-[#4d2c4d] to-[#0a0a0a] max-sm:rounded-2xl max-sm:h-120 max-sm:overflow-hidden max-sm:mt-14"
        >
          <Image
            src={fashion}
            width={400}
            height={600}
            alt=""
            className="object-cover mt-10 z-50 relative mx-auto max-sm:scale-70 max-sm:-mt-6"
          />
        </motion.div>
        <div className="w-full">
          <div className="-mt-120 h-90 w-60 relative lg:z-20 mx-auto max-sm:scale-50">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className=" bg-white/20 backdrop-blur-md border border-white/30 w-65 p-2 rounded-2xl h-full ml-30 rotate-25"
            >
              <div className="w-full h-full bg-[#fefefe] rounded-2xl overflow-hidden">
                <Image
                  src={outfit}
                  width={300}
                  height={300}
                  alt=""
                  className="object-cover z-10 h-110 relative mx-auto"
                />
              </div>
              <div className="w-15 h-15 text-center pt-5 uppercase text-sm font-semibold text-indigo-400 rounded-full bg-white shadow-2xl -top-25 relative z-20 ml-45 cur hover:bg-indigo-400 hover:text-white duration-300">
                new
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
