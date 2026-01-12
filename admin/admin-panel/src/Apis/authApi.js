import axios from "axios";
import {API_ENDPOINTS} from "../api/axiosInstance.js"
export const Adminregister=async(data)=>{
    try{
    const res=await axios.post(`${API_ENDPOINTS.ADMIN}/register`,data)
    return res.data
    }
    catch(err){
     throw err.response?.data || err;

    }
}

export const login=async(data)=>{
    try{
        const res=await axios.post(`${API_ENDPOINTS.ADMIN}/login`,data)
        return res.data
    }
    catch(err){
        throw err.response?.data||err
    }
}