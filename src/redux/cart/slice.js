import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: { // actions
    addProduct: (state = initialState, action) => {
      // verificar se o produto ja esta no carrinho
      const productIsAlreadyInCart = state.products.some(
        (product) => product.id === action.payload.id
      )

      // caso sim, add mais 1 na quantidade
      if(productIsAlreadyInCart) {
        state.products = state.products.map(product => product.id === action.payload.id
          ? {...product, quantity: product.quantity + 1}
          : product)

        return
      }

      // se ele n estiver, add o produto normalmente
      state.products = [...state.products, {...action.payload, quantity: 1}]
    },

    increaseProductQuantity: (state = initialState, action) => {
      state.products = state.products.map(product =>
        product.id === action.payload
        ? {...product, quantity: product.quantity + 1}
        : product
      )
    },

    decreaseProductQuantity: (state = initialState, action) => {
      state.products = state.products.map(product =>
        product.id === action.payload
        ? {...product, quantity: product.quantity - 1}
        : product
      ).filter(product => product.quantity > 0)
    },

    removeProductFromCart: (state = initialState, action) => {
      state.products = state.products.filter(product => product.id !== action.payload)
    },
  }
})

export const {
  addProduct,
  increaseProductQuantity,
  decreaseProductQuantity,
  removeProductFromCart
} = cartSlice.actions;

export default cartSlice.reducer;