import React, { useEffect, useState } from 'react';
import { getPosts } from '../../services/communityService';

const SocialFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postData = await getPosts();
        setPosts(postData);
      } catch (error) {
        console.error('Failed to fetch posts', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Social Feed</h2>
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <div key={index}>
            <p>{post.content}</p>
            <p>By: {post.author}</p>
            <p>Date: {post.date}</p>
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
};

export default SocialFeed;
