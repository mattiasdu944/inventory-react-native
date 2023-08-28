import axios from "axios";

const storeApi = axios.create({
    baseURL: 'https://store.innovacode.online/api'
})

export default storeApi;