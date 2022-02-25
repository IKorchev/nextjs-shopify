import Link from 'next/link'
import React from 'react'
import { Product } from './Product/ProductType'
import SingleProduct from './Product/Product'
type Props = {
  products: Product[]
}

const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <div className="">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-extrabold tracking-tight text-gray-800 dark:text-gray-100 lg:text-left">
          Our products
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.length &&
            products?.map((el) => {
              return <SingleProduct key={el.node.id} product={el} />
            })}
        </div>
      </div>
    </div>
  )
}

export default ProductList
