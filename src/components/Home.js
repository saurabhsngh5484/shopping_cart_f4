import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/actions/product.action'
import { addToCart } from "../redux/actions/cart.action";

const Home = () => {
    const { loading, data, error } = useSelector(state => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    function addBtn(e, product){
        dispatch(addToCart(product)); 
        e.target.innerHTML = 'Added'
        setTimeout(()=>{
            e.target.innerHTML = 'Add to Cart'
        }, 1000)
    }

    return (
        <div className="container">
            
            {
                loading &&
                <div className="load-holder">
                <div className="load">
                </div>
            </div>
            }
            {
                error &&
                <div className="error">
                    <h1>{error}</h1>
                </div>
            }
            {
                (data.length > 0 && !error) && data.map((product) => (
                    <div className="card" key={product.id}>
                        <img className="thumbnail" src={product.thumbnail} alt={product.title}></img>
                        <div className="info">
                            <h4 className="title">{product.title}</h4>
                            <p className="price">${product.price}</p>
                        </div>
                        <p className="desc">{product.description.substring(0, 60)}...</p>
                        <button className="add" onClick={(e)=>{addBtn(e, product)}}>Add to Cart</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Home;