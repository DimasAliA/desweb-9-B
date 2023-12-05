import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faImage, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

const Search = ({ onPostSubmit }) => {
  const [statusText, setStatusText] = useState('');
  const [imageData, setImageData] = useState('');

  const handleStatusChange = (event) => {
    setStatusText(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageData(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const currentUsername = localStorage.getItem('currentUsername');
  const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
  const userData = registeredUsers.find(user => user.username === currentUsername);

  const handleSubmit = () => {
    const newPost = {
      username:userData.username,
      time: new Date().toLocaleString(),
      image: imageData,
      caption: statusText,
      likes: 0,
      comments: 0,
      shares: 0,
    };

    onPostSubmit(newPost);

    setStatusText('');
    setImageData('');
    document.getElementById('file-upload').value = null;
  };

  return (
    <div className="flex flex-col items-center p-3 bg-white shadow space-y-3 rounded-lg ">
      <div className="flex w-full justify-between items-center">
        <div className="relative flex items-center w-full">
          <FontAwesomeIcon
            icon={faImage}
            className="absolute left-0 ml-2 text-gray-400 cursor-pointer"
            onClick={() => document.getElementById('file-upload').click()}
          />
          <input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={handleImageChange}
            accept="image/*"
          />
          <input
            className="pl-10 pr-3 py-1 w-full rounded-3xl border border-gray-300 focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="What's on your mind, Felix?"
            value={statusText}
            onChange={handleStatusChange}
          />
        </div>
        <button
          className="flex items-center px-3 py-2 rounded-3xl text-white bg-blue-500 hover:bg-blue-600 focus:outline-none"
          onClick={handleSubmit}
        >
          <FontAwesomeIcon icon={faPlusSquare} className="mr-2" />
          <span>Post</span>
        </button>
      </div>
    </div>
  );
};

export default Search;
