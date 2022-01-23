import React from "react";

const Input = ({ name, label, type = "text", error, ...rest }) => {
  const handleInputFocus = (elm) => {
    const labelCls = ["input-label__label--is-active", "label--is-highlighted"];
    document.getElementById(elm.label).classList.add(...labelCls);
    document.getElementById(elm.input).focus();
    document.getElementById(elm.input).classList.add("is-focused-input");
  };

  const handleInputBlur = (elm, e) => {
    if (!e.target.value) {
      document
        .getElementById(elm.label)
        .classList.remove("input-label__label--is-active");
    }
    document.getElementById(elm.input).classList.remove("is-focused-input");
    document
      .getElementById(elm.label)
      .classList.remove("label--is-highlighted");
  };

  return (
    <div
      onClick={(e) =>
        handleInputFocus({
          label: name + "__c-label",
          input: name + "__c-input",
        })
      }
      class="s-form__form-nput__input"
    >
      <div class="input-label">
        <label
          htmlFor={name}
          id={name + "__c-label"}
          for={name}
          class="input-label__label"
        >
          {label}
        </label>
      </div>

      <div class="form-input__input">
        <input
          autoComplete="new-password"
          value=""
          {...rest}
          name={name}
          type={type}
          className="form-input__input__field w-input"
          id={name + "__c-input"}
          onFocus={(e) =>
            handleInputFocus({
              label: name + "__c-label",
              input: name + "__c-input",
            })
          }
          onBlur={(e) =>
            handleInputBlur(
              {
                label: name + "__c-label",
                input: name + "__c-input",
              },
              e
            )
          }
        />
      </div>
      {/* {error && <div className="alert alert-danger">{error}</div>} */}
    </div>
  );
};

export default Input;
