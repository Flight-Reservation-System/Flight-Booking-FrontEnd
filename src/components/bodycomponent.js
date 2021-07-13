import AddFlights from "./AddFlights";
import HeroSection from "./HeroSection";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';

import { ButtonGroup, Button } from 'react-bootstrap'

function Bodycomponent() {
    return (
  
  
      <div  >
        <Router>
          <div  >
  
            <div  >
              <ButtonGroup aria-label="Basic example"  style={{width:'auto', margin:'auto'}}>
  
                <Link to="/addFlights"><Button className="btns" variant="secondary">BANGALORE</Button></Link>

              </ButtonGroup>
            </div>
          </div>
          <div class='box'>
            <Switch>
              <Route exact path="/">
                <HeroSection />
              </Route>
              <Route exact path="/addFlights" >
                <AddFlights />
                </Route>
             
            </Switch>
          </div>
  
  
  
        </Router>
      </div>
  
    );
  }
  
  export default Bodycomponent;