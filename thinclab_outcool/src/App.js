// Librairies
import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

// Screens & components
import TypeItin from './components/TypeItin'
// Styles
import './App.css'
import Header from './components/Header'
import Dashboard from './screens/Dashboard';
<<<<<<< HEAD
import DashboardAdmin from './screens/DashboardAdmin';
import Form from './components/Form';
import Formconnection from './components/Formconnection';
=======
import Form from './components/Form';
import Formconnection from './components/Formconnection';
import DashboardAdmin from './screens/DashboardAdmin';
import Footer from './components/Footer';

>>>>>>> 8b0eedf1a97a4b251e3cf75b43d3816c5fb311ac

const App = () => {
  return (
    <div className="App">
      <Header />
<<<<<<< HEAD
      <DashboardAdmin />
      <Dashboard />
      {/* <Formconnection /> */}
=======
      <Router>
        <Switch>
          <Route exact path='/dashboardCollab' component={Dashboard}/>
          <Route exact path='/dashboardAdmin' component={DashboardAdmin} />
          <Route exact path='/login' component={Formconnection} />
          <Route exact path='/form' component={Form} />
          <Route exact path='/itineraire' component={TypeItin} />
        </Switch>
      </Router>
      
>>>>>>> 8b0eedf1a97a4b251e3cf75b43d3816c5fb311ac
    </div>
  )
}

export default App
