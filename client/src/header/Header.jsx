import React from 'react';
import '../header/header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitels">
        <span className="headerTitleSm">ענבל וולפסון</span>
        <span className="headerTitleLg">InBalance</span>
      </div>
      <img
        className="headerImg"
        src="https://scontent.ftlv23-1.fna.fbcdn.net/v/t1.6435-9/122616724_4028369510524077_6310460772307723768_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=_FnVvHW2cW4AX8fuIO3&_nc_ht=scontent.ftlv23-1.fna&oh=00_AT8NPeYMoUZH2Bx70qnmFhPLLhZiq-o-V4AehIoM3hrs1w&oe=632C99F3"
        alt=""
      />
    </div>
  );
}
