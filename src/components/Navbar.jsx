import React from 'react'
import '../styles/navbar.css'
import { useContext } from 'react'
import { CounterContext } from '../context/Items'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const productState = useContext(CounterContext);
    return (
        <>
            <nav className='nav-bar' >
                <img src='shopping-bag.svg'></img><h1>Shopping Cart</h1>
                {/* <Link to="/ItemCart"> */}
                <Link to="/cart" className="cart">
                    <span className='counter'>
                        {productState.items.length}</span><img src="cart.svg" alt="shopping-cart" />
                </Link>
                {/* </Link> */}
            </nav>
        </>
    )
}

export default Navbar