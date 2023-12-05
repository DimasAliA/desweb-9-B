import React, { useState, useEffect } from 'react';
import Post from './Post';

const Feed = ({ postsData }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(postsData || []);
  }, [postsData]);

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center text-gray-500 py-4">
        No posts available
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {posts.map((post, index) => (
        <Post
          key={index}
          postId={index}
          username={post.username}
          time={post.time}
          image={post.image}
          caption={post.caption}
          likes={post.likes}
          comments={post.comments}
          shares={post.shares}
        />
      ))}
    </div>
  );
};

export default Feed;
