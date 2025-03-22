import axios from "axios"

export const register=async(formData)=>{
    const response = await axios.post("/api/user/register",formData)
    localStorage.setItem('user', JSON.stringify(response.data))
    console.log(response.data);
    return response.data
}
export const login=async(formData)=>{
    const response = await axios.post("/api/user/login",formData)
    localStorage.setItem('user', JSON.stringify(response.data))
    console.log(response.data);
    return response.data
}