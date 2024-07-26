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
    }
  }
})


export const { fillData,  addToCart, removeFromCart } = amiguSlice.actions

export default amiguSlice.reducer