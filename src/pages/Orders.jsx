import React from 'react'

import Card from '../components/Card'
import AppContext from '../context'

function Orders() {
    const { orderItems, favouriteItems, cartItems, onToggleFavourite, onAddToCart } = React.useContext(AppContext)

    const renderOrder = (order, ind) => (
        <div key={ind}>
            <h2>Order #{order.id}</h2>

            <div className="d-flex flex-wrap">
                {order.order.map(item => (
                <Card
                    key={item.item_id}
                    title={item.title} 
                    price={item.price} 
                    imageUrl={item.imageUrl}
                    onClickFavourite={() => onToggleFavourite(item)}
                    onPlus={() => onAddToCart(item)}
                    added={cartItems.some(cartItem => cartItem.item_id === item.item_id)}
                    favourite={favouriteItems.some(favouriteItem => favouriteItem.item_id === item.item_id)}
                    order={true} />
                ))}
            </div>
            <h2>Total: <span style={{color: "#19a73d"}}>{order.order.reduce((sum, item) => sum + item.price, 0)} $</span></h2>
        </div>
    )

    return (
        <div className="content p-40">
            <div className="mb-40 d-flex align-center justify-between">
                <h1>My Orders</h1>
            </div>

            {orderItems.map((order, ind) => (
                renderOrder(order, ind)
            ))}
        </div>
    )
}

export default Orders;