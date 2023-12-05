// HomePage.js
import React, { useState, useEffect } from 'react';
import Search from './Search.jsx';
import Feed from './Feed.jsx';

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  const loadPosts = () => {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(savedPosts);
  };

  useEffect(() => {
    loadPosts();

    const handleStorageChange = () => {
      loadPosts();
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleNewPost = (newPost) => {
    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  return (
      <div className="home-page">
        <Search onPostSubmit={handleNewPost} />
        <div className="mt-4">
          <Feed postsData={posts} />
        </div>
      </div>
    );
};

export default HomePage;
