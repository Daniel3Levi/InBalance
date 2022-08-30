import React from 'react';
import './settings.css';
import Sidebar from '../../components/sidebar/Sidebar';
export default function Settings() {
  return (
    <div className="settings">
      <Sidebar />

      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">עדכון פרטי מנוי</span>
          <span className="settingsDeleteTitle">מחק מנוי</span>
        </div>

        <form action="submit" className="settingsForm">
          <label>תמונת פרופיל</label>
          <div className="settingsPP">
            <img
              src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
              alt=""
            />
            <label>
              <i className="settingsPPIcon fa-solid fa-user-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: 'none' }} />
          </div>

          <label>שם מנוי</label>
          <input type="text" placeholder="ענבל וולפסון" />
          <label>אימייל</label>
          <input type="text" placeholder="Inbal@InBalance.co.il" />
          <label>מס' נייד</label>
          <input type="text" placeholder="054-2456747" />
          <label>סיסמא</label>
          <input type="text" placeholder="******" />
          <button className="settingsSubmit">שמירת שינויים</button>
        </form>
      </div>
    </div>
  );
}
