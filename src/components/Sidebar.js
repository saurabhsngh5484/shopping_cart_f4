import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkout } from "../redux/actions/cart.action";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    let products = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let sum = 0;
    if(products.length>0){
        products.forEach(product=>{
            sum+=parseInt(product.price)
        })
    }

    function checkOutBtn(){
        dispatch(checkout());
        setTimeout(() => {
            alert('Items have been checked out successfully.');
            navigate('/');
        }, 800);
    }

    return (
        <div className="sidebarContainer">
            <h3>Checkout List</h3>
            {
                products.length > 0 ?
                <div className="list">
                    {
                        products.map((product)=>(
                            <div className="items" key={product.id}>
                                <p>{product.title}</p>
                                <p>${product.price}</p>
                            </div>
                        ))
                    }
                </div>:<h5 className="empty">Empty!</h5>
            }
            <div className="total">
                <h4>Total</h4>
                {
                    products.length > 0?<p>${sum}</p>:<p>$0</p>
                }
            </div>
            <button className="checkout" onClick={()=>{checkOutBtn()}}>Checkout</button>
        </div>
    )
}

export default Sidebar;