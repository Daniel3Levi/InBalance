import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import YoutubePlayer from '../youtubePlayer/YoutubePlayer';
import '../singlePost/singlePost.css';
import axios from 'axios';
import { useState } from 'react';
export default function SinglePost() {
  const location = useLocation();
  const postId = location.pathname.split('/')[2];
  console.log(postId);

  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(`/posts/post/${postId}`);
        console.log(res);
        setPost(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPost();
  }, [postId]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <h1 className="singlePostTitle">{post.title}</h1>
        <div className="singlePostEditContainer">
          <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
          <i className="singlePostIcon fa-solid fa-trash-can"></i>
        </div>
        {post.photo && (
          <img className="singlePostImg" src={post.photo} alt="" />
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            ענבל וולפסון <b>InBalance</b>
          </span>
          <span className="singlePostDate">
            {' '}
            {new Date(post.updatedAt).toLocaleDateString()}
          </span>
        </div>
        {/*   <div className="singelPostYoutubePlayer">
          <YoutubePlayer embedId="r5KzX2pufhU" />
        </div> */}

        <p className="singlePostDesc">{post.desc}</p>
      </div>
    </div>
  );
}
