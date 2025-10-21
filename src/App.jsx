import './App.scss'
import 'macro-css'

function App() {
  return (
    <>
    <div className="overlay">
      <div className="drawer">
        <h2 className='mb-30 d-flex justify-between'>Cart <img className='cu-p' src="/img/btn-remove.svg" alt="Remove" /></h2>

        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }} className="cartItemImg"></div>
            <div className='mr-20 flex'>
              <p className='mb-5'>Male Sneakers Nike Blazer Mid</p>
              <b>200 $</b>
            </div>
              <img className='removeBtn' src="/img/btn-remove.svg" alt="Remove" />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div style={{ backgroundImage: "url(/img/sneakers/2.jpg)" }} className="cartItemImg"></div>
            <div className='mr-20 flex'>
              <p className='mb-5'>Male Sneakers Nike Blazer Mid</p>
              <b>200 $</b>
              </div>
              <img className='removeBtn' src="/img/btn-remove.svg" alt="Remove" />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div style={{ backgroundImage: "url(/img/sneakers/3.jpg)" }} className="cartItemImg"></div>
            <div className='mr-20 flex'>
              <p className='mb-5'>Male Sneakers Nike Blazer Mid</p>
              <b>200 $</b>
              </div>
              <img className='removeBtn' src="/img/btn-remove.svg" alt="Remove" />
          </div>
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
    </div>
    <div className='wrapper clear'>
      <header className='d-flex justify-between align-center p-40'>
        <div className='d-flex align-center'>
          <img width={40} height={40} src="/img/logo.png" />
          <div>
            <h3 className='text-uppercase'>React Sneakers</h3>
            <p className='opacity-5'>The Best Sneakers Shop</p>
          </div>
        </div>
        <ul className='d-flex'>
          <li className='mr-30'>
            <img width={18} height={18} src="/img/cart.svg" />
            <span>120 $</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" />
            <span></span>
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="mb-40 d-flex align-center justify-between">
          <h1 className=''>All Items</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>
        
        <div className="d-flex">
          <div className="card">
            <div className="favourite">
              <img src="/img/unliked.svg" alt="Unliked" />
            </div>
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Snealers" />
            <h5>Male Sneakers Nike Blazer Mid</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Price: </span>
                <b>200 $</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/2.jpg" alt="Snealers" />
            <h5>Male Sneakers Nike Blazer Mid</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Price: </span>
                <b>200 $</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/3.jpg" alt="Snealers" />
            <h5>Male Sneakers Nike Blazer Mid</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Price: </span>
                <b>200 $</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/4.jpg" alt="Snealers" />
            <h5>Male Sneakers Nike Blazer Mid</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Price: </span>
                <b>200 $</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default App
