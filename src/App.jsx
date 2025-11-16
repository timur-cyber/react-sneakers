import './App.scss'

import React from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import 'macro-css'

import Header from './components/Header'
import Drawer from './components/Drawer'
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import AppContext from "./context"


function App() {
  const [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false)

  const [cartItems, setCartItems] = React.useState(() => {
    // Restore from localStorage when the component mounts
    const saved = localStorage.getItem('cartItems');
    return saved ? JSON.parse(saved) : [];
  });
  const [favouriteItems, setFavouriteItems] = React.useState(() => {
    // Restore from localStorage when the component mounts
    const saved = localStorage.getItem('favourites');
    return saved ? JSON.parse(saved) : [];
  });


  React.useEffect(() => {
    async function fetchData() {
      const itemsResponse = await axios.get("https://68fb36f194ec960660251678.mockapi.io/api/v1/sneakers")
      setIsLoading(false)
      setItems(itemsResponse.data)
    }

    fetchData()
  }, [])

  React.useEffect(() => {
    // Save whenever cartItems changes
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  React.useEffect(() => {
    // Save whenever favourites changes
    localStorage.setItem('favourites', JSON.stringify(favouriteItems));
  }, [favouriteItems]);

  const onAddToCart = async (obj) => {
    setCartItems(prev => {
      const alreadyInCart = prev.some(item => item.item_id === obj.item_id);
      return alreadyInCart ? prev : [...prev, obj]
    });
  };

  const onDeleteFromCart = async (obj) => {
    setCartItems(prev => prev.filter(item => item.id !== obj.id));
  };  

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const onDeleteSearchInput = () => {
    setSearchValue("")
  }

  const onToggleFavourite = (obj) => {
    setFavouriteItems(prev => {
      const alreadyInFavourite = prev.some(item => item.item_id === obj.item_id);
      if (alreadyInFavourite) {
        return prev.filter(item => item.item_id !== obj.item_id);
      }
      return [...prev, obj];
    });
  }

  const OnOrder = async () => {
    await axios.post(
      "https://68fb36f194ec960660251678.mockapi.io/api/v1/orders", 
      {order: cartItems}
    )
    setCartItems([])
    setIsOrderComplete(true)
  }

  const onClickCart = () => {
    setCartOpened(true)
  }

  const onCloseCart = () => {
    setCartOpened(false)
    setIsOrderComplete(false)
  }

  const contextValue = {
    items,
    cartItems,
    favouriteItems,
    searchValue,
    isLoading,
    isOrderComplete,
    onToggleFavourite,
    onAddToCart,
    onDeleteFromCart,
    setSearchValue,
    onChangeSearchInput,
    onDeleteSearchInput,
    onClickCart,
    OnOrder,
    onCloseCart,
    
  }
  

  return (
    <AppContext.Provider value={contextValue}>
      <>
      {cartOpened && (
        <div className="overlay">
          <Drawer />
        </div>
      )}

      <div className='wrapper clear'>
        <Header />

        <Routes>
          <Route path="/" exact element={
            <Home />
          } />

          <Route path="/favourites" exact element={
            <Favourites />
          } />
        </Routes>
      </div>
      </>
    </AppContext.Provider>
  )
}

export default App