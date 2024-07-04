import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"Cart",
    initialState:[],
    reducers:{
        add(state,action){
            const product = action.payload;
            console.log("Action:",action.payload)
                const exist = state.find((x) => x.id === product.id);
                if (exist) {
                    // Increase the quantity
                    return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x);
                } else {
                    return [...state, { ...product, qty: 1 }];
                }
        },
        remove(state,action){
            const product = action.payload;

                const exist2 = state.find((x) => x.id === product.id);
                if (exist2.qty === 1) {
                    return state.filter((x) => x.id !== exist2.id);
                } else {
                    return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty - 1 } : x);
                }
        }
    }

})

export const {add,remove} = cartSlice.actions;
export default cartSlice.reducer;