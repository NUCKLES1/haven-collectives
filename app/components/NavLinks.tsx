"use client";

import { useEffect, useState, useRef } from "react";
import { IoIosMenu } from "react-icons/io";
import Image from "next/image";
import { LiaTimesSolid } from "react-icons/lia";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../public/logo.png";
import { CgShoppingCart } from "react-icons/cg";
import { currentUser } from "@clerk/nextjs/server";

const NavLinks = () => {
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
    

    
      const pathname = usePathname();
    
      const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "Shop" },
        { href: "/service", label: "Fashion" },
        { href: "/contact", label: "About" },
      ];
  return (

    <div>
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
  );
};

export default NavLinks;
