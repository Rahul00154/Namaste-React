import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'

/*
*** First Planning
 * Header {logo,link about home cart}
 * Body {SearchInput,Restaurant container}
 * Restaurant Container { restaurant card => name of res, cuisine,star rating,img,name of the restaurant card}
 * Footer{Copyright,About,Links,Contact}

*/

const RestaurantCard = (props) => {
  const { name, stars, cuisines, time } = props
  return (
    <div
      className="restaurant-card"
      style={{ backgroundColor: '#DCF2F1' }}
    >
      <img
        className="restaurant-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/djixqupxpmjfxxtiko4k"
        alt="restaurant-logo"
      />
      <h2>{name}</h2>
      <h4>{cuisines}</h4>
      <h4>{stars}</h4>
      <h4>{time}</h4>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      {/* restaurant card component*/}
      <div className="restaurant-container">
        <RestaurantCard
          name="Chai Wala"
          cuisines="Beverages,Snacks,Fast food"
          stars="4.5 Stars"
          time="45 minutes"
        />
        <RestaurantCard
          name="Punjabi Tadka"
          cuisines="North Indian, Chinese foods,Burger"
          stars="4.3 Stars"
          time="30 Minutes"
        />
      </div>
    </div>
  )
}

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://marketplace.canva.com/EAFMme8qKdk/1/0/1600w/canva-modern-restaurant-bar-and-grill-food-logo-qG0JgcwrqHQ.jpg"
          alt="logo"
        />
      </div>
      <div className="navItem">
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <div className="app">
      {/* header */}
      {/* Body */}
      {/* Footer*/}
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(<App />)
