import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons';

const Post = ({ username, time, image, caption, likes, comments, shares }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4">
      <div className="flex items-center mb-4">
        <img
          className="h-12 w-12 rounded-full mr-4"
          src={image}
          alt={`Post by ${username}`}
        />
        <div>
          <div className="font-semibold">{username}</div>
          <div className="text-sm text-gray-500">{time}</div>
        </div>
      </div>

      {image && (
        <img
          className="w-full mb-4 rounded-lg object-cover"
          src={image}
          alt="User post"
        />
      )}

      <p style={{ textAlign: 'left' }}>{caption}</p>
      <div className="flex items-center justify-between text-gray-500 text-sm mt-4">
        <span>
          <FontAwesomeIcon icon={faHeart} /> {likes} Likes
        </span>
        <span>
          <FontAwesomeIcon icon={faComment} /> {comments} Comments
        </span>
        <span>
          <FontAwesomeIcon icon={faShare} /> {shares} Shares
        </span>
      </div>
    </div>
  );
};

export default Post;
