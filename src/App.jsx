import './App.scss'
import 'macro-css'

import React from 'react'
import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://68fb36f194ec960660251678.mockapi.io/api/v1/sneakers")
      .then(res => {
        return res.json()
      })
      .then(json => {
        setItems(json)
      })
  }, [])

  const onAddToCart = (obj) => {
    setCartItems(prev => {
      const alreadyInCart = prev.some((item) => item.imageUrl === obj.imageUrl);

      return alreadyInCart ? prev : [...prev, obj]
    })
  }

  const onDeleteFromCart = (obj) => {
    setCartItems(prev => prev.filter(item => item.imageUrl !== obj.imageUrl));
  }
  

  return (
    <>
    {cartOpened && (
      <div className="overlay">
        <Drawer onDelete={(obj) => onDeleteFromCart(obj)} items={cartItems} onCloseCart={() => setCartOpened(false)}  />
      </div>
    )}
    <div className='wrapper clear'>
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="mb-40 d-flex align-center justify-between">
          <h1 className=''>All Items</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>
        
      <div className="d-flex flex-wrap">
        {items.map((item) => (
          <Card 
          title={item.title} 
          price={item.price} 
          imageUrl={item.imageUrl}
          onClickFavourite={() => console.log("Added to fav")}
          onPlus={() => onAddToCart(item)} />
        ))}
      </div>

      </div>
    </div>
    </>
  )
}

export default App