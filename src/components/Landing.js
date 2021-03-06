import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Landing.css';
import { useHistory } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap'




const Landing = () => {

    let history = useHistory();

    return (
        <div>

           
            <header id="showcase">
                <Navbar collapseOnSelect expand="lg" >
                    <Container>
                        <Navbar.Brand><h1 style={{color:"black"}}>FlightiGo</h1></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                
                            </Nav>
                            <Nav >
                                <Nav.Link onClick={() => { history.push("./login"); }}><h3 style={{color:"Black"}}>Login</h3></Nav.Link>
                                <Nav.Link onClick={() => { history.push("./register"); }} >
                                    <h3 style={{color:"Black"}}>SignUp</h3>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <hr/>

            </header>

        </div>


    )
};

export default Landing;

