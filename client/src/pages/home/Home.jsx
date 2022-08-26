import React from 'react';
import Header from '../../header/Header';
import Posts from '../../posts/Posts';
import Sidebar from '../../sidebar/Sidebar';

import '../home/home.css';
export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Sidebar />
        <Posts />
      </div>
    </>
  );
}
