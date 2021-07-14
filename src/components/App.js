import AddFlights from './AddFlights';
import ViewFlights from './ViewFlights';
import Booking from './Booking'
import React from 'react'
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './Login';
import Landing from './Landing';
import Registration from './Registration';
import MainMenu from './MainMenu';
import { ProtectedRoute } from './protectedroute';
import SearchFlight from './SearchFlight'

function App() {



  return (

    <div>
     
        <div>

          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Registration} />
            <ProtectedRoute exact path="/mainMenu" component={MainMenu} />
            <ProtectedRoute path='/AddFlights' component={AddFlights} />
            <ProtectedRoute path='/ViewFlights' component={ViewFlights} />
            <ProtectedRoute path='/BookFlights' component={Booking} />
            <ProtectedRoute path='/searchFlights' component={SearchFlight} />
          </Switch>
        </div>

    






    </div>
  );
}

export default App;

/*<Route exact path='/mainMenu' component={MainMenu} />*/