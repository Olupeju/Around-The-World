import React from "react";
// import {Link} from "react-router-dom";
import {Container} from "reactstrap";
import "./Navbar.css";

class Navbar extends React.Component{
    render(){
        return(
        <Container>
            <Navbar expand="lg" variant="light" bg="light">
                <Navbar.Brand href="#">Around The World</Navbar.Brand>
            </Navbar>
        </Container>
        )
        
    }
   
}


export default Navbar;