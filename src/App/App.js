import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from '../Header/Header'
import Rsvp from '../Rsvp/Rsvp'
import About from '../About/About'
import Agenda from '../Agenda/Agenda'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
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
