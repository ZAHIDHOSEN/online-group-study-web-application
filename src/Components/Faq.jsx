import React, { useState } from 'react';

const Faq = () => {

    const faqs = [
        {
          question: "What is this platform about?",
          answer: "This platform allows users to create, submit, and evaluate assignments in an online group-study environment.",
        },
        {
          question: "How do I create an assignment?",
          answer: "You can create an assignment by navigating to the 'Create Assignment' page after logging in.",
        },
        {
          question: "Who can grade assignments?",
          answer: "Any registered user can grade assignments, but users cannot grade their own submissions.",
        },
        {
          question: "Is there a deadline for assignments?",
          answer: "Yes, every assignment has a due date which is set by the creator while posting it.",
        },
      ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div className="max-w-4xl mx-auto my-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-300 rounded-lg shadow-md">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-5 py-4 bg-blue-100 hover:bg-blue-200 transition-all rounded-lg"
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white text-gray-700 border-t">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
};

export default Faq;



