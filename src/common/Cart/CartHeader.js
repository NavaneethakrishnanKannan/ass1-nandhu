import React from 'react'

function CartHeader({children}) {
    return (
        <div className="cart-header">
            {children}
        </div>
    );
}

export default CartHeader;
