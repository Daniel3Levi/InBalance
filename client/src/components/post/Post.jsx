import React from 'react';
import { Link } from 'react-router-dom';
import './post.css';
export default function Post({ post }) {
  return (
    <Link className="link" to={`/post/${post._id}`}>
      <div className="post">
        {post.photo && <img className="postImg" src={post.photo} alt="" />}
        <div className="postInfo">
          <div className="postCats">
            {post.categories.map((catgory) => (
              <span className="postCat">{catgory.name}</span>
            ))}
          </div>
          <span className="postTitle">{post.title}</span>
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
