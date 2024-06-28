import axios from "axios";


const axiosInterceptors = () => {
    const baseURL = "http://localhost:8081/api/";
    let headers = {"Access-Control-Allow-Origin": "/*"};
    if (sessionStorage.getItem('token')) {
        headers.Authorization = "Bearer " + sessionStorage.getItem('token');
    }
    const axiosInterceptors = axios.create({
        baseURL: baseURL,
        headers,
        validateStatus: function (status) {
            return status <= 500;
        }
    });
    axiosInterceptors.interceptors.response.use(
        (response) => {
            return new Promise((resolve, reject) => {
                resolve(response.data);
            })
        },
        (error) => {
            return new Promise((resolve, reject) => {
                reject(error);
            });
        }
    );
    return axiosInterceptors
}

export default axiosInterceptors;