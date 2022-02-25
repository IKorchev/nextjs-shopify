export interface Product {
  node: ProductNode
}

interface PriceRange {
  minVariantPrice: {
    amount: string
  }
}
interface ProductNode {
  description: string
  priceRange: PriceRange
  publishedAt: string
  title: string
  handle: string
  id: string
  variants: Variants
}

interface Variants {
  edges: ImageNode[]
}

interface ImageNode {
  node: {
    image: {
      url: string
    }
  }
}
