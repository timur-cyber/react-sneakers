import React from 'react'

import Card from '../components/Card'
import AppContext from '../context'

function Favourites() {
    const { favouriteItems, cartItems, onToggleFavourite, onAddToCart } = React.useContext(AppContext)

    return (
        <div className="content p-40">
            <div className="mb-40 d-flex align-center justify-between">
                <h1>Favourites</h1>
            </div>
            
            <div className="d-flex flex-wrap">
                {favouriteItems.map((item) => (
                <Card
                    key={item.id}
                    title={item.title} 
                    price={item.price} 
                    imageUrl={item.imageUrl}
                    onClickFavourite={() => onToggleFavourite(item)}
                    onPlus={() => onAddToCart(item)}
                    added={cartItems.some(cartItem => cartItem.item_id === item.item_id)}
                    favourite={favouriteItems.some(favouriteItem => favouriteItem.item_id === item.item_id)} />
                ))}
            </div>
        </div>
    )
}

export default Favourites;