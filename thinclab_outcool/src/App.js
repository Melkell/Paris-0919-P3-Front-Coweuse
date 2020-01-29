// Librairies
import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

// Screens & components
// Styles
import './App.css'
import Header from './components/Header'
import Dashboard from './screens/Dashboard';
import Form from './components/Form';
import Formconnection from './components/Formconnection';
// import DashboardAdmin from './components/DashboardAdmin';
import Footer from './components/Footer';
import DashboardAdmin from './screens/DashboardAdmin';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path='/dashboardCollab' component={Dashboard}/>
          <Route exact path='/dashboardAdmin' component={DashboardAdmin} />
          <Route exact path='/login' component={Formconnection} />
          <Route exact path='/form' component={Form} />
        </Switch>
      </Router>
      
    </div>
  )
}

export default App
