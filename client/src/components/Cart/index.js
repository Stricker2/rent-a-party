import React from 'react';
import CartItem from '../CartItem';
import './style.css';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART } from '../../utils/actions';

const Cart = () => {
  const [state, dispatch] = useStoreContext();

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}>
        <span
          role="img"
          aria-label="trash">🛒</span>
      </div>
    );
  }
  return (
    <div className="cart">
      <div className="close" onClick={toggleCart}>[close]</div>
      <h2>Shopping Cart</h2>
      <div>
        <CartItem item={{ name: 'Tent', image: 'tent.jpg', price: 200, purchaseQuantity: 1 }} />
        <CartItem item={{ name: 'Slide', image: 'slide.jpg', price: 125, purchaseQuantity: 2 }} />

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
