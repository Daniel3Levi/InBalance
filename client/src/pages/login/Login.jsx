import React from 'react';
import { Link } from 'react-router-dom';
import '../login/login.css';

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">התחברות</span>
      <form action="submit" className="loginForm">
        <label>מס׳ נייד</label>
        <input type="text" placeholder="0542456747" />
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
