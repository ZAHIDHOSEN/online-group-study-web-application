import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Community = () => {
    const [message,setMessage] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:5000/community`)
        .then(res =>setMessage(res.data))
        .catch(err => console.log('data not fetch',err))
    },[])
    return (
        <section className="bg-gray-100 py-10 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900">Community & Support</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Connect, ask questions, and share your experiences.</p>
        </div>
        <div className="max-w-3xl mx-auto mt-6 space-y-4">
          {message.map((msg, index) => (
            <div key={index} className="p-4 bg-white dark:bg-blue-600 shadow rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{msg.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">{msg.message}</p>
            </div>
          ))}
        </div>
      </section>
    );
};

export default Community;