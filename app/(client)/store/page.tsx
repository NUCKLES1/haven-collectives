import { getAllCategories, getAllProducts } from '@/sanity/helpers'
import React from 'react'
import ProductList from './ProductList';

export default async function page () {
  const products = await getAllProducts();
  const categories = await getAllCategories();
  return (
    <div className='h-screen w-full pt-20'>
    <ProductList products={products} title={true} categories={categories}/>
    </div>
  )
}

