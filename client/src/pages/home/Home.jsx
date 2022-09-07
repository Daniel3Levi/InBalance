import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import axios from 'axios';

import '../home/home.css';
export default function Home() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const res = await axios.get('/posts/filter');
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
      <Header />
      <div className="home">
        <Sidebar />
        <Posts posts={posts} />
      </div>
    </>
  );
}
