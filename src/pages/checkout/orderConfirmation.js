// OrderConfirmation.js
import React from "react";
import { Link } from "react-router-dom";

const OrderConfirmation = () => {
    return (
        <div>
            <h1>Order Placed Successfully!</h1>
            <Link to="/">Return to Home Page</Link>
        </div>
    );
};

export default OrderConfirmation;
