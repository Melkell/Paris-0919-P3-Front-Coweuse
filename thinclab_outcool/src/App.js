// Librairies
import React from 'react'

// Screens & components
// Styles
import './App.css'
import Header from './components/Header'
import Dashboard from './screens/Dashboard';
import DashboardAdmin from './screens/DashboardAdmin';

const App = () => {
  return (
    <div className="App">
      <Header />
      <DashboardAdmin />
    </div>
  )
}

export default App
