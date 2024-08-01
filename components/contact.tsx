"use client"

import React, { useState } from "react";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

function GetInTouch() {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });
  const [isAgreed, setIsAgreed] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement your form submission logic here (e.g., send data to server)
    console.log("Form Data:", formData);
    setFormData({ name: "", email: "", message: "" });
    setIsAgreed(false);
    setIsSuccess(true); // Show success message after submission
  };

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="container mx-auto py-16 px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="w-full lg:w-1/2">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <p className="text-2xl font-bold text-gray-800">
              Get in touch
            </p>
          </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="terms"
                  type="checkbox"
                  className="w-4 h-4 text-indigo-600 bg-gray-100 rounded border-gray-300 focus:ring-indigo-500 focus:ring-opacity-50"
                  checked={isAgreed}
                  onChange={(e) => setIsAgreed(e.target.checked)}
                />
                <label htmlFor="terms" className="ml-2 text-gray-700 text-sm">
                You must agree to the terms and conditions to continue.
                </label>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  disabled={!isAgreed}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
