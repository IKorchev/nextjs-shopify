import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import ProductList from '../components/ProductList'
import { storeFront } from '../lib/utils/storefront'
import { Product } from '../components/Product/ProductType'

interface Props {
  products: Product[]
}
const link: string =
  'https://cdn.shopify.com/s/files/1/0612/3670/7514/products/Cover-case-for-Apple-watch-case-44mm-40mm-42mm-38mm-All-around-Ultra-thin-TPU-Clear.png_640x640_779226c9-bde2-436b-ad99-8ec32b15b0ee.jpg?v=1645620263'

const Home: NextPage<Props> = ({ products }) => {
  return (
    <div className="bg-gray-900">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="hero min-h-[30rem] bg-white dark:bg-gray-900">
        <div className="container mx-auto flex h-[40rem] flex-col items-center justify-center px-4 py-12 xl:flex-row">
          <div className="mt-6 flex flex-col items-center justify-center text-center xl:mt-0 xl:w-1/2 xl:items-start">
            <h1 className="w-full text-center text-7xl font-black text-gray-800 dark:text-white ">
              Shop now
            </h1>
            <p className="mt-12 block max-w-2xl text-xl text-gray-500 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
              recusandae tenetur iste quaerat voluptatibus quibusdam nam
              repudiandae
            </p>
          </div>
        </div>
      </section>
      <ProductList products={products} />
    </div>
  )
}

export default Home

export async function getStaticProps<GetStaticProps>() {
  // Load the access token as per instructions above
  const gql = String.raw
  const query: string = gql`
    {
      products(first: 5) {
        edges {
          node {
            title
            handle
            description
            priceRange {
              minVariantPrice {
                amount
              }
            }
            publishedAt
            id
            variants(first: 1) {
              edges {
                node {
                  image {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  `
  const data = await storeFront(query)
  const products: Product[] = data.products.edges
  products.forEach((el) => {
    el.node.variants.edges[0].node.image.url
  })
  return {
    props: {
      products,
    },
  }
}
