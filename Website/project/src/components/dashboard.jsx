import React from 'react';

function Dashboard() {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center" style={{display: 'flex', flexDirection: 'column', gap: '20vh'}}>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        onClick={() => alert('Button Clicked!')} // Using alert for demonstration, consider a custom modal for production
      >
        Habit 1
      </button> 
            <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        onClick={() => alert('Button Clicked!')} // Using alert for demonstration, consider a custom modal for production
      >
        Habit 2
      </button> 
            <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        onClick={() => alert('Button Clicked!')} // Using alert for demonstration, consider a custom modal for production
      >
        Habit 3
      </button> 
            <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        onClick={() => alert('Button Clicked!')} // Using alert for demonstration, consider a custom modal for production
      >
        Habit 4
      </button> 
      {/* <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome Home!</h1>
      <p className="text-lg text-gray-600 mb-6">
        This is a simple home page built with React and styled with Tailwind CSS.
      </p>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        onClick={() => alert('Button Clicked!')} // Using alert for demonstration, consider a custom modal for production
      >
        Learn More
      </button> */}
    </div>
  );
}

export default Dashboard;
