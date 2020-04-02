import React from 'react';
import CartHeader from './CartHeader';
import CartFooter from './CartFooter';
import CartContent from './CartContent';
import CartItem from './CartItem';

function Cart({children}) {
    return (
        <div className="cart-container">
            {children}
        </div>
    );
}

Cart.Header = CartHeader;
Cart.Content = CartContent;
Cart.Footer = CartFooter;
Cart.CartItem = CartItem;

export default Cart;
