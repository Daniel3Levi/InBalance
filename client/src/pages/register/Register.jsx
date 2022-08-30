import React from 'react';
import '../register/register.css';

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">הרשמה</span>
      <form action="submit" className="registerForm">
        <label>שם מלא</label>
        <input type="text" placeholder="ענבל וולפסון" />
        <label>פלאפון</label>
        <input type="text" placeholder="054-2456747" />
        <label>אימייל</label>
        <input type="text" placeholder="Inbal@InBalance.co.il" />
        <label>סיסמא</label>
        <input type="text" placeholder="******" />
        <button className="registerButton">שמירה</button>
      </form>

      <button className="registerLoginButton">התחברות</button>
    </div>
  );
}
