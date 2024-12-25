import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../provider/AuthContext';
import axios from 'axios';
import UseAxiosSecure from '../../Components/hooks/UseAxiosSecure';

const MySubmission = () => {
    const {user} = useContext(AuthContext)
    const [assignments, setAssignments] =useState([])

    const axiosSecure = UseAxiosSecure();

    useEffect(()=>{


        // fetch(`http://localhost:5000/assignment-submission?email=${user.email}`)
        // .then(res =>res.json())
        // .then(data =>{
        //     setAssignments(data);
        // })


        // axios.get(`http://localhost:5000}`,{
        //   withCredentials: true
        // })
        // .then(res => setAssignments(res.data))

        axiosSecure.get(`/assignment-submission?email=${user.email}`)
        .then(res => setAssignments(res.data))

        


    },[user.email])
    return (
        <div>
         <h3>My Submission: {assignments.length}</h3>
         <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Assignment-logo</th>
        <th>Difficulty level</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
        assignments.map(assignment =>     <tr key={assignment._id}>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
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
                  <div className="text-sm opacity-50">{assignment.marks}</div>
                </div>
              </div>
            </td>
            <td>
              Assignment difficulty level
              <br />
              <span className="badge badge-ghost badge-sm">{assignment.assignment_difficulty_level}</span>
            </td>
            <td>Purple</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
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