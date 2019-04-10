import React from "react";
import axios from "axios";

class Airline extends React.Component{
    state = {
        nameAirline:"",
        type:"scheduled",
        statusAirline:"active",
        nameCountry:"",
        userId: this.props.id._id
    }
    handleClickeEvent(e){
        e.preventDefault();
        const data = this.state;
    }

}

export default Airline;