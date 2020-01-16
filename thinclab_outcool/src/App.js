// Librairies
import React from 'react'

// Screens & components

// Styles
import './App.css'
import Header from './components/Header'
import Dashboard from './screens/Dashboard';
import Admin from './components/Admin';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Dashboard />
    </div>
  )
}

export default App
