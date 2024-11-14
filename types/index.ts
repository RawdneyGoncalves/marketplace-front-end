export interface Product {
    id: number
    title: string
    price: number
    type: string
    img: string
    stock: number
  }
  
  export interface State {
    productInfo: Partial<Product>
    cartItems: Product[]
    items: Product[]
  }

  export interface CartItem {
    id: number
    productId: number
    quantity: number
    product: Product
  }