import React from "react"

import AppContext from '../../context'
import Info from "../Info";
import { useCart } from "../../hooks/useCart"

import styles from './Drawer.module.scss'


function Drawer() {
    const { onDeleteFromCart, OnOrder, onCloseCart, isOrderComplete, cartOpened, isClosing } = React.useContext(AppContext)
    const { cartItems, totalCartSum } = useCart()
    const taxTotal = totalCartSum * 0.05;

    return (
        <div className={`
        ${styles.overlay} 
        ${cartOpened && !isClosing ? styles.overlayVisible : ''} 
        ${isClosing ? styles.overlayClosing : ''}
        `}>
            <div className={styles.drawer}>
                <h2 className='mb-30 d-flex justify-between'>Cart <img className='cu-p' src="img/btn-remove.svg" alt="Remove" onClick={onCloseCart} /></h2>

                {
                    cartItems.length > 0 ? (
                        <>
                        <div className={styles.items}>
                            {cartItems.map(obj => (
                                <div key={obj.item_id} className={`${styles.cartItem} d-flex align-center mb-20`}>
                                    <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className={styles.cartItemImg}></div>
                                    <div className='mr-20 flex'>
                                    <p className='mb-5'>{obj.title}</p>
                                    <b>{obj.price} $</b>
                                    </div>
                                    <img onClick={() => onDeleteFromCart(obj)} className={styles.removeBtn} src="img/btn-remove.svg" alt="Remove" />
                                </div>
                            ))}  
                        </div>

                        <div className={styles.cartTotalBlock}>
                            <ul>
                                <li className='d-flex'>
                                <span>Total:</span>
                                <div></div>
                                <b>{totalCartSum} $</b>
                                </li>
                                <li className='d-flex'>
                                <span>Tax 5%:</span>
                                <div></div>
                                <b>{taxTotal} $</b>
                                </li>
                            </ul>
                            <button onClick={() => OnOrder()} className="greenButton">
                                Create Order <img src="img/arrow.svg" alt="Arrow" />
                            </button>
                        </div>
                        </>
                    ) : (
                        <Info 
                        title={isOrderComplete ? "Order is confirmed" : "Cart is empty"}
                        description={isOrderComplete ? "Your order will be delivered soon!" : "Add at least one item to order" }
                        image={isOrderComplete ? "img/complete-order.jpg" : "img/empty-cart.jpg"} />
                    )
                }            
            </div>
        </div>
    )
}

export default Drawer;