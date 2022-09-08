import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../register/register.css';
import axios from 'axios';

export default function Register() {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    try {
      const res = await axios.post('/auth/register', {
        username,
        phoneNumber,
        email,
        password,
      });
      // console.log(res.data);
      res.data && window.location.replace('/login');
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">הרשמה</span>
      <form action="submit" className="registerForm" onSubmit={handleSubmit}>
        <label>שם מלא</label>
        <input
          type="text"
          placeholder="ענבל וולפסון"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>מס׳ נייד</label>
        <input
          type="text"
          placeholder="054-2456747"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <label>אימייל</label>
        <input
          type="text"
          placeholder="Inbal@InBalance.co.il"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>סיסמא</label>
        <input
          type="text"
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton">שמירה</button>
      </form>

      <button className="registerLoginButton">
        <Link className="link" to="/login">
          התחברות
        </Link>
      </button>
      {error && <span className="errorMsg">תהליך ההתחברות נכשל</span>}
    </div>
  );
}
