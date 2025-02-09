
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import AuthContext from '../provider/AuthContext';

const AssignmentCard = ({ assignment }) => {
  const { user } = useContext(AuthContext);
  const [isCreator, setIsCreator] = useState(false);  
  const navigate = useNavigate();
  const { _id, title, description, marks, thumbnail_image_url, assignment_difficulty_level, createdBy } = assignment;

  
  useEffect(() => {
    if (user?.email === createdBy) {
      setIsCreator(true);  
    } else {
      setIsCreator(false);  
    }
  }, [user, createdBy]);

  const handleDelete = (_id) => {
    if (!user || !isCreator) {
      Swal.fire({
        title: "Permission Denied",
        text: "You can only delete assignments you created!",
        icon: "error",
      });
      return;
    }

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-11-server-pi-seven.vercel.app/assignments/${_id}?email=${user.email}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your assignment has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.error("Error deleting assignment:", error);
          });
      }
    });
  };

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <div className="flex items-center">
        <figure>
          <img className='h-44 w-80' src={thumbnail_image_url} alt="Assignment" />
        </figure>
       
      </div>

      <div className="card-body">
      <h3 className="text-2xl">{title}</h3>
        <h2 className="card-title">Marks: {marks}</h2>
        <p>Level: {assignment_difficulty_level}</p>
        <div className="flex gap-1">
          {isCreator && (
            <button onClick={() => handleDelete(_id)} className="btn bg-red-500 text-black">
              Delete
            </button>
          )}

          { 
            <Link to={`/update/${_id}`}>
              <button className="btn bg-green-500 text-black">Update</button>
            </Link>
          }

          <Link to={`/assignments/${_id}`}>
            <button className="btn btn-primary">View details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;



