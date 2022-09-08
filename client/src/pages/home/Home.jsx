import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import axios from 'axios';

import '../home/home.css';
import { useLocation } from 'react-router-dom';
export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get(`/posts/filter${search}`);
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, [search]);

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
