import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import productReducer from './reducer/product.reducer';
import cartReducer from './reducer/cart.reducer';

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;