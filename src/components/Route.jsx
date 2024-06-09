import Navbar from "./Navbar";
import ItemCart from "./ItemCart";
import App from "../App";
import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { Cards } from "./Cards";


const RouteCall = () => {
    return (
        <>

            {/* <div className="height">{cards}</div> */}

            <Router>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Cards />}
                    />
                    <Route
                        path="/cart"
                        element={<ItemCart />}
                    />
                </Routes>

            </Router>

        </>
    )
}

export default RouteCall