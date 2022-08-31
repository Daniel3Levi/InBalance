import React from 'react';
import { Link } from 'react-router-dom';
import '../login/login.css';

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">התחברות</span>
      <form action="submit" className="loginForm">
        <label>אימייל</label>
        <input type="text" placeholder="Inbal@InBalance.co.il" />
        <label>סיסמא</label>
        <input type="text" placeholder="******" />
        <button className="loginButton">התחברות</button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          יצירת מנוי חדש
        </Link>
      </button>
    </div>
  );
}
