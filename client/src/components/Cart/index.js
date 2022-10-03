import React from 'react';
import CartItem from '../CartItem';
import './style.css';

const Cart = () => {
  return (
    <div className="cart">
      <div className="close">[close]</div>
      <h2>Shopping Cart</h2>
      <div>
          <CartItem item={{name:'Tent', image:'tent.jpg', price:200, purchaseQuantity:1}} />
          <CartItem item={{name:'Slide', image:'slide.jpg', price:125, purchaseQuantity:2}} />

          <div className="flex-row space-between">
            <strong>Total: $0</strong>
            {
                <button>
                  Checkout
                </button>
            }
          </div>
        </div>
    </div>
  );
};

export default Cart;
