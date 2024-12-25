import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import PrivetRoute from '../Router/PrivetRoute';

const AssignmentCard = ({assignment}) => {
    const {_id,title,description,marks,thumbnail_image_url,assignment_difficulty_level} =assignment

    const handleDelete = _id =>{
      console.log(_id);

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
         
          fetch(`https://assignment-11-server-pi-seven.vercel.app/assignments/${_id}`,{
            method: 'DELETE',

      
       

          })
          .then(res => res.json())
          .then(data =>{
            console.log(data);
            if(data.deletedCount > 0){
               Swal.fire({
               title: "Deleted!",
                text: "Your assignment has been deleted.",
                icon: "success"
          });

            }

          })
        }
      });



    }
    return (
        <div className="card card-compact bg-base-100  shadow-xl">
            <div className='flex items-center'>
            <figure>
            <img
             src={thumbnail_image_url}
             alt="Shoes" />
             </figure>
             <h3 className="text-2xl">{title}</h3>
            </div>
     
        <div className="card-body">
          <h2 className="card-title">Marks: {marks}</h2>
          <p>Level: {assignment_difficulty_level}</p>
          <div className="flex gap-1">
          
          <button
            onClick={() =>handleDelete(_id)}
             className="btn bg-red-500 text-black">Delate</button>
             <Link to={`/update/${_id}`}>
             <button className="btn bg-green-500 text-black">Update</button></Link>
          
            <Link to={`/assignments/${_id}`}>
            <button className="btn btn-primary">View details</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default AssignmentCard;