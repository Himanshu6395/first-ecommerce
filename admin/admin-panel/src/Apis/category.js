import axios from "axios";
import { API_ENDPOINTS } from "../api/axiosInstance.js";


export const addCategory=async(data)=>{
    try{
        const res=await axios.post(`${API_ENDPOINTS.ADMIN}/add-category`,data)
        return res.data
    }
    catch(err){
        throw err.response?.data||err
    }
}
export const addSubCategory=async(data)=>{
    try{
        const res=await axios.post(`${API_ENDPOINTS.ADMIN}/add-sub-category`,data)
        return res.data
    }
    catch(err){
        throw err.response?.data||err
    }
}
 export const getCategories=async()=>{  
    try{
        const res=await axios.get(`${API_ENDPOINTS.ADMIN}/get-categories`)
        return res.data
    }
    catch(err){
        throw err.response?.data||err
    }  
    
}
export const  getSubCategoriesByCategory=async(categoryId)=>{
    try{
        const res=await axios.get(`${API_ENDPOINTS.ADMIN}/get-sub-categories/${categoryId}`)    
        return res.data
    }
    catch(err){
        throw err.response?.data||err
    }
}

export const addProduct=async(data)=>{
    try{
        const res=await axios.post(`${API_ENDPOINTS.ADMIN}/add-product`,data)
        return res.data
    }
        catch(err){
            throw err.response?.data||err
        }
    }

