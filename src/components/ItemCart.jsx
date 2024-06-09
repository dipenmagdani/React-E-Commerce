import React from 'react';
import { CounterContext } from '../context/Items';
import { useContext } from 'react';
import '../styles/navbar.css'
const ItemCart = () => {
    const productState = useContext(CounterContext);

    return (
        <div>
            {productState?.items?.length > 0 ? (
                productState?.items?.map(item => (
                    <div key={item?.id} className='cart-item'>
                        <img src={item?.data?.productImage} alt={item.data.productName} />
                        <div>
                            <h5>Name: {item?.data?.productName}</h5>
                            <p>Price: ${item?.data?.productPrice}</p>
                            <p>Quantity: {item?.quantity}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p className="empty-cart">Your cart is empty</p>
            )}
        </div>
    );
};

export default ItemCart;
