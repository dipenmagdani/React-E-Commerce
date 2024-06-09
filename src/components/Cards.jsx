import React from 'react';
import '../styles/card.css';
import { CounterContext } from '../context/Items';
import { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

export const Cards = () => {
    const productState = useContext(CounterContext);
    let quantity = 1;
    let isAdded = true;

    const isItemInCart = (itemId) => {
        return productState.items.some(item => item.data.id === itemId);
    };

    const addToCart = (data) => {
        if (isItemInCart(data.id)) {
            toast.error('Item Already Added to Cart', {
                position: "bottom-center"
            });
        } else {
            productState.setItems([...productState.items, { data, quantity, isAdded }]);
            toast.success('Item added to cart.', {
                position: "bottom-center"
            });
        }
    };

    return (
        <>
            <Navbar />
            <div className="height">
                {
                    productState.product.map((item) => {
                        return (
                            <div className="card" key={item.id}>
                                <img src={item.productImage} alt="Product" />
                                <h5 className="text-uppercase mb-0">{item.productName}</h5>
                                <p>{item.productDescription}</p>
                                <h1>${item.productPrice}</h1>
                                <div className="cart-add">
                                    {isItemInCart(item.id) ? (
                                        <Link to="/cart">
                                            <button className="btn btn-danger">Go To Cart</button>
                                        </Link>
                                    ) : (
                                        <button className="btn btn-danger" onClick={() => addToCart(item)}>Add To Cart</button>
                                    )}
                                    <Toaster />
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
};

export default Cards;
