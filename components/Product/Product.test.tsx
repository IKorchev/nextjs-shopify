import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import SingleProduct from './Product'
import ProductList from '../ProductList'
const data = {
  node: {
    title: 'Portable Projector',
    handle: 'test-handle',
    description:
      "High Resolution LED projector: This LED projector upgrade with high Native Resolution which can meet all your home entertainment games or indoor and outdoor movies. It's also ideal for home entertainment like movies and video games.",
    priceRange: {
      minVariantPrice: {
        amount: '49.99',
      },
    },
    publishedAt: '2022-02-24T13:00:39Z',
    id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzcwMjIyNDgyOTY2MzQ=',
    variants: {
      edges: [
        {
          node: {
            image: {
              url: 'https://cdn.shopify.com/s/files/1/0612/3670/7514/products/61JfRdgFMRL._AC_SL1500.jpg?v=1645622455',
            },
          },
        },
      ],
    },
  },
}

const productsArray = [data, data, data, data]
test('The list has the right amount of children', () => {
  render(<ProductList products={productsArray} />)
  const data = screen.getAllByTestId('product')
  expect(data.length).toBe(productsArray.length)
})

test('The product has image title and price and correct href', () => {
  render(<SingleProduct product={data} />)
  const img = screen.getByRole('img')
  const title = screen.getAllByRole('navigation')[1]
  const price = screen.getByTestId('price')
  expect(img.parentElement).toHaveAttribute(
    'href',
    `/product/${data.node.handle}`
  )
  expect(title).toHaveAttribute('href', `/product/${data.node.handle}`)
  expect(title).toHaveTextContent(data.node.title)
  expect(price).toHaveTextContent(data.node.priceRange.minVariantPrice.amount)
  expect(img).toHaveAttribute('src', data.node.variants.edges[0].node.image.url)
})
