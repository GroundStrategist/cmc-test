import React, { useEffect } from "react";

import DashboardLocalNav from "./dashboardLocalNav";
import ReportForm from "./reportForm";
import DashboardHint from "./currentDashboardHint";

const ReportDashboard = (props) => {
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
      <div className="dashboard__main__col__row">
        <div class="col__row__wrap">
          <div class="s-form">
            <div class="s-form__form-col">
              <div class="s-form__form-col--is-m-btm">
                <div class="s-wrap--passive">
                  <div class="c-rich-text">
                    <h3>Send cell report</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  <div class="s-form__blk">
                    <div class="s-form__wrap">
                      <div class="s-form__form w-form">
                        <ReportForm />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <DashboardHint />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ReportDashboard;
