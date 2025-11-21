import React from 'react'

import Card from '../components/Card'
import AppContext from '../context'


function Home() {
    const { 
        items, 
        searchValue,
        onChangeSearchInput, 
        onToggleFavourite, 
        onAddToCart, 
        onDeleteSearchInput, 
        cartItems, 
        favouriteItems, 
        isLoading 
    } = React.useContext(AppContext)

    const renderItems = () => {
        const filteredItems = items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
        return (isLoading ? [...Array(10)] : filteredItems)
        .map((item, index) => (
            <Card
            key={isLoading ? index : item.item_id}
            onClickFavourite={() => onToggleFavourite(item)}
            onPlus={() => onAddToCart(item)}
            added={isLoading ? false : cartItems.some(cartItem => cartItem.item_id === item.item_id)}
            favourite={isLoading ? false : favouriteItems.some(favouriteItem => favouriteItem.item_id === item.item_id)}
            loading={isLoading}
            {...item}/>
            )
        )
    }

    return (
        <div className="content p-40">
            <div className="mb-40 d-flex align-center justify-between">
                <h1>{searchValue ? `Search by: ${searchValue}` : "All Items"}</h1>
                <div className="search-block d-flex">
                    <img src="img/search.svg" alt="Search" />
                    <img onClick={onDeleteSearchInput} className='cu-p clear' src="img/btn-remove.svg" alt="Remove" />
                    <input 
                    onChange={onChangeSearchInput} 
                    value={searchValue} 
                    placeholder="Search..." />
                </div>
            </div>
            
            <div className="d-flex flex-wrap">
                {renderItems()}
            </div>
        </div>
    )
}

export default Home;