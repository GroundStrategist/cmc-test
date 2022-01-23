import React from "react";

const DashboardLocalNav = (props) => {
  return (
    <div className="local__nav__hr-scroll-enable">
      <div className="nav__local">
        <a href="#" className="nav__local__item st-mg-r w-inline-block">
          <img
            src="images/Hotspot.svg"
            loading="lazy"
            alt=""
            className="s-icon"
          />
          <p className="paragraph-8">Watch Live</p>
        </a>
        <a href="#" className="nav__local__item st-mg-r w-inline-block">
          <img src="images/Globe.svg" loading="lazy" className="s-icon" />
          <p className="paragraph-8">Virtual Church</p>
        </a>
        <a href="#" className="nav__local__item st-mg-r w-inline-block">
          <img src="images/User.svg" loading="lazy" className="s-icon" />
          <p className="paragraph-8"> Members</p>
        </a>
        <a href="#" className="nav__local__item st-mg-r w-inline-block">
          <img
            src="images/Chat.svg"
            loading="lazy"
            width="24"
            className="s-icon"
          />
          <p className="paragraph-8">Remarks</p>
        </a>
        <a href="#" className="nav__local__item st-mg-r w-inline-block">
          <img
            src="images/Edit.svg"
            loading="lazy"
            width="24"
            className="s-icon"
          />
          <p className="paragraph-8">Reports</p>
        </a>
      </div>
    </div>
  );
};

export default DashboardLocalNav;
