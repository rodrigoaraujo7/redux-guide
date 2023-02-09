import CartActionTypes from "./action-types";

const initialState = {
  products: [],
  productsTotalPrice: 0,
}

const cartReducer = (state = initialState, action) => {
  switch(action.type) {
    case CartActionTypes.ADD_PRODUCT:
      // verificar se o produto ja esta no carrinho
      const productIsAlreadyInCart = state.products.some(
        (product) => product.id === action.payload.id
      )
      // caso sim, add mais 1 na quantidade
      if(productIsAlreadyInCart) {
        return {
          ...state,
          products: state.products.map(product => product.id === action.payload.id
            ? {...product, quantity: product.quantity + 1}
            : product)
        }
      }
      // se ele n estiver, add o produto normalmente
      return {
        ...state,
        products: [...state.products, {...action.payload, quantity: 1}]
      }
    default:
      return state;
  }
}

export default cartReducer;