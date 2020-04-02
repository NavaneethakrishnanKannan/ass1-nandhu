import axios, { config } from "../services/auth";

export const getFoodData = async (url) => {
    return await axios.get(url, config).then(res => {
        if (res.data.status === 200) {
            return res.data.result;
        } else {
            return []
        }
    }, err => {
        console.log(err);
    })
}