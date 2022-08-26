import React from 'react';
import '../sidebar/sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">אודות</span>

        <img
          className="sidebarImg"
          src="https://scontent.ftlv23-1.fna.fbcdn.net/v/t1.6435-9/122456606_4028362150524813_1675505927403758447_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=bibOohs8s0EAX9hE-sG&_nc_ht=scontent.ftlv23-1.fna&oh=00_AT98N_xLlRFHisp_0URt9NRJ8DI9xfwD_P_z9PuMRnWXtA&oe=632DC04A"
          alt=""
        />
        <p className="sidebarP">
          ענבל וולפסון מורה ליוגה, מדריכת פילאטיס מזרן פיטנס ו- outdoor מוסמכת,
          בעלת תואר ראשון בחינוך גופני.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">קטגוריות</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">יוגה</li>
          <li className="sidebarListItem">תזונה ובריאות</li>
          <li className="sidebarListItem">אירובי</li>
          <li className="sidebarListItem">כושר</li>
          <li className="sidebarListItem">גמישות ויציבות</li>
          <li className="sidebarListItem">נשימות</li>
          <li className="sidebarListItem">נפש ורוח</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">עקבו אחריי</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
}
