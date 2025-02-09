import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../provider/AuthContext';
import axios from 'axios';
import UseAxiosSecure from '../../Components/hooks/UseAxiosSecure';

const MySubmission = () => {
    const {user} = useContext(AuthContext)
    const [assignments, setAssignments] =useState([])

    const axiosSecure = UseAxiosSecure();

    useEffect(()=>{




        axiosSecure.get(`/assignment-submission?email=${user.email}`)
        .then(res => setAssignments(res.data))

        


    },[user, axiosSecure])
    return (
        <div>
         <h3>My Submission: {assignments.length}</h3>
         <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Assignment-logo</th>
        <th>Difficulty level</th>
        <th>Assignment-marks</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
        assignments.map(assignment => <tr key={assignment._id}>
          {console.log(assignment)}
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={assignment.thumbnail_image_url}
                      alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{assignment.title}</div>
                 
                </div>
              </div>
            </td>
            <td>
              Assignment difficulty level
              <br />
              <span className="badge badge-ghost badge-sm">{assignment.assignment_difficulty_level}</span>
            </td>
            <td>
            {assignment.marks || "No marks"}
            </td>
            <th>
             
            </th>
          </tr>)
      }
  
  
   
    </tbody>

  </table>
</div>
        </div>
    );
};

export default MySubmission;






