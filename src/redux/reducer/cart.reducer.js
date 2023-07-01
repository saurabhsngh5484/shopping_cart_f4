import { ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT } from "../actions/actionTypes";

const initialState = [];

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            let exist = false;
             state.forEach(product=>{
                if(product.id===action.payload.id){
                    exist = true;
                    return;
                }
             })
             if(exist){
                return state
             }
            return ([...state, action.payload]);
        case REMOVE_FROM_CART:
            return (state.filter(product=>(product.id!==action.payload)));
        case CHECKOUT:
            return (initialState);
        default:
            return state;
    }
}

export default cartReducer;