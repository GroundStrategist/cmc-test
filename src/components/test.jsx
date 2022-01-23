import React, { Component } from "react";

const TestComponent = () => {
  return (
    <div
      className="g-container dashboard__main__grid "
      style={{ maxWidth: 50 + "vw" }}
    >
      <div class="dashboard__main__col__row">
        <div class="col__row__wrap">
          <div class="s-form">
            <div class="s-form__form-col">
              <div class="s-form__form-col--is-m-btm">
                <div class="s-wrap--passive">
                  <div class="c-rich-text">
                    <h3>Create Account</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  <div class="s-form__blk">
                    <div class="s-form__wrap">
                      <div class="s-form__form w-form">
                        <form
                          id="email-form"
                          name="email-form"
                          data-name="Email Form"
                          method="get"
                          class="s-form__form__container"
                        >
                          <div class="s-flex-layout">
                            <div class="s-flex-layout__flex">
                              <div class="s-flex-layout__2-col">
                                <div class="s-form__form-nput__input is-s-mg-btm">
                                  <div
                                    class="input-label"
                                    onClick={(e) =>
                                      console.log(
                                        document
                                          .getElementById("name-2-c")
                                          .focus(),
                                        document
                                          .getElementById("name-2-c")
                                          .classList.add("is-focused-input"),
                                        document
                                          .getElementById("label-name-3-c")
                                          .classList.add(
                                            "input-label__label--is-active"
                                          )
                                      )
                                    }
                                  >
                                    <label
                                      for="name-3-c"
                                      class="input-label__label"
                                      id="label-name-3-c"
                                    >
                                      Firt name
                                    </label>
                                  </div>
                                  <div class="form-input__input">
                                    <input
                                      type="text"
                                      class="form-input__input__field w-input"
                                      maxlength="256"
                                      name="name-2"
                                      data-name="Name 2"
                                      placeholder=""
                                      id="name-2-c"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="s-flex-layout__2-col is-s-mg-btm">
                                <div class="s-form__form-nput__input">
                                  <div class="input-label">
                                    <label
                                      for="name"
                                      class="input-label__label input-label__label--is-active"
                                    >
                                      Firt name
                                    </label>
                                  </div>
                                  <div class="form-input__input">
                                    <input
                                      type="text"
                                      class="form-input__input__field is-focused-input w-input"
                                      maxlength="256"
                                      name="name-2"
                                      data-name="Name 2"
                                      placeholder=""
                                      id="name-2"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="s-flex-layout__flex">
                              <div class="s-flex-layout__2-col is-s-mg-btm">
                                <div class="s-form__form-nput__input">
                                  <div class="input-label">
                                    <label
                                      for="name-3"
                                      class="input-label__label"
                                    >
                                      Firt name
                                    </label>
                                  </div>
                                  <div class="form-input__input">
                                    <input
                                      type="text"
                                      class="form-input__input__field w-input"
                                      maxlength="256"
                                      name="name-2"
                                      data-name="Name 2"
                                      placeholder=""
                                      id="name-2"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="s-flex-layout__2-col is-s-mg-btm">
                                <div class="s-form__form-nput__input">
                                  <div class="input-label">
                                    <label
                                      for="name-3"
                                      class="input-label__label input-label__label--is-active"
                                    >
                                      Firt name
                                    </label>
                                  </div>
                                  <div class="form-input__input">
                                    <input
                                      type="text"
                                      class="form-input__input__field is-focused-input w-input"
                                      maxlength="256"
                                      name="name-2"
                                      data-name="Name 2"
                                      placeholder=""
                                      id="name-2"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="s-flex-layout__flex">
                              <div class="s-flex-layout__1-col is-s-mg-btm">
                                <div class="s-form__form-nput__input">
                                  <div class="input-label">
                                    <label
                                      for="name-3"
                                      class="input-label__label input-label__label--is-active"
                                    >
                                      Firt name
                                    </label>
                                  </div>
                                  <div class="form-input__input">
                                    <input
                                      type="text"
                                      class="form-input__input__field is-focused-input w-input"
                                      maxlength="256"
                                      name="name-2"
                                      data-name="Name 2"
                                      placeholder=""
                                      id="name-2"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="s-flex-layout__flex">
                              <div class="s-flex-layout__2-col is-s-mg-btm">
                                <div class="s-form__form-nput__input">
                                  <div class="input-label">
                                    <label
                                      for="name-3"
                                      class="input-label__label"
                                    >
                                      Firt name
                                    </label>
                                  </div>
                                  <div class="form-input__input">
                                    <input
                                      type="text"
                                      class="form-input__input__field w-input"
                                      maxlength="256"
                                      name="name-2"
                                      data-name="Name 2"
                                      placeholder=""
                                      id="name-2"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="s-flex-layout__2-col is-s-mg-btm">
                                <div class="s-form__form-nput__input">
                                  <div class="input-label">
                                    <label
                                      for="name-3"
                                      class="input-label__label input-label__label--is-active"
                                    >
                                      Firt name
                                    </label>
                                  </div>
                                  <div class="form-input__input">
                                    <input
                                      type="text"
                                      class="form-input__input__field is-focused-input w-input"
                                      maxlength="256"
                                      name="name-2"
                                      data-name="Name 2"
                                      placeholder=""
                                      id="name-2"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="s-flex-layout__flex is--flex-mobile">
                            <a
                              href="#"
                              class="s-link--flex is-s-mg-btm w-inline-block"
                            >
                              <img
                                src="images/Globe.svg"
                                loading="lazy"
                                alt=""
                              />
                              <p class="paragraph-9">Sign in instead</p>
                            </a>
                            <input
                              type="submit"
                              value="Send report"
                              data-wait="Please wait..."
                              class="s-btn s-btn--blue is-s-mg-btm w-button"
                            />
                          </div>
                        </form>
                        <div class="w-form-done">
                          <div>
                            Thank you! Your submission has been received!
                          </div>
                        </div>
                        <div class="w-form-fail">
                          <div>
                            Oops! Something went wrong while submitting the
                            form.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="s-form_hint-col">
              <img
                src="images/Hotspot.svg"
                loading="lazy"
                alt=""
                class="s-form_hint__photo"
              />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="dashboard__main__col__row"></div>
    </div>
  );
};

export default TestComponent;
