import React from 'react';
import { Link } from 'react-router-dom';
import './post.css';
export default function Post() {
  return (
    <Link className="link" to="/post/:postId">
      <div className="post">
        <img
          className="postImg"
          src="https://bahrain101-i35ch33zpu3sxik.stackpathdns.com/wp-content/uploads/2017/01/yoga-2.jpg"
          alt=""
        />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">קטגוריה 1</span>
            <span className="postCat">קטגוריה 2</span>
            <span className="postCat">קטגוריה 3</span>
          </div>
          <span className="postTitle">כותרת פוסט</span>
          <hr />
          <span className="postDate">תאריך הפוסט</span>
        </div>
        <p className="postDescription">
          יוגה הוא שם כללי למספר תורות חכמה מיסטיות או רוחניות, שמקורן בהודו.
          כיום במערב לרוב השם מתייחס לשיטת אימון גופני עם אלמנטים מעטים ושוליים
          של רוחניות. על פי פילוסופיית היוגה, במצב זה התודעה שלווה ואנחנו פוגשים
          במישור הרוחני, לפי היוגה - הנשמה, וחווים שלווה נצחית הנקראת, בין היתר:
          סמאדהי. היוגה היא הדרך כדי להגיע לשלב זה. היא מסע פיזי או מנטלי ורוחני
          שמטרתו להרגיע את תנודות התודעה, ודרכו המתרגל מקבל כלים להתמודד עם
          הקשיים האישיים שלו, פיזיים או נפשיים.
        </p>
      </div>
    </Link>
  );
}
