import React from 'react';
import '../videos/videos.css';
import Posts from '../../components/posts/Posts';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Videos() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const res = await axios.get('/posts/filter?postType=video');
      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <h1 className="videosTitle">סירטונים</h1>

      <div className="videos">
        <div className="video_container">
          <Posts posts={posts} />
        </div>
      </div>
    </>
  );
}
