import './topbar.css';
import { Link } from 'react-router-dom';

export default function TopBar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        {user ? (
          <>
            <Link to="/settings">
              <img
                className="topImg"
                src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                alt=""
              />
            </Link>
            <Link to="/write">
              <i className="topWriteIcon fa-solid fa-circle-plus"></i>
            </Link>
          </>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                התחברות
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                הרשמה
              </Link>
            </li>
          </ul>
        )}
      </div>

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              בית
            </Link>
          </li>

          <li className="topListItem">
            <Link to="/about" className="link">
              אודות
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/contact" className="link">
              יצירת קשר
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/videos" className="link">
              סירטונים
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/articles" className="link">
              מאמרים
            </Link>
          </li>

          {/* <li className="topListItem">
            <Link to="/login" className="link">
              יציאה
            </Link>
          </li> */}
        </ul>
      </div>
      <div className="topRight">
        <a href="https://instagram.com/inbalwolfson?igshid=YmMyMTA2M2Y=">
          <i className="topIcon fa-brands fa-square-instagram"></i>
        </a>
        <a href="https://www.facebook.com/inbal.wolfson">
          <i className="topIcon fa-brands fa-square-facebook"></i>
        </a>
      </div>
    </div>
  );
}
