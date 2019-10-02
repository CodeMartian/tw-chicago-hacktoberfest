import React from 'react'
import Header from '../Header/Header'
import banner from './assets/banner.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Header />
      <img
        className="banner"
        src={banner}
        alt="Hacktoberfest Thoughtworks"
      />
    </div>
  )
}

export default App
