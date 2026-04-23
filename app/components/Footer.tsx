"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

export const Footer = () => {
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);
  const [isCoreOpen, setIsCoreOpen] = useState(false);

  const pathname = usePathname();
  const pages = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const shop = [
    { href: "/1", label: "Fashion" },
    { href: "/2", label: "Fragrance" },
    { href: "/3", label: "Jewelry" },
    { href: "/4", label: "Lifestyle" },
    { href: "/5", label: "Personal Care" },
  ];

  return (
    <div className="pb-6 w-full lg:px-20 px-4 mt-20">
      <div className="lg:flex justify-between">
        <div className="flex flex-col gap-4">
          <span className="font-semibold max-sm:text-black text-xl">HHC</span>
          <p>Luxury in Every Detail, Crafted for Timeless Style.</p>
          <div className="p-1 w-75 border border-gray-400 rounded-md">
            <input
              type="text"
              placeholder="Enter your email"
              className="py-2.5 pl-2 max-sm:w-45"
            />
            <button className="text-white bg-black px-4 py-2.5 rounded-md">
              Subscribe
            </button>
          </div>
        </div>
        <div className="lg:flex gap-20 max-sm:mt-10">
          <div className="flex flex-col gap-4">
            <button
              type="button"
              className="w-full text-left text-lg md:cursor-default max-sm:py-4 flex items-center gap-2 md:pb-4 lg:hidden"
              onClick={() => setIsQuickLinksOpen(!isQuickLinksOpen)}
            >
              Pages
              <span className="md:hidden mt-1">
                {isQuickLinksOpen ? (
                  <IoChevronUp className="text-xl" />
                ) : (
                  <IoChevronDown className="text-xl" />
                )}
              </span>
            </button>
            <h1 className="text-lg max-sm:hidden">Pages</h1>
            <ul className="flex flex-col gap-3 max-sm:hidden">
              {pages.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <a key={link.href}>
                    <Link
                      href={link.href}
                      className={` rounded-md hover:text-indigo-300 duration-300 ${
                        isActive
                          ? " text-indigo-300  font-semibold underline"
                          : "text-black hover:text-indigo-300 duration-300 hover:underline"
                      }`}
                    >
                      {link.label}
                      {isActive && link.href === "/" ? "" : ""}
                    </Link>
                  </a>
                );
              })}
            </ul>
            <ul
              className={`pl-0 mt-2 md:mt-0  flex flex-col max-sm:gap-6 underline lg:hidden pb-6 gap-4 ${isQuickLinksOpen ? "block" : "hidden md:flex"}`}
            >
              {pages.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <a key={link.href}>
                    <Link
                      href={link.href}
                      className={` rounded-md hover:text-indigo-300 duration-300 ${
                        isActive
                          ? " text-indigo-300  font-semibold underline"
                          : "text-black hover:text-indigo-300 duration-300 hover:underline"
                      }`}
                    >
                      {link.label}
                      {isActive && link.href === "/" ? "" : ""}
                    </Link>
                  </a>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <button
              type="button"
              className="w-full text-left text-lg md:cursor-default max-sm:py-4 flex items-center lg:hidden gap-2 md:pb-4"
              onClick={() => setIsCoreOpen(!isCoreOpen)}
            >
              Shop
              <span className="md:hidden mt-1">
                {isCoreOpen ? (
                  <IoChevronUp className="text-xl" />
                ) : (
                  <IoChevronDown className="text-xl" />
                )}
              </span>
            </button>
            <h1 className="text-lg max-sm:hidden">Shop</h1>
            <ul className="flex flex-col gap-3 max-sm:hidden">
              {shop.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <a key={link.href}>
                    <Link
                      href={link.href}
                      className={` rounded-md hover:text-indigo-300 duration-300 ${
                        isActive
                          ? " text-indigo-300  font-semibold"
                          : "text-black hover:text-indigo-300 duration-300"
                      }`}
                    >
                      {link.label}
                      {isActive && link.href === "/" ? "" : ""}
                    </Link>
                  </a>
                );
              })}
            </ul>
            <ul
              className={`pl-0 mt-2 md:mt-0  flex flex-col max-sm:gap-6 lg:hidden underline pb-6 gap-3 ${isCoreOpen ? "block" : "hidden md:flex"}`}
            >
              {shop.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <a key={link.href}>
                    <Link
                      href={link.href}
                      className={` rounded-md hover:text-indigo-300 duration-300 ${
                        isActive
                          ? " text-indigo-300  font-semibold"
                          : "text-black hover:text-indigo-300 duration-300"
                      }`}
                    >
                      {link.label}
                      {isActive && link.href === "/" ? "" : ""}
                    </Link>
                  </a>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 max-sm:mt-6">
          <h1 className="text-lg ">Contact</h1>
          <div className="flex flex-col gap-3">
            <a href="mailto:info@safehavenresidentialservice.com">
              <div className="">
                <div className="flex">
                  <h1 className="">Email:</h1>
                  <p className="underline pl-2">info@havenhouse.com</p>
                </div>
              </div>
            </a>
            <a href="mailto:info@safehavenresidentialservice.com">
              <div className="">
                <div className="flex">
                  <h1 className="">Contact:</h1>
                  <p className="pl-2">123456789</p>
                </div>
              </div>
            </a>
          </div>
          <div className=" flex gap-4">
            <div className="h-10 w-10 border border-[#d9d9d9bb] rounded-xl p-2 cur hover:text-white hover:bg-black duration-300">
              <BsTwitterX className="text-2xl" />
            </div>
            <a href="https://www.facebook.com/share/18Dd9ivRmT/">
              <div className="h-10 w-10 border border-[#d9d9d9bb] rounded-xl p-2 cur hover:text-white hover:bg-black duration-300">
                <FaFacebookSquare className="text-2xl" />
              </div>
            </a>
            <a href="https://www.instagram.com/safehaven.residential?utm_source=qr&igsh=MWtxc25nczQybnNwMA==">
              <div className="h-10 w-10 border border-[#d9d9d9bb] rounded-xl p-2 cur hover:text-white hover:bg-black duration-300">
                <RiInstagramFill className="text-2xl " />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full mt-10 md:mt-16 border-t border-[#d9d9d9bb] md:flex justify-between">
        <div className="mt-4">
          <p className="text-sm text-black">
            © 2026 Haven-House
            <span className="text-[6px]  absolute -ml-1">TM</span>.{" "}
            <span className="pl-1"></span> All rights reserved.
          </p>
        </div>
        <div className="flex gap-4 mt-4">
          <Link href="">
            <p className="text-sm text-black hover:underline duration-300 cur">
              Privacy Policy
            </p>
          </Link>
          <Link href="">
            <p className="text-sm text-black hover:underline duration-300 cur">
              Terms of Service
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
