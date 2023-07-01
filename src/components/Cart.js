import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions/cart.action";
import Sidebar from "./Sidebar";

const Cart = () => {

    let products = useSelector(state => state.cart);
    const dispatch = useDispatch()

    return (
        <div className="mainCart">
            <div className="cartContainer">
                {
                    (products.length > 0)? products.map((product) => (
                        <div className="card" key={product.id}>
                            <img className="thumbnail" src={product.thumbnail} alt={product.title}></img>
                            <div className="info">
                                <h4 className="title">{product.title}</h4>
                                <p className="price">${product.price}</p>
                            </div>
                            <p className="desc">{product.description.substring(0, 62)}...</p>
                            <button className="add" onClick={() => { dispatch(removeFromCart(product.id))}}>Remove from Cart</button>
                        </div>
                    )):<h2 className="cartEmpty">Your cart is empty!</h2>
                }
            </div>
            <Sidebar />
        </div>
    )
}

export default Cart;