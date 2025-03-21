import React, { useContext } from 'react';
import AuthContext from '../provider/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);



    if(loading){
        return <span className="loading loading-bars loading-lg"></span>

    }


    if(user){

        return children

    }

    return <Navigate to="/login" state={location?.pathname}></Navigate>
};

export default PrivetRoute;