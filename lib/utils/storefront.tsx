const url: string = process.env.NEXT_PUBLIC_DOMAIN ?? ''
const token: string = process.env.NEXT_PUBLIC_ACCESS_TOKEN ?? ''

const headers = {
  'Content-Type': 'application/json',
  'X-Shopify-Storefront-Access-Token': token,
}

export const storeFront = async (query: string, variables?: any) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ query: query }),
    })
    const { data } = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
