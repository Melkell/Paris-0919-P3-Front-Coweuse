// Librairies
import React from 'react'

// Screens & components
// Styles
import './App.css'
import Header from './components/Header'
import Dashboard from './screens/Dashboard';
import DashboardAdmin from './screens/DashboardAdmin';
import Form from './components/Form';
import Formconnection from './components/Formconnection';

const App = () => {
  return (
    <div className="App">
      <Header />
      <DashboardAdmin />
      <Dashboard />
      {/* <Formconnection /> */}
    </div>
  )
}

export default App
