import React from 'react';
import '../articles/articles.css';
import Posts from '../../components/posts/Posts';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Articles() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const res = await axios.get('/posts/filter?postType=article');
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
      <h1 className="articlesTitle">מאמרים</h1>

      <div className="articles">
        <div className="articles_container">
          <Posts posts={posts} />
        </div>
      </div>
    </>
  );
}
