import axios from "axios";
import api from "../environments/environment";

export const getOffers = axios.get(`${api.baseURL}/ofertas`).then(
    (response) => {
        return response.data;
    }
).catch((err) => {
    throw(err);
})

export async function getAddtionalInfo(offerId: any) {
    const response = await axios.get(`${api.baseURL}/como-usar/${offerId}`);
    return response.data;
}

export async function getLocation(offerId: any) {
    const response = await axios.get(`${api.baseURL}/onde-fica/${offerId}`);
    return response.data;
}

export async function getDetails(offerId: any) {
    const response = await axios.get(`${api.baseURL}/ofertas/${offerId}`);
    return response.data;
}

export async function accomplishPurchase(payload: any) {

    const headers = {
        'Content-Type': 'application/json',
      };

    const response = await axios.post(`${api.baseURL}/pedidos`,payload,{
        headers: headers
    });
    return response.data;
}

