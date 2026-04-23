"use client";

import { ArrowRight, ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import React from "react";
import lady from "../../public/lady.png";
import { motion } from "framer-motion";

const Craft = () => {
  return (
    <div className="lg:px-20 px-4 h-auto lg:flex justify-between">
      <div className="lg:w-[45%] w-11/12">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:text-5xl text-4xl  uppercase text-indigo-400 tracking-wider"
        >
          the art of craftmanship
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex gap-4 mt-10"
        >
          <div className="h-10 w-10 rounded-full border-2 border-indigo-400 font-semibold py-1.5 lg:pl-2.5 pl-1.5">
            01
          </div>
          <div className="w-100">
            <h3 className="uppercase text-2xl">design & development</h3>
            <p className="text-gray-500">
              Our team refines and select premium fabrics, and perfects every
              detail to ensure comfort, fit, and timeless appeal.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex gap-4 mt-10"
        >
          <div className="h-10 w-10 rounded-full border-2 border-indigo-400 font-semibold py-1.5 lg:pl-2.5 pl-1.5">
            02
          </div>
          <div className="w-100">
            <h3 className="uppercase text-2xl">delivered with confidence</h3>
            <p className="text-gray-500">
              From packaging to presentation, we ensure your HAVEN-COLLECTIVES
              experience feels refined, effortless, and premium.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex gap-4 mt-10"
        >
          <div className="h-10 w-10 rounded-full border-2 border-indigo-400 font-semibold py-1.5 lg:pl-2.5 pl-1.5">
            03
          </div>
          <div className="w-100">
            <h3 className="uppercase text-2xl">quality check</h3>
            <p className="text-gray-500">
              Before reaching you, every garment undergoes strict inspection to
              ensure it meets HAVEN-HOUSE standards of fit, finish, and
              performance.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex mt-10 gap-2"
        >
          <button className=" bg-linear-to-l from-[#4d2c4d] to-indigo-400 px-12 hover:duration-300 rounded-full shadow-2xl cur hover:from-indigo-500 hover:scale-95 h-12 text-white">
            Find Your Style
          </button>
          <div className="h-12 w-12 rounded-full border-2 border-indigo-400 py-2 pl-2.5">
            <ArrowRight className="-rotate-45 h-6 w-6" />
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="lg:w-[53%] max-sm:mt-16"
      >
        <div className="[clip-path:path('M60px_0_H100%_V100%_H0_V60px_Q0_0_60px_0_Z')]">
          <Image
            src={lady}
            width={500}
            height={500}
            alt=""
            className="w-full object-cover rounded-3xl h-80 lg:h-160 shadow-inner border-t-4 border-l-4 border-r-2 border-b-2 border-white flex items-center justify-center "
          />
        </div>
        <div></div>
      </motion.div>
    </div>
  );
};

export default Craft;
