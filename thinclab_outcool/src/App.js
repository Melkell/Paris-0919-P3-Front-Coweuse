// Librairies
import React from 'react'

// Screens & components
import TypeItin from './components/TypeItin'
// Styles
import './App.css'
import Header from './components/Header'
import Dashboard from './screens/Dashboard';
import Admin from './components/Admin';

const App = () => {
  return (
    <div className="App">
      <Header />
      <TypeItin />
      {/* <Dashboard /> */}
    </div>
  )
}

export default App
