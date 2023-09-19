import React, { useState } from 'react';

const UpdateForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = () => {
    // You can implement your update logic here.
    console.log('Name:', formData.name);
    console.log('Email:', formData.email);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Update Information</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="John Doe"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="example@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="button"
            onClick={handleUpdate}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;