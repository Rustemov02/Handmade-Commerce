import { createSlice } from '@reduxjs/toolkit'
import { itemsData } from '../ItemsData' 

export const amiguSlice = createSlice({
  name: 'amigurumi',
  initialState: {
    data: [],
    cart: [],
    personalİnformation : {customerName : '' , connectWith : "" , location : '' , note : ''},
    permission : false ,//for sending email , if some inputs was empty , permission getting false 
    delivery : 0 // for delivery amount
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
    decrementQuantity: (state, { payload }) => {
      const item = state.cart.find(item => item.id === payload)
      if (item && item.quantity > 1) {
        item.quantity -= 1
      }
    },
    getPersonalInformations : (state , {payload}) => {
       state.personalInformation = {
        ...state.personalInformation ,
        ...payload
       } 
    },
    getPermission : (state , {payload}) => { 
      state.permission = payload
    },
    addDelivery : (state , {payload}) => {
      if(payload){
        state.delivery = 2 
      }else{
        state.delivery = 0
      } 
    }
  }
})


export const { fillData, addToCart, removeFromCart, incrementQuantity, decrementQuantity , getPersonalInformations , getPermission , addDelivery } = amiguSlice.actions

export default amiguSlice.reducer