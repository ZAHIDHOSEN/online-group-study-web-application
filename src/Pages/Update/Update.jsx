import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {

    const assignment = useLoaderData();
    const navigate = useNavigate()

    const {_id,title,description,marks,thumbnail_image_url,assignment_difficulty_level} =assignment

       const handleUpdate = e =>{
            e.preventDefault()
    
            const formData = new FormData(e.target);
            const updateData = Object.fromEntries(formData.entries())
    
            console.log(updateData)
    
            fetch((`http://localhost:5000/assignments/${_id}`),{
    
                method: 'PUT',
                headers:{
                    'content-type' : 'application/json'
                },
                
                body: JSON.stringify(updateData)
    
    
            })
            .then(res =>res.json())
            .then(data =>{
                if(data.modifiedCount > 0){
                    Swal.fire("Assignment updated Successfully");
                }
                navigate('/assignPage')
    
            })
    
    
    
        }




    return (


        <div>
        <h3 className='text-3xl font-bold'>Update Assignment</h3>
        <form onSubmit={handleUpdate} className="card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Title</span>
      </label>
      <input type="text" name='title' defaultValue={title} placeholder="title" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Description</span>
      </label>
      <input type="text" name='description' defaultValue={description} placeholder="description" className="input input-bordered" required />
   
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Marks</span>
      </label>
      <input type="number" name='marks' defaultValue={marks} placeholder="marks" className="input input-bordered" required />
   
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Image</span>
      </label>
      <input type="url" name='thumbnail_image_url' defaultValue={thumbnail_image_url} placeholder="thumbnail image url" className="input input-bordered" required />
   
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Assignment Difficulty level</span>
      </label>
      <select name='assignment_difficulty_level' defaultValue={assignment_difficulty_level} className="select select-ghost w-full max-w-xs">
       <option disabled selected>Pick the best JS framework</option>
        <option>Easy</option>
      <option>Medium</option>
    <option>Hard</option>
   </select> 
   
   
    </div>

    <div className="form-control mt-6">
      <button className="btn btn-primary">Update</button>
    </div>
  </form>
    </div>
    );
};

export default Update;