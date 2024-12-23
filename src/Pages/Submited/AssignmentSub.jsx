import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AuthContext from '../../provider/AuthContext';

const AssignmentSub = () => {

    const {id} = useParams();
    const {user} = useContext(AuthContext);
    const navigate = useNavigate()
    // console.log(id,user);

    const submitAssignment = e =>{
        e.preventDefault()
        const form = e.target;
        const google = form.google.value;
        const note = form.note.value;
        // console.log(google,note);

        const assignmentSubmission = {
           assignment_id: id,
           student_email: user.email,
           google,
           note



        }
        fetch('http://localhost:5000/assignment-submission',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(assignmentSubmission)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            navigate('/')
        })

    }
    return (
        <div className="card bg-base-100 w-full shadow-2xl">
          <h1 className="text-5xl font-bold text-center">Submit Assignment</h1>
            <form onSubmit={submitAssignment} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Google Link</span>
                </label>
                <input type="url" name='google' placeholder="Google docs link" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Note</span>
                </label>
                <input type="text" name='note' placeholder="Note some text" className="input input-bordered" required />
              
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submited</button>
              </div>
            </form>
          </div>

       
          
     
    );
};

export default AssignmentSub;