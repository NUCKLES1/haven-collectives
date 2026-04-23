"use client";

import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="bg:border-gray-300 group text-sm"
      >
        <div className="lg:h-100 h-60 rounded-xl overflow-hidden ">
          {product?.image?.length ? (
            <Image
              src={urlFor(product.image[0]).url()}
              width={500}
              height={500}
              alt={product.name ?? "product image"}
              loading="lazy"
              className="w-full h-100 duration-300 object-cover rounded-xl hover:scale-105"
            />
          ) : null}
        </div>
        <div className="mt-2">
          <div className="text-black lg:text-2xl text-xl uppercase">
            {product.name}
          </div>
          <div className="text-black lg:text-xl">${product.price}</div>
        </div>
      </motion.div>
    </>
  );
};

export default ProductCard;
