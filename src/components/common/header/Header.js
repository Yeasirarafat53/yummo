import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className="max-width header">
      <img
        src="https://html.design/demo/yummo/img/logo_.png"
        alt="Zomato-logo"
        className="header-logo"
      />

      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i class="fa-solid fa-location-dot absolute-center location-icon"></i>
              <div>Dhaka</div>
            </div>
            <i className="fa-solid fa-caret-down absolute-center"></i>
          </div>
          <div className="location-search-separator"></div>
          <div className="header-searchBar">
            <i className="fa-solid fa-magnifying-glass absolute-center search-icon"></i>
            <input
              placeholder="Search for restaurant, cuisine or a dish"
              className="search-input"
            />
          </div>
        </div>
        <div className="profile-wrapper">
          <img
            src="https://i.postimg.cc/t47nPTZR/my-img.jpg"
            alt=""
            className="header-profile-image"
          />
          <span className="header-username">Ariyan</span>
          <i className="fa-solid fa-angle-down absolute-center profile-options-icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
