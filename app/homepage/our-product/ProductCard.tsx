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
import Link from "next/link";
import ProductCartBar from "./ProductCartBar";
import PriceView from "./PriceView";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const isStock = product?.stock !== 0;

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
        <div className="lg:h-100 h-60 rounded-xl overflow-hidden group relative">
          {product?.image?.length ? (
            <Link href={`/product/${product?.slug?.current}`}>
              <Image
                src={urlFor(product.image[0]).url()}
                width={500}
                height={500}
                alt={product.name ?? "product image"}
                loading="lazy"
                className={`w-full h-100 duration-300 object-cover rounded-xl ${product?.stock !== 0 && "hover:scale-105"}`}
              />
            </Link>
          ) : null}
          {product?.stock === 0 && (
            <div className=" h-100 w-full bg-black/40 relative -mt-100 flex items-center justify-center z-50">
              <p className="text-white text-3xl">out of stock</p>
            </div>
          )}
          {product?.stock !== 0}
          <div className="pt-2 h-10 w-20 bg-linear-to-l from-[#4d2c4d] to-indigo-400 text-white -mt-92 ml-6 relative z-30 text-sm text-center rounded-sm uppercase">
            <p>{product.status}</p>
          </div>
          {isStock && (
            <div className="absolute -bottom-10 group-hover:-translate-y-15 transition-transform duration-300 ease-out w-full">
              <ProductCartBar />
            </div>
          )}
        </div>
        <div className="mt-2">
          <div className="text-black lg:text-2xl text-xl uppercase">
            {product.name}
          </div>
          <div className="text-black lg:text-xl"><PriceView price={product?.price} discount={product?.discount} label={product?.label}/></div>
        </div>
      </motion.div>
    </>
  );
};

export default ProductCard;
