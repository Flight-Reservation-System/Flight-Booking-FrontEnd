
import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './Login';
import Landing from './Landing';
import Registration from './Registration';
import Booking from './Booking';
import AddFight from './AddFight';
import ViewFlights from './ViewFlights';

function App() {



  return (

    <div>
    {/* <Router>
    <div>
      
          <Switch>
              <Route exact path='/' component={Landing}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/register' component={Registration}/>
              <Route exact path='/booking' component={Booking}/>
          </Switch>
        </div>
     
  </Router> */}

  <AddFight/>

  {/* <ViewFlights/> */}


  </div>
  );
}

export default App;
