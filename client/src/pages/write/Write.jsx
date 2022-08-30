import React from 'react';
import '../write/write.css';

export default function Write() {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://bahrain101-i35ch33zpu3sxik.stackpathdns.com/wp-content/uploads/2017/01/yoga-2.jpg"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: 'none' }} />
          <input
            type="text"
            placeholder="כותרת הפוסט"
            className="writeInput"
            autoFocus={true}
          />
          <input
            type="text"
            placeholder="מזהה סרטון יוטיוב"
            className="writeInput"
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="תוכן הפוסט"
            type="text"
            className="writeInput writeText"
          ></textarea>
          <button className="writeSubmit">פירסום</button>
        </div>
      </form>
    </div>
  );
}
