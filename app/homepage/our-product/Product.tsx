import { getAllCategories, getAllProducts } from '@/sanity/helpers'
import React from 'react'
import ProductList from './ProductList';

export default async function Product () {
  const products = await getAllProducts();
  const categories = await getAllCategories();
  return (
    <div className='h-screen w-full pt-30 lg:px-20 px-6'>
      <div className='uppercase text-black lg:text-5xl text-3xl'>
        <h1>Our collections</h1>
      </div>
    <ProductList products={products} title={true} categories={categories}/>
    </div>
  )
}
