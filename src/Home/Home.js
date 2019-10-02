import React from 'react'
import Header from '../Header/Header'
import banner from './assets/banner.png'

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <img
        className="banner"
        src={banner}
        alt="Hacktoberfest Thoughtworks"
      />
    </div>
  )
}

export default Home
