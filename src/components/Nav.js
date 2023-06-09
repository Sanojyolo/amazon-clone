import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCartShopping,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <div>
        <img
          src="https://rdwgroup.com/wp-content/uploads/2013/08/Amazon-800x450-1.jpg"
          className="nav_logo"
          alt="Netflix Logo"
        />
      </div>
      <div className="address-cont">
        <h4>
          <FontAwesomeIcon icon={faLocationDot} />
          Hello
          <br />
          Select your address
        </h4>
      </div>
      <div className="search-box">
        <input
          type="search"
          placeholder="Search Amazon.in"
          className="search"
        />
        <button className="button-search">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className="return">
        <h4>
          Returns
          <br />
          &Orders
        </h4>
      </div>
      <div className="return">
        <h4>
          Hello,sign in
          <br />
          Accounts & Lists
        </h4>
      </div>
      <div className="cart">
        <button className="cart-button">
          <FontAwesomeIcon icon={faCartShopping} className="logo-cart" />
          Cart
        </button>
      </div>
    </div>
  );
};

export default Nav;
