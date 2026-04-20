"use client";

import { useEffect, useState, useRef } from "react";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image";
import { LiaTimesSolid } from "react-icons/lia";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../public/logo.png";
import { CgShoppingCart } from "react-icons/cg";
import { currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, SignInButton, UserButton } from "@clerk/nextjs";
import { SignIn } from "@clerk/nextjs";
import { User } from "lucide-react";

export const Header = () => {
  //const user = await currentUser();
  const [isStyled, setIsStyled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showPhonePopup, setShowPhonePopup] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isStyled) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isStyled]);

  const toggleStyle = () => {
    setIsStyled(!isStyled);
  };

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "Shop" },
    { href: "/service", label: "Fashion" },
    { href: "/contact", label: "About" },
  ];
  return (
    <div className="lg:px-16 px-6 w-full h-20 py-4 pt-10 fixed z-100 max-sm:bg-white">
      <div className="w-full flex">
        <span className="font-semibold max-sm:text-black lg:hidden text-xl">
          HHC
        </span>
        <div className="w-[50%]">
          <ul className="lg:flex gap-4 hidden md:hidden text-white uppercase text-sm max-sm:hidden">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={` rounded-md hover:text-indigo-300 duration-300 ${
                      isActive
                        ? " text-indigo-300  font-bold"
                        : "text-white hover:text-indigo-300 duration-300"
                    }`}
                  >
                    {link.label}
                    {isActive && link.href === "/" ? "" : ""}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex justify-between w-1/2">
          <div>
            <span className="logo-sub max-sm:hidden">HHC</span>
          </div>
          <div className="max-sm:hidden">
            <CgShoppingCart />
            <div>
              <p>
                <span>0</span> items
              </p>
              <p>Cart</p>
            </div>
           
            {/* <ClerkLoaded>
              <SignIn></SignIn>
              {user ? (
                <div>
                  <UserButton />
                  <div>
                    <p>Welcome Back</p>
                    <p>{user?.fullName}</p>
                  </div>
                </div>
              ) : (
                <SignInButton>
                  <div>
                    <User />
                    <div>
                      <p>Welcome Back</p>
                    </div>
                  </div>
                </SignInButton>
              )}
            </ClerkLoaded>
            */}
          </div>
            <div
            className="text-bold rounded-full text-2xl gap-1 flex cursor-pointer"
            onClick={toggleStyle}
          >
            <CiMenuFries size={30} className=" max-sm:block text-black" />
          </div>
        </div>
      </div>
       <div
        style={{
          width: isStyled ? (isMobile ? "105%" : "30%") : "0",
          position: "fixed",
          opacity: isStyled ? "1" : "1",
          transition: "width 0.5s ease-in-out",
        }}
        className="absolute overflow-hidden bg-black bg-opacity-[0.5] right-0 h-screen z-120 rounded-tl-xl rounded-bl-xl bottom-0"
      >
        <div className="w-full px-8 md:px-4 pt-18 lg:pr-10">
          <div
            onClick={toggleStyle}
            className="flex gap-3 text-white text-xl font-bold cursor-pointer justify-end"
          >
            <button>Close</button>
            <LiaTimesSolid size={30} />
          </div>
          <div>
         
          </div>
        </div>
      </div>
      <div
        style={{
          position: isStyled ? "fixed" : "absolute",
          opacity: isStyled ? "1" : "0",
          height: isStyled ? "100vh" : "0",
          display: isStyled ? "block" : "none",
          background:
            "linear-gradient(111deg, rgba(0, 0, 0, .8) 1.21%, rgba(0, 0, 0, .32))",
        }}
        onClick={toggleStyle}
        className="hidden
          top-0 left-0 z-80 w-full bg-[#00000078]"
      ></div>
    </div>
  );
};
