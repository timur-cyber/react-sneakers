import React from 'react';
import { Link } from 'react-router-dom'

import AppContext from '../context'
import { useCart } from "../hooks/useCart"

function Header() {
    const { onClickCart } = React.useContext(AppContext)
    const { totalCartSum } = useCart()

    return (
        <header className='d-flex justify-between align-center p-40'>
            <Link to="/">
                <div className='d-flex align-center'>
                    <img width={40} height={40} src="img/logo.png" />
                    <div>
                        <h3 className='text-uppercase'>React Sneakers</h3>
                        <p className='opacity-5'>The Best Sneakers Shop</p>
                    </div>
                </div>
            </Link>
            <ul className='d-flex'>
                <li onClick={(onClickCart)} className='mr-30'>
                    <img width={18} height={18} src="img/cart.svg" alt="Cart" />
                    <span>{totalCartSum} $</span>
                </li>
                <li>
                    <Link to="/favourites">
                        <img width={18} height={18} src="img/heart.svg" alt="Favourties" />
                    </Link>
                </li>
                <li>
                    <Link to="/orders">
                        <img width={18} height={18} src="img/user.svg" alt="User" />
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;

