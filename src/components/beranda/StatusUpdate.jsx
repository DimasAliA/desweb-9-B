// StatusUpdate.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faVideo, faGrin } from '@fortawesome/free-solid-svg-icons';

const StatusUpdate = () => {
  const currentUsername = localStorage.getItem('currentUsername');
  const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
  const userData = registeredUsers.find(user => user.username === currentUsername);
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="flex items-center space-x-3 mb-4">
        <img
          className="h-10 w-10 rounded-full"
          src="/images/wibu.jpg"
          alt="Your Name"
        />
        <input
          type="text"
          placeholder={`What's on your mind, ${userData.fullName}?`}
          className="flex-1 p-2 border border-gray-300 rounded-full focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex justify-between">
        <button className="flex items-center px-3 py-2 rounded-full text-gray-600 hover:bg-gray-100 focus:outline-none">
          <FontAwesomeIcon icon={faImage} className="h-5 w-5 mr-1" />
          <span className="text-sm">Photo/Video</span>
        </button>
        <button className="flex items-center px-3 py-2 rounded-full text-gray-600 hover:bg-gray-100 focus:outline-none">
          <FontAwesomeIcon icon={faVideo} className="h-5 w-5 mr-1" />
          <span className="text-sm">Live Video</span>
        </button>
        <button className="flex items-center px-3 py-2 rounded-full text-gray-600 hover:bg-gray-100 focus:outline-none">
          <FontAwesomeIcon icon={faGrin} className="h-5 w-5 mr-1" />
          <span className="text-sm">Feeling/Activity</span>
        </button>
      </div>
    </div>
  );
};

export default StatusUpdate;
