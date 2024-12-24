import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const CreateAssignment = () => {
    const navigate = useNavigate();

    const handleCreate = e =>{
        e.preventDefault()

        const formData = new FormData(e.target);
        const currentData = Object.fromEntries(formData.entries())

        console.log(currentData)

        fetch('http://localhost:5000/assignments',{

            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            
            body: JSON.stringify(currentData)


        })
        .then(res =>res.json())
        .then(data =>{
            if(data.insertedId){
                Swal.fire("Assignment Created Successfully");
            }
            navigate('/assignPage')

        })



    }
    return (
        <div>
            <h3 className='text-3xl font-bold'>create assignment</h3>
            <form onSubmit={handleCreate} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input type="text" name='title' placeholder="title" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input type="text" name='description' placeholder="description" className="input input-bordered" required />
       
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Marks</span>
          </label>
          <input type="number" name='marks' placeholder="marks" className="input input-bordered" required />
       
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="url" name='thumbnail_image_url' placeholder="thumbnail image url" className="input input-bordered" required />
       
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Assignment Difficulty level</span>
          </label>
          <select name='assignment_difficulty_level' className="select select-ghost w-full max-w-xs">
           <option disabled selected>Pick the best JS framework</option>
            <option>Easy</option>
          <option>Medium</option>
        <option>Hard</option>
       </select> 
       
       
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Create</button>
        </div>
      </form>
        </div>
    );
};

export default CreateAssignment;