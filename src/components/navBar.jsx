import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = (props) => {
  return (
    <header
      data-w-id="a830f287-2d44-ec00-fbff-f650421013fa"
      // style={{ opacity: 0 }}
      className="dashboard__nav-col is-mobile-menu"
    >
      <div className="dashboard__nav__container">
        <div className="g-container">
          <div className="dashboard__nav__items">
            <div
              data-w-id="33c5b9dd-ca8f-438d-0271-3f123590a117"
              className="dashboard__nav__logo"
            >
              <Link to="/" className="s-link w-inline-block">
                <div className="nav__logo">
                  <img
                    src="images/CEMilton-Group-logo.png"
                    loading="lazy"
                    alt=""
                    className="nav__logo--img"
                  />
                </div>
              </Link>
            </div>
            <div className="devider--hr"></div>
            <div className="nav__menu">
              <div
                data-w-id="9ed95fee-149d-37b1-1a14-fbd5a3949870"
                className="nav__menu__item"
              >
                <div
                  className="nav__menu__item__wrap"
                  onClick={() => {
                    props.onPageChange("home");
                  }}
                >
                  <img src="images/Apps.svg" loading="lazy" alt="" />
                  <p className="nav__menu__item__text">Home</p>
                </div>
                <div className="devider--hr is-nav-devider"></div>
              </div>

              <div
                data-w-id="9ed95fee-149d-37b1-1a14-fbd5a3949870"
                className="nav__menu__item"
              >
                <div
                  className="nav__menu__item__wrap"
                  onClick={() => {
                    props.onPageChange("cell-manager");
                  }}
                >
                  <img src="images/Apps.svg" loading="lazy" alt="" />
                  <p className="nav__menu__item__text">Cell Manager</p>
                </div>
                <div className="devider--hr is-nav-devider"></div>
              </div>
              <div
                data-w-id="02117740-ade4-7e98-b60b-c2822caa6516"
                className="nav__menu__item"
              >
                <div
                  className="nav__menu__item__wrap"
                  onClick={() => {
                    props.onPageChange("user-profile");
                  }}
                >
                  <img
                    src="images/User.svg"
                    loading="lazy"
                    alt=""
                    className="nav__menu__item__icon"
                  />
                  <p className="nav__menu__item__text">My Profile</p>
                </div>
                <div className="devider--hr is-nav-devider"></div>
              </div>
              <div
                data-w-id="68c8b381-343f-0ec2-edea-c9b49084e485"
                className="nav__menu__item"
              >
                <div
                  className="nav__menu__item__wrap"
                  onClick={() => {
                    props.onPageChange("virtual-church");
                  }}
                >
                  <img src="images/Globe.svg" loading="lazy" alt="" />
                  <p className="nav__menu__item__text">Virtual</p>
                </div>
                <div className="devider--hr is-nav-devider"></div>
              </div>
              <div
                data-w-id="bbdee567-d571-db9c-3184-68eeda51264f"
                className="nav__menu__item"
              >
                <div
                  className="nav__menu__item__wrap"
                  onClick={() => {
                    props.onPageChange("socials");
                  }}
                >
                  <img src="images/User.svg" loading="lazy" alt="" />
                  <p className="nav__menu__item__text">Social</p>
                </div>
                <div className="devider--hr is-nav-devider"></div>
              </div>
              <div
                data-w-id="760cb415-e898-36c8-be37-0cc2c6152f3a"
                className="is-fixed--btm is-fixed--btm--disable-mobile nav-menu__item--is-last"
              >
                <div className="div-block-38">
                  <div className="nav__menu__item__wrap">
                    <img src="images/Logout.svg" loading="lazy" alt="" />
                    <p className="nav__menu__item__text">Logout</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
