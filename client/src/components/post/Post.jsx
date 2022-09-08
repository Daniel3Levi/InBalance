import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './post.css';
export default function Post({ post }) {
  useEffect(() => {
    console.log(post.categories);
  });
  return (
    <Link className="link" to={`/post/${post._id}`}>
      <div className="post">
        {post.photo && <img className="postImg" src={post.photo} alt="" />}
        <div className="postInfo">
          <span className="postTitle">{post.title}</span>
          <div className="postCats">
            {post.categories.map((catgory) => (
              <span className="postCat">{catgory}</span>
            ))}
          </div>
          <hr />
          <span className="postDate">
            {new Date(post.updatedAt).toLocaleDateString()}
          </span>
        </div>
        <p className="postDescription">{post.desc}</p>
      </div>
    </Link>
  );
}
