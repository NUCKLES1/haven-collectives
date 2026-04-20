import { Category, Product } from '@/sanity.types'
import React from 'react'
import Categories from './Categories';
import ProductCard from './ProductCard';

interface Props {
  products: Product[];
  title?:boolean 
  categories: Category[];
}

const ProductList = ({products, title, categories}: Props) => {
  return (
    <div className='bg-amber-200 px-20'>
      <Categories categories={categories}/>
      <div>
        <div className='grid grid-cols-3'>
         {products?.map((product)=> <ProductCard key={product?._id}/>)}
        </div>
      </div>
    </div>
  )
}

export default ProductList