import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import image from '../assets/feedback-thanks.png';

const Feedback = ({ show, onClose }) => {
  const initialFormData = {
    name: '',
    email: '',
    message: '',
    feedback: 'Very good...',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [sliderValue, setSliderValue] = useState(4);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSliderChange = (e) => {
    const value = e.target.value;
    setSliderValue(value);

    let feedbackText = '';
    switch (parseInt(value, 10)) {
      case 1:
        feedbackText = 'Not good...';
        break;
      case 2:
        feedbackText = 'Average...';
        break;
      case 3:
        feedbackText = 'Good...';
        break;
      case 4:
        feedbackText = 'Very good...';
        break;
      case 5:
        feedbackText = 'Excellent...';
        break;
      default:
        feedbackText = 'Very good...';
    }
    setFormData({
      ...formData,
      feedback: feedbackText,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowThankYou(true);
  };

  const handleClose = () => {
    setFormData(initialFormData);
    setSliderValue(4);
    setShowThankYou(false);
    onClose();
  };

  if (!show) {
    return null;
  }

  const emojiList = ['😠', '😐', '😊', '😁', '😍'];

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black bg-opacity-50 transition-opacity">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        {showThankYou ? (
          <>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-black">Thank you! 💖</h2>
              <button onClick={handleClose} className="text-gray-600 hover:text-gray-900">
                <AiOutlineClose size={24} />
              </button>
            </div>
            <div className="text-center">
              <p className="text-gray-700">Thanks for submitting your feedback! We really appreciate your time.</p>
              <img src={image} alt="Thank you" className="mx-auto mt-4" />
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-black">Customer Feedback</h2>
              <button onClick={handleClose} className="text-gray-600 hover:text-gray-900">
                <AiOutlineClose size={24} />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-900">Name<sup className="text-red-500">*</sup></label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-100 rounded w-full p-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-900">Email<sup className="text-red-500">*</sup></label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-100 rounded w-full p-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-900">Rate Your Experience...</label>
                <div className="flex items-center mb-2">
                  <span className="text-2xl">{emojiList[sliderValue - 1]}</span>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={sliderValue}
                    onChange={handleSliderChange}
                    className="mx-2 w-full"
                  />
                </div>
                <p className="text-gray-700 text-center">{formData.feedback}</p>
              </div>
              <div className="mb-4">
                <label className="block text-gray-900">Write Your Feedback Here<sup className="text-red-500">*</sup></label>
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-gray-100 rounded w-full h-28 p-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your feedback..."
                />
              </div>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full font-semibold hover:bg-blue-700">Submit</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Feedback;
