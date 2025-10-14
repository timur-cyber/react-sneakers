import './App.scss'
import 'macro-css'

function App() {
  return (
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
  )
}

export default App
