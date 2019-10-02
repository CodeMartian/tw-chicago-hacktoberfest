import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Rsvp from '../Rsvp/Rsvp'
import About from '../About/About'
import Agenda from '../Agenda/Agenda'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Home />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/agenda" component={Agenda} />
          <Route path="/" component={Rsvp} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
