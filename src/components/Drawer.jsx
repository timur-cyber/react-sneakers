function Drawer({ onDelete, onCloseCart, items = [] }) {
    console.log(items)
    return (
        <div className="drawer">
            <h2 className='mb-30 d-flex justify-between'>Cart <img className='cu-p' src="/img/btn-remove.svg" alt="Remove" onClick={onCloseCart} /></h2>

            <div className="items">
              {items.map(obj => (
                <div className="cartItem d-flex align-center mb-20">
                    <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="cartItemImg"></div>
                    <div className='mr-20 flex'>
                    <p className='mb-5'>{obj.title}</p>
                    <b>{obj.price} $</b>
                    </div>
                    <img onClick={() => onDelete(obj)} className='removeBtn' src="/img/btn-remove.svg" alt="Remove" />
                </div>
              ))}  
            </div>

            <div className="cartTotalBlock">
            <ul>
                <li className='d-flex'>
                <span>Total:</span>
                <div></div>
                <b>500 $</b>
                </li>
                <li className='d-flex'>
                <span>Tax 5%:</span>
                <div></div>
                <b>2.5 $</b>
                </li>
            </ul>
            <button className='greenButton'>
                Create Order <img src="/img/arrow.svg" alt="Arrow" />
            </button>
            </div>
            
        </div>
    )
}

export default Drawer;