import React, { useEffect } from "react";

import DashboardLocalNav from "./dashboardLocalNav";
import ReportForm from "./reportForm";
import DashboardHint from "./currentDashboardHint";

const UserProfileDashboard = (props) => {
  useEffect(() => {
    window.Webflow && window.Webflow.destroy();
    window.Webflow && window.Webflow.ready();
    window.Webflow && window.Webflow.require("ix2").init();
    window.Webflow.redraw.up();
    document.dispatchEvent(new Event("readystatechange"));
  });

  return (
    <main
      id="w-node-cf8ab8ac-aca8-e622-68de-8a27dc62c68e-0cbd5531"
      className="dashboard__main__col"
    >
      <DashboardLocalNav />

      <div className="devider--hr"></div>
      <div class="s-grid--3-col">
        <div class="s-grid__item">
          <div class="c-rich-text">
            <div class="s-img__wrap">
              <img
                src="images/Christ-Embassy-Church.jpeg"
                loading="lazy"
                sizes="(max-width: 479px) 82vw, (max-width: 767px) 29vw, (max-width: 991px) 23vw, (max-width: 8775px) 16vw, 1404px"
                srcset="images/Christ-Embassy-Church.jpeg 500w, images/Christ-Embassy-Church.jpeg 1404w"
                alt=""
              />
            </div>
            <div class="mg-top__content-wrap">
              <h4>Virtual Center</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div class="nav__menu__item__wrap">
            <img src="images/Hotspot.svg" loading="lazy" alt="" />
            <p class="nav__menu__item__text">Join Service</p>
          </div>
        </div>
        <div class="s-grid__item">
          <div class="c-rich-text">
            <div class="s-img__wrap">
              <img
                src="images/Christ-Embassy-Church.jpeg"
                loading="lazy"
                sizes="(max-width: 479px) 82vw, (max-width: 767px) 29vw, (max-width: 991px) 23vw, (max-width: 8775px) 16vw, 1404px"
                srcset="images/Christ-Embassy-Church.jpeg 500w, images/Christ-Embassy-Church.jpeg 1404w"
                alt=""
              />
            </div>
            <div class="mg-top__content-wrap">
              <h4>Virtual Center</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div class="nav__menu__item__wrap">
            <img src="images/Hotspot.svg" loading="lazy" alt="" />
            <p class="nav__menu__item__text">Join Service</p>
          </div>
        </div>
        <div class="s-grid__item">
          <div class="c-rich-text">
            <div class="s-img__wrap">
              <img
                src="images/Christ-Embassy-Church.jpeg"
                loading="lazy"
                sizes="(max-width: 479px) 82vw, (max-width: 767px) 29vw, (max-width: 991px) 23vw, (max-width: 8775px) 16vw, 1404px"
                srcset="images/Christ-Embassy-Church.jpeg 500w, images/Christ-Embassy-Church.jpeg 1404w"
                alt=""
              />
            </div>
            <div class="mg-top__content-wrap">
              <h4>Virtual Center</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div class="nav__menu__item__wrap">
            <img src="images/Hotspot.svg" loading="lazy" alt="" />
            <p class="nav__menu__item__text">Join Service</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserProfileDashboard;
