import React, { useEffect, useState } from 'react';
import AssignmentCard from './AssignmentCard';

const SimpleAssignments = () => {

    const [assignments, setAssignments] = useState([])

    useEffect(()=>{
        fetch('https://assignment-11-server-3njj8ptaf-zahid123s-projects.vercel.app/assignments')
        .then(res =>res.json())
        .then(data => setAssignments(data))

    },[])
    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                  assignments.map(assignment =><AssignmentCard assignment={assignment}></AssignmentCard>

                  ) 
                }
            </div>


            
        </div>
    );
};

export default SimpleAssignments;