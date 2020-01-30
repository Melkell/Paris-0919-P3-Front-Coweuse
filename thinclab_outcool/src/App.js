// Librairies
import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

// Screens & components
import TypeItin from './components/TypeItin'
// Styles
import './App.css'
import Header from './components/Header'
import Dashboard from './screens/Dashboard';
import Form from './components/Form';
import Formconnection from './components/Formconnection';
import DashboardAdmin from './screens/DashboardAdmin';
import Footer from './components/Footer';
import PrivateRoute from './helpers/PrivateRoute';


const App = () => {
    return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path='/login' component={Formconnection} />
          <PrivateRoute exact path='/dashboardCollab' component={Dashboard}/>
          <PrivateRoute exact path='/dashboardAdmin' component={DashboardAdmin} />
          <PrivateRoute exact path='/form' component={Form} />
          <PrivateRoute exact path='/itineraire' component={TypeItin} />
        </Switch>
      </Router>
      
    </div>
    )
}

export default App
