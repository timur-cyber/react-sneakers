import React from 'react'

import AppContext from '../context'

export const useCart = () => {
    const { cartItems, totalCartSum } = React.useContext(AppContext)
    return { cartItems, totalCartSum }
}
