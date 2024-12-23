import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../provider/AuthContext';

const MySubmission = () => {
    const {user} = useContext(AuthContext)
    const [assignments, setAssignments] =useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/assignment-submission?email=${user.email}`)
        .then(res =>res.json())
        .then(data =>{
            setAssignments(data);
        })
    },[user.email])
    return (
        <div>
         <h3>My Submission: {assignments.length}</h3>
        </div>
    );
};

export default MySubmission;