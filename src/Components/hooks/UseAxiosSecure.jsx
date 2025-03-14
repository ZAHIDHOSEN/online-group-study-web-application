import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import AuthContext from '../../provider/AuthContext';
import { useNavigate } from 'react-router-dom';


const axiosInstance = axios.create({
    baseURL: 'https://assignment-11-server-3njj8ptaf-zahid123s-projects.vercel.app',
    withCredentials: true
})
const UseAxiosSecure = () => {
    const {logoutUser} = useContext(AuthContext)
    const navigate = useNavigate();

    useEffect(()=>{
       axiosInstance.interceptors.response.use(response=>{
        return response;
       }, error =>{
        console.log('error caught in interceptor', error);
        if(error.status === 401 || error.status === 403){
            console.log('need to logout the user')
            logoutUser()
            .then(() =>{
                console.log('logged out')
                navigate('/login');

            })
            .catch(error => console.log(error))
        }
        return Promise.reject(error)
       })
    },[])

    return axiosInstance;
 
};

export default UseAxiosSecure;