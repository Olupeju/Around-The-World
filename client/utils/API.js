import axios from "axios";

export default {
    saveAirline: function (airline){
        return axios.post("/db/airline",airline);
    }
};