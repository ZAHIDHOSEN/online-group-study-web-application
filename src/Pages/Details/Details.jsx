import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
    const details = useLoaderData();
    console.log(details);
    const {_id,title,description,marks,thumbnail_image_url,assignment_difficulty_level} =details

    return (
        <div className='text-center my-10'>
            <img className='mx-auto' src={thumbnail_image_url} alt="" />
            <h3 className='text-2xl font-bold'> {title}</h3>
            <p>Marks: {marks}</p>
            <p>Assignment defficulty level: {assignment_difficulty_level}</p>
            <p>{description}</p>
            <Link to={`/submission/${_id}`}>
            <button className='btn btn-outline mt-2'>Take Assignment</button>
            </Link>

            
        </div>
    );
};

export default Details;