import React, { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons';

const Post = ({ postId,username, time, image, caption, likes, shares }) => {
  const storedImage = localStorage.getItem('profileImage');
  const [isCommentVisible, setCommentVisible] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [postComments, setPostComments] = useState([]);

  useEffect(() => {
    const storedComments = localStorage.getItem('postComments');
    if (storedComments) {
      setPostComments(JSON.parse(storedComments));
    }
  }, []);

  const toggleCommentVisibility = () => {
    setCommentVisible(!isCommentVisible);
  };

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const saveCommentsToLocalStorage = (comments) => {
    localStorage.setItem('postComments', JSON.stringify(comments));
  };

  const addComment = () => {
    if (commentText.trim() !== '') {
      const newComment = { username, text: commentText };
      const updatedComments = [...postComments];
      if (!updatedComments[postId]) {
        updatedComments[postId] = [];
      }
      updatedComments[postId].push(newComment);
      setPostComments(updatedComments);
      saveCommentsToLocalStorage(updatedComments);
      setCommentText('');
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4">
      <div className="flex items-center mb-4">
        <img
          className="h-12 w-12 rounded-full mr-4"
          src={storedImage}
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
      <button
        className="text-blue-500 hover:underline"
        onClick={toggleCommentVisibility}
      >
        {isCommentVisible ? 'Hide Comments' : 'Show Comments'}
      </button>

      {/* Daftar komentar */}
      {isCommentVisible && (
        <div className="mt-4">
          {postComments.map((comment, index) => (
            <div key={index} className="mb-2">
              <strong>{comment.username}: </strong>
              {comment.text}
            </div>
          ))}

          <div className="flex mt-2">
            <input
              type="text"
              placeholder="Add a comment..."
              className="flex-1 border border-gray-300 rounded-l-md p-2 focus:outline-none"
              value={commentText}
              onChange={handleCommentChange}
            />
            <button
              onClick={addComment}
              className="bg-blue-500 text-white px-3 rounded-r-md"
            >
              Post
            </button>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between text-gray-500 text-sm mt-4">
        <span>
          <FontAwesomeIcon icon={faHeart} /> {likes} Likes
        </span>
        <span>
          <FontAwesomeIcon icon={faComment} /> {postComments.length} Comments
        </span>
        <span>
          <FontAwesomeIcon icon={faShare} /> {shares} Shares
        </span>
      </div>
    </div>
  );
};

export default Post;
