import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
  ],

  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
}

export default function Example() {
  return (
    <div>
      <div className="mx-auto flex bg-gray-900">
        {/* Image gallery */}
        <div className="max-w-[50rem] rounded-lg ">
          <img
            src={product.images[0].src}
            alt={product.images[0].alt}
            className="h-full w-full object-contain object-center"
          />
        </div>

        {/* Product info */}
        <div className="mx-auto  px-4 pt-10 pb-16 text-white sm:px-6 lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:pr-8">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-100 sm:text-3xl">
              {product.name}
            </h1>
            <div>
              <h3 className="sr-only">Description</h3>
              <div className="mt-12 w-96 space-y-6">
                <p className="text-base text-gray-100">{product.description}</p>
              </div>
            </div>
            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>
            </div>
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-100">{product.price}</p>
              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
              </div>
              <form className="mt-10">
                {/* Sizes */}
                <button
                  type="submit"
                  className="mt-10 flex items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to bag
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
