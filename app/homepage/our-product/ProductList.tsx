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
    <div className=''>
      <Categories categories={categories}/>
      <div>
        <div className='grid lg:grid-cols-3 grid-cols-2 lg:gap-4 gap-4 max-sm:mt-10'>
         {products?.map((product)=> <ProductCard key={product?._id} product={product}/>)}
        </div>
      </div>
    </div>
  )
}

export default ProductList