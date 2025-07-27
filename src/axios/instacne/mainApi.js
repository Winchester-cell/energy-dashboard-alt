import axios from "axios";

const apiRequest = axios.create({
    // baseURL: 'http://192.168.1.106:8000/api/',
    baseURL: 'http://185.239.0.192:9000/api',
    headers: {
        "Content-Type": "application/json"
    }
});

export default apiRequest