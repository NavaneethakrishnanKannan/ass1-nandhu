import React from 'react'

function CartItem({children}) {
    return (
        <div className="cart-item flex-row">
            {children}
        </div>
    );
}

export default CartItem;