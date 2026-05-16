"use client";

import Image from "next/image";
import React from "react";
import lady from "../../public/lady.png";
import fragrance from "../../public/fragrance.png";
import necklace from "../../public/necklace.png";
import { motion } from "framer-motion";
import Link from "next/link";

const About = () => {
  return (
    <div className="h-auto lg:px-20 px-6 pt-20">
      <div className="justify-between lg:flex">
        <div>
          <Link href="/about">
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="border px-6 py-2 rounded-4xl bg-linear-to-l hover:from-[#4d2c4d] hover:to-indigo-400 lg:duration-300 hover:border-none hover:text-white cur"
            >
              About Us
            </motion.button>
          </Link>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-black text-xl lg:text-3xl w-full lg:w-[65%] lg:leading-10 max-sm:pt-10"
        >
          <p className="lg:pl-20 max-sm:hidden">
            HAVEN-HOUSE Stands At The Interesection Of
          </p>
          <p>
            {" "}
            <span className="lg:hidden">
              {" "}
              HAVEN-HOUSE Stands At The Interesection Of
            </span>
            Urban
            <span className="text-gray-400"> Cultural And Refined Design.</span>
            We Craft Elevanted Essentials.{" "}
            <span className="text-gray-400">
              {" "}
              That Balance Bold Expression
            </span>{" "}
            With Timeline Simplicity - Delivery Modern{" "}
            <span className="text-gray-400"> Wear For Modern Lives.</span>
          </p>
          <p></p>
        </motion.div>
      </div>
      <div className="lg:flex max-sm:mt-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:w-[60%]"
        >
          <div className="lg:flex">
            <Image
              src={lady}
              alt=""
              width={500}
              height={500}
              className="w-80 h-90 object-cover rounded-2xl"
            />
            <div className="ml-6 max-sm:-mt-20 mt-25">
              <motion.button
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="rabsolute bg-linear-to-l from-[#4d2c4d] to-indigo-400 px-8 hover:duration-300 font-bold rounded-full shadow-2xl cur hover:from-indigo-500 hover:scale-95 h-12 text-white"
              >
                Explore Collection
              </motion.button>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:w-[70%] mt-20"
          >
            <p className="text-lg text-gray-500">
              Elevate Your Everyday Style - Where Confidence Meets Comfort, And
              Simplicity Turns into Statement.
            </p>
            <div className="mt-6 flex gap-10 max-sm:hidden">
              <div className="max-sm:text-center">
                <h1 className="text-3xl font-semibold">430+</h1>
                <p className=" text-gray-500">Everyday Style</p>
              </div>
              <div className="max-sm:text-center">
                <h1 className="text-3xl font-semibold">311k</h1>
                <p className=" text-gray-500">Worldwide Customer</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:mt-45 mt-4 lg:w-[40%]"
        >
          <p className="lg:pl-10 text-gray-500 text-lg">
            At Haven House, We Believe Style Isn't Just What You Wear - It's How
            You Live. <br />
            Urban, Modern, Confident.
          </p>
          <div className="flex lg:gap-6 gap-2 lg:-ml-30 mt-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-[50%] max-sm:w-1/2 h-70 mt-10 max-sm:h-50"
            >
              <Image
                src={fragrance}
                alt=""
                width={500}
                height={500}
                className=" object-cover rounded-2xl w-full h-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-[50%] h-80 max-sm:w-1/2 max-sm:h-60"
            >
              <Image
                src={necklace}
                alt=""
                width={500}
                height={500}
                className=" object-cover rounded-2xl w-full h-full"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
