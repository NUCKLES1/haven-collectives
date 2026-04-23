"use client";

import Image from "next/image";
import React from "react";
import profile from "../../public/outfit.png";
import { Star } from "lucide-react";
import { PiListStarFill } from "react-icons/pi";
import { StarFilledIcon } from "@sanity/icons";
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <div className="lg:h-screen mt-20 lg:px-20 px-4">
      <div className="w-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="uppercase text-indigo-400 lg:text-6xl text-4xl"
        >
          reflections of excellence
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="pt-6 text-gray-500"
        >
          Real Stories That Reflect Our Dedication To Quality, Craftmanship, And
          Modern Style.
        </motion.p>
      </div>
      <div className="w-full mt-16 lg:hidden">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src={profile}
            width={500}
            height={500}
            alt=""
            className="rounded-3xl h-120 w-full object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          className="bg-white h-50 -mt-52.5 relative w-[95%] rounded-3xl p-4 mx-auto"
        >
          <div>
            <p className="">
              Clean Designs, Great Fit, And Amazing Fabric Quality - HAVEN-HOUSE
              Has Become My Everyday Style Choice.
            </p>
            <div className="flex mt-6">
              <div>
                <Image
                  src={profile}
                  width={500}
                  height={500}
                  alt=""
                  className="rounded-full h-10 w-10 object-cover mt-1"
                />{" "}
              </div>
              <div className="ml-4 ">
                <h1 className="text-xl">Ella Thompson</h1>
                <p>Marketing Executive, United States</p>
                <div className="flex">
                  <StarFilledIcon className="h-6 w-6 text-amber-300" />
                  <StarFilledIcon className="h-6 w-6 text-amber-300" />
                  <StarFilledIcon className="h-6 w-6 text-amber-300" />
                  <StarFilledIcon className="h-6 w-6 text-amber-300" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-10 max-sm:hidden">
        <div>
          <div className="w-full bg-linear-to-l from-[#4d2c4d] to-indigo-400 h-60 rounded-2xl text-center pt-24 text-2xl text-white">
            <p>Premium Feel, Perfect Fit.</p>
          </div>
          <div className="flex mt-37">
            <div>
              <Image
                src={profile}
                width={50}
                height={50}
                alt=""
                className="rounded-full h-10 w-10 object-cover"
              />{" "}
            </div>
            <div className="ml-4 ">
              <h1 className="text-xl">Ella Thompson</h1>
              <p>Marketing Executive, United States</p>
              <div className="flex">
                <StarFilledIcon className="h-6 w-6 text-amber-300" />
                <StarFilledIcon className="h-6 w-6 text-amber-300" />
                <StarFilledIcon className="h-6 w-6 text-amber-300" />
                <StarFilledIcon className="h-6 w-6 text-amber-300" />
              </div>
            </div>
          </div>
        </div>
        <div className="h-120 bg-indigo-400 rounded-2xl"></div>
        <div className="bg-linear-to-r from-[#4d2c4d] to-indigo-400 h-60 rounded-2xl mt-60 ">
          <p className="px-6 pt-20 text-white">
            Clean Designs, Great Fit, And Amazing Fabric Quality - HAVEN-HOUSE
            Has Become My Everyday Style Choice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
