import Product from './components/ProductPage'
import Cart from './components/CartPage'

export const routes = [
  {
    path: '/cart',
    name: 'Keranjang',
    component: Cart,
  },
  {
    path: '/*',
    name: 'Produk',
    component: Product,
  },
]