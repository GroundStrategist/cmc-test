import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./loginForm";

const LoginPage = (props) => {
  useEffect(() => {
    document
      .getElementsByTagName("html")[0]
      .setAttribute("data-wf-page", "61ea7b65196569c77959918c");
    window.Webflow && window.Webflow.destroy();
    window.Webflow && window.Webflow.ready();
    window.Webflow && window.Webflow.require("ix2").init();
    window.Webflow.redraw.up();
    document.dispatchEvent(new Event("readystatechange"));
  });

  return (
    <div
      data-w-id="4c4414cf-beee-c059-b8c5-b359d5e3af38"
      style={{ opacity: 0 }}
      class="auth-page wf-section auth-page--is-login"
    >
      <div class="s-overlay"></div>
      <div class="g-container g-container--is-large is-flex-container">
        <div class="auth-page__c-block">
          <div class="_2-col-grid--2_1-ratio">
            <div class="grid-col">
              <div class="brand">
                <div class="brand__copy">
                  <img
                    src="images/Apps_1.svg"
                    loading="lazy"
                    // style="opacity:0;-webkit-transform:translate3d(0, -10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, -10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, -10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, -10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                    data-w-id="895c0ce2-6978-09a4-418d-1c4b2ae33c5f"
                    alt=""
                    class="brand__copy__logo"
                  />
                  <p style={{ opacity: 0 }} class="brand__copy__name">
                    Christ Embassy Cell manager
                  </p>
                </div>
              </div>
            </div>
            <div class="grid-col">
              <div
                data-w-id="447e6130-3238-02a9-5e26-af2e22a1a501"
                // style="-webkit-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"
                class="s-form-container is-st-all-radius st-b-shdw"
              >
                <div class="c-rich-text">
                  <h3>Create account</h3>
                  <p class="is-txt--small">
                    Don't have an account yet? &nbsp;
                    <Link to="/register" class="s-link s-link--is-blue">
                      Create an account
                    </Link>
                  </p>
                </div>
                <div
                  data-w-id="447e6130-3238-02a9-5e26-af2e22a1a507"
                  //   style="opacity:0"
                  class="s-form__blk"
                >
                  <div class="s-form__wrap">
                    <div class="s-form__form w-form">
                      <LoginForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
