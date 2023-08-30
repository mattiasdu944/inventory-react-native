import axios from "axios";

const storeApi = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
    headers: {
        Accept: 'application/json'
    }
})

export default storeApi;