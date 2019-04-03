import React from "react";
import {Link} from "react-router-dom";
// import {Container} from "reactstrap";
import "./Navbar.css";

class Navbar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button 
                className = "navbar-toggler" 
                type = "button" 
                data-toggle = "collapse" 
                data-target = "#navbarNav" 
                aria-controls = "navbarNav" 
                aria-expanded = "false" 
                aria-label = "Toggle navigation"
            >
                <span className = "navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <Link to="/Airline">
                            <div className = "nav-link">   
                                Airline
                            </div>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/FlightTracker">
                            <div className = "nav-link">   
                                 FlightTracker
                            </div>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Culture">
                            <div className = "nav-link">   
                                Culture
                            </div>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/food">
                            <div className = "nav-link">   
                                Food Tracker
                            </div>
                        </Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link to= "/bmi">
                            <div className="nav-link">
                                BMI
                            </div>
                        </Link>
                    </li> */}
                </ul>
            </div>
        </nav>
        // <Container>
        //     <Navbar expand="lg" variant="light" bg="light">
        //         <Navbar.Brand href="#">Around The World</Navbar.Brand>
        //     </Navbar>
        // </Container>
        )
        
    }
   
};


export default Navbar;