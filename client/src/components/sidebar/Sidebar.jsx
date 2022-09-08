import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './sidebar.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const res = await axios.get('/categories');
      console.log(res.data);
      setCategories(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
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
          {categories.map((category) => (
            <Link className="link" to={`/?categories=${category.name}`}>
              <li key={category._id} className="sidebarListItem">
                {category.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">עקבו אחריי</span>
        <div className="sidebarSocial">
          <a className="link" href="https://www.facebook.com/inbal.wolfson">
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          </a>

          <a
            className="link"
            href="https://instagram.com/inbalwolfson?igshid=YmMyMTA2M2Y="
          >
            <i className="link sidebarIcon fa-brands fa-square-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
