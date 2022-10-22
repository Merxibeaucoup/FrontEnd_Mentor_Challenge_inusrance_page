import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <hr />
        <h1 className="header__left__title">Humanizing your insurance.</h1>
        <p className="header__left__paragraph">
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that’s right for
          you. Ensure you and your loved ones are protected.
        </p>
        <button className="header__left__button">view plans</button>
      </div>
      <div className="header__right">
        <img
          src="images/image-intro-desktop.jpg"
          alt="heading"
          className="header__right__img"
        />
      </div>
    </div>
  );
};

export default Header;
