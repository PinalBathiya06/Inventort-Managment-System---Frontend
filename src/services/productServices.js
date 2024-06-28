import axios from "./axiosInterceptors";

// import axios from 'axios';
const BASE_URL = 'http://localhost:8081/api/products/';

export const getProducts = ()=> {return axios().get("http://localhost:8081/api/products").then(res=>res)}
export const addProducts = (data)=> {return axios().post("http://localhost:8081/api/products/addProduct",data).then(res=>res)}
// export const removeProducts = (data)=> {return axios().delete("http://localhost:8081/api/products/:id",data).then(res=>res)}


// export const getProducts = async () => {
//     try {
//         const response = await axios.get(BASE_URL);
//         return response.data;
//     } catch (error) {
//         console.error(error);
//     }
// };

export const removeProducts = async (id) => {
    try {
        if (id) {
            const response = await axios.delete(`${BASE_URL}${id}`);
            return response.data;
        } else {
            throw new Error('Invalid id');
        }
    } catch (error) {
        console.error(error);
    }
};