import React, { useContext } from 'react';
import AuthContext from '../provider/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);


    if(user){

        return children

    }

    return <Navigate to="/login"></Navigate>
};

export default PrivetRoute;