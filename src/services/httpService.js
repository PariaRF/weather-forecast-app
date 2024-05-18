import axios from "axios";

export const API_KEY = "jeeoq1au3misxycsy40k2mpgbvhgsrjqyu3na1cj";
const API_BASE_URL = "https://www.meteosource.com/api/v1/free";



const app = axios.create({
    baseURL: API_BASE_URL,
})

const http = {
    get: app.get,
    post: app.post,
}

export default http;