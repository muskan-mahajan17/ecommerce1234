import axios from "axios";

//Products API ka URL
const API_URL="https://dummyjson.com/products";

// API se saare products fetch krne vala function
export const getProducts = async()=>{
    const response = await axios.get(API_URL); //API ko request bhej rhe hai

    return response.data;  //API se mila product data return kr rhe hai 
}

export const getProductById = async(id)=>{
    const response = await axios.get(`${API_URL}/${id}`)             // specific product ki API URL

    return response.data
} 