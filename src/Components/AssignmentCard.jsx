import React from 'react';

const AssignmentCard = ({assignment}) => {
    const {title,description,marks,thumbnail_image_url,assignment_difficulty_level} =assignment
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
          <div className="flex gap-2 ">
            <button className="btn bg-red-500 text-black">Delate</button>
            <button className="btn bg-green-500 text-black">Update</button>
            <button className="btn btn-primary">View details</button>
          </div>
        </div>
      </div>
    );
};

export default AssignmentCard;