import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const findProduct = state.products.findIndex(
        (item) => item._id === action.payload
      );
      console.log(state.products);
      if (state.products.length === 0 || findProduct < 0) {
        state.quantity += 1;
        state.products.push(action.payload);
        state.total += action.payload.price * action.payload.quantity;
      }
      if (findProduct >= 0) {
        state.products[findProduct].quantity += action.payload.quantity;
        state.total += action.payload.price * action.payload.quantity;
      }
    },  
    deleteCart: (state, action) => {
      const index = state.products.findIndex(
        (product) => product._id === action.payload
      );
      state.quantity -= 1;
      state.total -=
        state.products[index].price * state.products[index].quantity;
      state.products.splice(index, 1);
    },
    updateAmoutCart: (state, action) => {
      // if (action.payload.quantity <= 0) {
      //   action.payload.quantity = 1;
      // }
      const id = action.payload.id;
      const type = action.payload.type;
      const index = state.products.findIndex((p) => (p._id === id));
      const currentProduct = state.products[index];
      if (type === "up") {
        currentProduct.quantity += 1;
        state.total += state.products[index].price;
      }
      if (type === "down" && state.products[index].quantity > 1) {
        currentProduct.quantity -= 1;
        state.total -= state.products[index].price;
      }
    },
    checkOutFinish : (state) =>{
      state.products = []
      state.total = 0 ;
      state.quantity = 0
    }
  },
});

export const { addProduct, deleteCart,updateAmoutCart,checkOutFinish } = cartSlice.actions;
export default cartSlice.reducer;
