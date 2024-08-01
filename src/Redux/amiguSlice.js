import { createSlice } from '@reduxjs/toolkit'
import { itemsData } from '../ItemsData'


export const amiguSlice = createSlice({
  name: 'amigurumi',
  initialState: {
    data: [],
    cart: [],
  },
  reducers: {
    fillData: state => {
      state.data = [...itemsData] //cart filled !
    },
    addToCart: (state, { payload }) => {
      if (!state.cart.some(item => item.id === payload.id)) {
        const newCart = [...state.cart, payload]
        state.cart = newCart
      }
    },
    removeFromCart: (state, { payload }) => {
      state.cart = state.cart.filter(item => item.id !== payload)
    },
    incrementQuantity: (state, { payload }) => {
      const item = state.cart.find(item => item.id === payload)
      if (item) { 
        item.quantity += 1
      }
    },
    decrementQuantity : (state , {payload}) => {
      const item = state.cart.find(item => item.id === payload)
      if(item && item.quantity > 1){
        item.quantity -= 1
      }
    }
  }
})


export const { fillData, addToCart, removeFromCart, incrementQuantity , decrementQuantity } = amiguSlice.actions

export default amiguSlice.reducer