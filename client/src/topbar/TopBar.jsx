import '../topbar/topbar.css';

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>

        <img
          className="topImg"
          src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
          alt=""
        />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">בית</li>
          <li className="topListItem">אודות</li>
          <li className="topListItem">צרי קשר</li>
          <li className="topListItem">סירטונים</li>
          <li className="topListItem">מאמרים</li>
          <li className="topListItem">יציאה</li>
        </ul>
      </div>
      <div className="topRight">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
    </div>
  );
}
