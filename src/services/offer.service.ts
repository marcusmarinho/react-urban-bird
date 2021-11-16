import axios from "axios";
import api from "../environments/environment";

export const getOffer = axios.get(`${api.baseURL}/ofertas1`).then(
    (response) => {
        return response.data;
    }
).catch((err) => {
    throw(err);
})
