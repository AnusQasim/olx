import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <h2>
            OL<span>X</span>
          </h2>
        </div>
        <ul>
          <BrowserRouter>
            <li>
              <Link className="Link" href="#">
                Home
              </Link>
            </li>
            <li>
              <Link className="Link" href="#">
                Products
              </Link>
            </li>
            <li>
              <Link className="Link" href="#">
                About
              </Link>
            </li>
            <li>
              <Link className="Link" href="#">
                Contact
              </Link>
            </li>
          </BrowserRouter>
        </ul>
      </div>
    </>
  );
};

export default Nav;
