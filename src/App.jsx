import './App.scss'

import React from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import 'macro-css'

import Header from './components/Header'
import Drawer from './components/Drawer'
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import Orders from './pages/Orders'
import AppContext from "./context"


function App() {
  const [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false)
  const [totalCartSum, setTotalCartSum] = React.useState(0)

  const [cartItems, setCartItems] = React.useState(() => {
    // Restore from localStorage when the component mounts
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [favouriteItems, setFavouriteItems] = React.useState(() => {
    // Restore from localStorage when the component mounts
    const saved = localStorage.getItem('favourites');
    return saved ? JSON.parse(saved) : [];
  });
  const [orderItems, setOrderItems] = React.useState(() => {
    // Restore from localStorage when the component mounts
    const saved = localStorage.getItem('orders');
    return saved ? JSON.parse(saved) : [];
  });


  React.useEffect(() => {
    async function fetchData() {
      try {
        const itemsResponse = await axios.get("https://68fb36f194ec960660251678.mockapi.io/api/v1/sneakers")
        setIsLoading(false)
        setItems(itemsResponse.data)
      } catch (error) {
        alert("Error while fetching data ;(")
        console.log(error)
      }
      
    }

    fetchData()
  }, [])

  React.useEffect(() => {
    // Save whenever cartItems changes
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    setTotalCartSum(cartItems.reduce((sum, item) => sum + item.price, 0))
  }, [cartItems]);

  React.useEffect(() => {
    // Save whenever favourites changes
    localStorage.setItem('favourites', JSON.stringify(favouriteItems));
  }, [favouriteItems]);

  React.useEffect(() => {
    // Save whenever favourites changes
    localStorage.setItem('orders', JSON.stringify(orderItems));
  }, [orderItems]);

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
    const ind = orderItems.length + 1
    const orderPayload = {
      id: ind,
      order: cartItems
    }
    setOrderItems([...orderItems, orderPayload])
    setCartItems([])
    setIsOrderComplete(true)
  }

  const onClickCart = () => {
    setCartOpened(true)
  }

  const onCloseCart = () => {
    setIsClosing(true);

    setTimeout(() => {
      setCartOpened(false);
      setIsClosing(false);
    }, 100); // must match .drawer transition time
  };

  const contextValue = {
    items,
    cartItems,
    favouriteItems,
    searchValue,
    isLoading,
    isOrderComplete,
    totalCartSum,
    orderItems,
    cartOpened,
    isClosing,
    onToggleFavourite,
    onAddToCart,
    onDeleteFromCart,
    setSearchValue,
    onChangeSearchInput,
    onDeleteSearchInput,
    onClickCart,
    OnOrder,
    onCloseCart
  }
  

  return (
    <AppContext.Provider value={contextValue}>
      <>
      <Drawer />

      <div className='wrapper clear'>
        <Header />

        <Routes>
          <Route path="/" exact element={
            <Home />
          } />

          <Route path="/favourites" exact element={
            <Favourites />
          } />

          <Route path="/orders" exact element={
            <Orders />
          } />
        </Routes>
      </div>
      </>
    </AppContext.Provider>
  )
}

export default App