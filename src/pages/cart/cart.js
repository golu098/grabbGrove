import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/cart";
import "./cart.css";

const SHIPPING_CHARGES = 25;

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);

  const cartTotal = () => {
    return cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  };

  const round = (value, decimals) => {
    return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
  };

  const handleCheckout = () => {
    setShowPaymentOptions(true);
  };

  return (
    <>
      <div className="cartWrapper">
        <div className="container">
          {cart.length >= 1 ? (
            <div className="grid my-5">
              <div className="cartItem p-3">
                <h2>Order Summary</h2>
                {cart.map((item) => (
                  <div className="item" key={item.product.id}>
                    <div className="grid py-3">
                      <div className="itemImage">
                        <img src={item.product.image} alt="" />
                      </div>
                      <div className="itemDesc">
                        <div className="title">
                          <Link to={"/product/" + item.product.id} className="titleLink">
                            {item.product.title}
                          </Link>
                        </div>
                        <span className="price">${round(item.product.price * item.quantity, 2)}</span>
                      </div>
                      <div className="itemControl flex">
                        <div>
                          <button onClick={() => increaseQuantity(item.product.id)} className="addQty">
                            +
                          </button>
                          <span className="mx-1">{item.quantity}</span>
                          <button
                            onClick={() => decreaseQuantity(item.product.id)}
                            disabled={item.quantity === 1}
                            className="removeQty"
                          >
                            -
                          </button>
                          <div className="remove my-1" onClick={() => removeFromCart(item.product.id)}>
                            Remove
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="payment p-3">
                <h2>Payment Summary</h2>
                <div className="summary py-3 my-2">
                  <div className="flex py-1">
                    <span>Subtotal:</span>
                    <span className="price">${round(cartTotal(), 2)}</span>
                  </div>
                  <div className="flex py-1">
                    <span>Shipping Fee:</span>
                    <span className="price">${SHIPPING_CHARGES}</span>
                  </div>
                  <div className=" flex py-1">
                    <span>Total:</span>
                    <span className="price">${round(cartTotal() + SHIPPING_CHARGES, 2)}</span>
                  </div>
                  {!showPaymentOptions && (
                    <div className="button">
                      <Link to="/checkout"> {/* Use Link to navigate to the checkout page */}
                        <button className="checkoutButton" onClick={handleCheckout}>Checkout</button>
                      </Link>
                    </div>
                  )}
                  {showPaymentOptions && (
                    <div className="paymentOptions">
                      {/* Render your payment options here */}
                      <p>Payment options will appear here...</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="error">
              <p>&#9432; Cart is empty</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export { Cart };
