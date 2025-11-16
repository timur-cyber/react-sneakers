import React from "react"

import AppContext from '../context'


function Drawer({ OnOrder, onCloseCart }) {
    const { cartItems, onDeleteFromCart } = React.useContext(AppContext)

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
                    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                        <img className="mb-20" width="120px" src="/img/empty-cart.jpg" alt="Empty" />
                        <h2>Cart is empty</h2>
                        <p className="opacity-6">Add at least one item to order</p>
                        <button onClick={onCloseCart} className="greenButton">
                            <img src="img/arrow.svg" alt="Arrow" />
                            Return
                        </button>
                    </div>
                )
            }            
        </div>
    )
}

export default Drawer;