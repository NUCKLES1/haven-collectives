import { Product } from '@/sanity.types'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'


interface Props{
    product:Product
}

const ProductCard = ({product}:Props) => {
  return (
    <div className='bg:border-gray-300 group text-sm'>
        <div className='lg:h-100 h-60 rounded-xl overflow-hidden '>
        {product?.image?.length ? (
             <Image
               src={urlFor(product.image[0]).url()}
               width={500}
               height={500}
               alt={product.name ?? 'product image'}
               loading='lazy'
               className='w-full h-100 duration-300 object-cover rounded-xl hover:scale-105'
             />
        ) : null}
        </div>
        <div className='mt-2'>
        <div className='text-black lg:text-2xl text-xl uppercase'>{product.name}</div>
        <div className='text-black lg:text-xl'>${product.price}</div>
        </div>
    </div>
  )
}

export default ProductCard