import {createSlice} from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
const initialState = {
  cartItems: [],
  amount:1,
  total:0,
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem : (state,action) => {
      const {product} = action.payload
      const item = state.cartItems.find((i)=>i.id === product.id)
      if(item){
        item.amount += product.amount
      }
      else{
        state.cartItems.push(product)
      }
      state.amount+=product.amount
      state.total+=product.amount*product.price
      cartSlice.caseReducers.calculateTotals(state)
      toast.success('item added to cart')
    },
    clearCart : () => {
      return {cartItems:[],amount:0,total:0}
    },
    remove : (state,{payload}) => {
       state.cartItems = state.cartItems.filter((item)=>item.id!==payload)
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals : (state) => {
      let amount = 0
      let total = 0
      state.cartItems.forEach((item)=>{
        amount+=item.amount
        total+=item.amount*item.price
      })
      state.amount=amount
      state.total=total
    }
  }
});
export const { clearCart,remove,increase,decrease,calculateTotals,addItem } = cartSlice.actions
export default cartSlice.reducer