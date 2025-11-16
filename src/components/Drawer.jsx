import React from "react"

import AppContext from '../context'

import Info from "./Info";


function Drawer() {
    const { cartItems, onDeleteFromCart, OnOrder, onCloseCart, isOrderComplete } = React.useContext(AppContext)

    let itemsTotal = 0;
    let taxTotal = 0;
    cartItems.forEach(item => {
        itemsTotal += item.price
    })
    taxTotal = itemsTotal * 0.05;

    return (
        <div className="drawer">
            <h2 className='mb-30 d-flex justify-between'>Cart <img className='cu-p' src="/img/btn-remove.svg" alt="Remove" onClick={onCloseCart} /></h2>

            {
                cartItems.length > 0 ? (
                    <>
                    <div className="items">
                        {cartItems.map(obj => (
                            <div key={obj.item_id} className="cartItem d-flex align-center mb-20">
                                <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="cartItemImg"></div>
                                <div className='mr-20 flex'>
                                <p className='mb-5'>{obj.title}</p>
                                <b>{obj.price} $</b>
                                </div>
                                <img onClick={() => onDeleteFromCart(obj)} className='removeBtn' src="/img/btn-remove.svg" alt="Remove" />
                            </div>
                        ))}  
                    </div>

                    <div className="cartTotalBlock">
                        <ul>
                            <li className='d-flex'>
                            <span>Total:</span>
                            <div></div>
                            <b>{itemsTotal} $</b>
                            </li>
                            <li className='d-flex'>
                            <span>Tax 5%:</span>
                            <div></div>
                            <b>{taxTotal} $</b>
                            </li>
                        </ul>
                        <button onClick={() => OnOrder()} className='greenButton'>
                            Create Order <img src="/img/arrow.svg" alt="Arrow" />
                        </button>
                    </div>
                    </>
                ) : (
                    <Info 
                    title={isOrderComplete ? "Order is confirmed" : "Cart is empty"}
                    description={isOrderComplete ? "Your order will be delivered soon!" : "Add at least one item to order" }
                    image={isOrderComplete ? "/img/complete-order.jpg" : "/img/empty-cart.jpg"} />
                )
            }            
        </div>
    )
}

export default Drawer;