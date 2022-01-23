import React, { useEffect } from "react";
import AdsSlider from "./adsSlider";
import StudyOutline from "./studyOutline";
import DashboardLocalNav from "./dashboardLocalNav";

const HomeDashboard = (props) => {
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

      <div className="dashboard__main__col__row">
        <AdsSlider />
      </div>
      <div className="devider--hr"></div>
      <div className="dashboard__main__col__row">
        <StudyOutline />
      </div>
    </main>
  );
};

export default HomeDashboard;
