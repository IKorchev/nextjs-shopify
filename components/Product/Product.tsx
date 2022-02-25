import Link from 'next/link'
import React, { useState } from 'react'
import { Product } from './ProductType'

type Props = {
  product: Product
}

const SingleProduct = ({ product }: Props) => {
  const { node } = product
  const { title, priceRange, handle } = node
  const { amount } = priceRange.minVariantPrice
  const { url } = node.variants.edges[0].node.image
  const href = `/product/${handle}`

  return (
    <div
      data-testid="product"
      className="mx-auto flex w-full max-w-max  flex-col items-center justify-center rounded-md bg-gray-700"
    >
      <Link href={href}>
        <a
          role="navigation"
          className="transition duration-300 hover:opacity-75 focus:opacity-75"
        >
          <img
            className="h-72 w-72 rounded-md object-cover  xl:h-80 "
            src={url}
            alt="product image"
          />
        </a>
      </Link>

      <Link href={href}>
        <a role="navigation" className="mt-2">
          <h3 className="truncate text-lg font-medium text-gray-700 hover:text-gray-100 focus:text-gray-100 dark:text-gray-200">
            {title}
          </h3>
        </a>
      </Link>
      <p
        data-testid="price"
        className="mt-3 text-center font-bold text-gray-900 dark:text-white"
      >
        ${amount}
      </p>
      <div className="w-full px-5 py-3">
        <a
          role="navigation"
          href={href}
          className="mx-2 flex w-full transform items-center justify-center rounded-md bg-gray-800 px-2 py-2 font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-1"
        >
          <svg
            className="mr-2 -ml-1 h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
          </svg>
          Buy now
        </a>
      </div>
    </div>
  )
}

export default SingleProduct
