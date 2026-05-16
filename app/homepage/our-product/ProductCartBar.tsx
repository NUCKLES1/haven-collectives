import React from 'react'
import { FaRegEye } from 'react-icons/fa';
import { MdFavoriteBorder } from "react-icons/md";
import { HiArrowsRightLeft } from "react-icons/hi2";
import { RiShoppingBag4Fill } from 'react-icons/ri';

const ProductCartBar = () => {
  return (
    <div className='text-gray-500 text-lg flex items-center justify-center gap-2.5 mx-auto'>
        <div className='border shadow-md bg-white p-2 rounded-xl hover:bg-blue-400 hover:text-red-400'>
         <MdFavoriteBorder />   
        </div>
        <div className='border shadow-md bg-white p-2 rounded-xl hover:bg-blue-400 hover:text-red-400'>
         <FaRegEye />   
        </div>
        <div className='border shadow-md bg-white p-2 rounded-xl hover:bg-blue-400 hover:text-red-400'>
         <HiArrowsRightLeft />   
        </div>
        <div className='border shadow-md bg-white p-2 rounded-xl hover:bg-blue-400 hover:text-red-400'>
         <RiShoppingBag4Fill />   
        </div>
    </div>
  )
}

export default ProductCartBar