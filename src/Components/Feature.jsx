import React from 'react';
import { FaUserFriends, FaClipboardList, FaCheckCircle } from "react-icons/fa";

const Feature = () => {
    const features = [
        {
          icon: <FaUserFriends className="text-4xl text-blue-500" />,
          title: "Collaborative Learning",
          description: "Study together with friends, create and complete assignments in a group-based learning environment."
        },
        {
          icon: <FaClipboardList className="text-4xl text-green-500" />,
          title: "Assignment Management",
          description: "Easily create, track, and submit assignments with deadlines and difficulty levels."
        },
        {
          icon: <FaCheckCircle className="text-4xl text-yellow-500" />,
          title: "Grading System",
          description: "Evaluate your peers' submissions and receive constructive feedback to improve your skills."
        }
      ];
    return (
        <section className="py-12 bg-gray-100 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                {feature.icon}
                <h3 className="text-xl font-semibold text-gray-700 mt-4">{feature.title}</h3>
                <p className="text-gray-600 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
     
    );
};

export default Feature;





