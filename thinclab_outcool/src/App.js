// Librairies
import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Screens & components
import Login from './screens/Login'

// Styles
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </div>
  )
}

export default App
