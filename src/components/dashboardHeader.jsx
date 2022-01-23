import React, { Component } from "react";

const DashboardHeader = (props) => {
  return (
    <header
      data-w-id="05a1cdda-1caa-4b5c-41a9-cc2b227a7854"
      // style={{ opacity: 0 }}
      className="dashboard__header"
    >
      <div className="g-container container--is-min">
        <div className="dashboard__header__wrap">
          <div className="dashboard__header__flex">
            <div
              data-w-id="93cb1850-0a87-24f4-7967-90771f7729e3"
              className="cell__member cell__member--is-cell-owner"
            >
              <div className="cell-member__photo user-img--current">
                <img
                  src="images/WhatsApp-Image-2021-11-24-at-4.54.16-PM.jpeg"
                  loading="lazy"
                  alt=""
                  className="current-user__photo__img"
                />
              </div>
              <div className="cell-member__details">
                <h3 className="heading">
                  Hello, {props.user.name && props.user.name.split(" ")[0]}
                </h3>
                <p className="is-text--grey cell-menu--indicator-mobile">
                  Account Menu
                </p>
              </div>
            </div>
            <div className="dashboard__cta">
              <div className="s-btn s-btn--has-icon s-btn--blue s-btn--icon-only">
                <img
                  src="images/User-plus.svg"
                  loading="lazy"
                  alt=""
                  className="nav__menu__item__icon nav__menu__item__icon--large"
                />
                <p className="nav__menu__item__text cta-txt--disable-mobile">
                  Add cell member
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="devider--hr is-hr-line--0-top"></div>
    </header>
  );
};

export default DashboardHeader;
