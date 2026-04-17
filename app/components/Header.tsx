"use client";

import { useEffect, useState, useRef } from "react";
import { IoIosMenu } from "react-icons/io";
import Image from "next/image";
import { LiaTimesSolid } from "react-icons/lia";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../public/logo.png";
import { CgShoppingCart } from "react-icons/cg";

export const Header = () => {
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
    <div className="px-16 w-full h-20 py-4 pt-10 fixed z-100">
      <div className="w-full flex">
        <div className="w-[50%]">
          <ul className="lg:flex gap-4 hidden md:hidden text-white uppercase text-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={` rounded-md hover:text-indigo-300 duration-300 ${
                      isActive
                        ? " text-indigo-300  font-semibold"
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
            <span className="logo-sub">HHC</span>
          </div>
          <div><CgShoppingCart />
          <div>
            <p>
              <span>0</span> items
            </p>
            <p>Cart
              
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
