import { Cookies } from "react-cookie";

import axios from "axios";
import { API_PORT } from "../../constants/portConstants";
axios.defaults.baseURL = API_PORT;
export default axios;

export const config = {
    headers: {
        "Content-Type": "application/json"
    }
};

export const cookies = new Cookies();
