import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import avatar from "../img/dp.png";

function Navigation({ setNavToggle }) {
  const [nav1, setNav1] = useState(true);
  const [nav2, setNav2] = useState(false);
  const [nav3, setNav3] = useState(false);
  const [nav4, setNav4] = useState(false);
  const [nav5, setNav5] = useState(false);
  const [nav6, setNav6] = useState(false);
  return (
    <NavigationStyled>
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>
      <ul className="nav-items">
        <li
          onClick={() => {
            setNavToggle(false);
            setNav1(true);
            setNav2(false);
            setNav3(false);
            setNav4(false);
            setNav5(false);
            setNav6(false);
          }}
          className="nav-item"
        >
          <NavLink to="/" activeClassName="active-class" exact>
            Home
            <div className={`arrowAnim ${nav1?"sh":""}`} >
              <div className="arrowSliding">
                <div className="arrow"></div>
              </div>
              <div className="arrowSliding delay1">
                <div className="arrow"></div>
              </div>
              <div className="arrowSliding delay2">
                <div className="arrow"></div>
              </div>
              <div className="arrowSliding delay3">
                <div className="arrow"></div>
              </div>
            </div>
          </NavLink>
        </li>
        <li
          onClick={() => {
            setNavToggle(false);
            setNav1(false);
            setNav2(true);
            setNav3(false);
            setNav4(false);
            setNav5(false);
            setNav6(false);
          }}
          className="nav-item"
        >
          <NavLink to="/about" activeClassName="active-class" exact>
            About
            <div className={`arrowAnim ${nav2?"sh":""}`}>
              <div className="arrowSliding">
                <div className="arrow"></div>
              </div>
              <div className="arrowSliding delay1">
                <div className="arrow"></div>
              </div>
              <div className="arrowSliding delay2">
                <div className="arrow"></div>
              </div>
              <div className="arrowSliding delay3">
                <div className="arrow"></div>
              </div>
            </div>
          </NavLink>
        </li>
        <li
          onClick={() => {
            setNavToggle(false);
            setNav1(false);
            setNav2(false);
            setNav3(true);
            setNav4(false);
            setNav5(false);
            setNav6(false);
          }}
          className="nav-item"
        >
          <NavLink to="/resume" activeClassName="active-class" exact>
            Skills
            <div className={`arrowAnim ${nav3?"sh":""}`}>
              <div className="arrowSliding">
                <div className="arrow"></div>
              </div>
              <div className="arrowSliding delay1">
                <div className="arrow"></div>
              </div>
              <div className="arrowSliding delay2">
                <div className="arrow"></div>
              </div>
              <div className="arrowSliding delay3">
                <div className="arrow"></div>
              </div>
            </div>
          </NavLink>
        </li>
        <li
          onClick={() => {
            setNavToggle(false);
            setNav1(false);
            setNav2(false);
            setNav3(false);
            setNav4(true);
            setNav5(false);
            setNav6(false);
          }}
          className="nav-item"
        >
          <NavLink to="/portfolios" activeClassName="active-class" exact>
            Projects
            <div className={`arrowAnim ${nav4?"sh":""}`}>
              <div className="arrowSliding">
                <div className="arrow"></div>
              </div>
              <div className="arrowSliding delay1">
                <div className="arrow"></div>
              </div>
              <div className="arrowSliding delay2">
                <div className="arrow"></div>
              </div>
              <div className="arrowSliding delay3">
                <div className="arrow"></div>
              </div>
            </div>
          </NavLink>
        </li>
        <li
          onClick={() => {
            setNavToggle(false);
            setNav1(false);
            setNav2(false);
            setNav3(false);
            setNav4(false);
            setNav5(true);
            setNav6(false);
          }}
          className="nav-item"
        >
          <NavLink to="/blogs" activeClassName="active-class" exact>
            Blogs
            <div className={`arrowAnim ${nav5?"sh":""}`}>
              <div className="arrowSliding">
                <div className="arrow"></div>
              </div>
              <div className="arrowSliding delay1">
                <div className="arrow"></div>
              </div>
              <div className="arrowSliding delay2">
                <div className="arrow"></div>
              </div>
              <div className="arrowSliding delay3">
                <div className="arrow"></div>
              </div>
            </div>
          </NavLink>
        </li>
        <li
          onClick={() => {
            setNavToggle(false);
            setNav1(false);
            setNav2(false);
            setNav3(false);
            setNav4(false);
            setNav5(false);
            setNav6(true);
          }}
          className="nav-item"
        >
          <NavLink to="/contact" activeClassName="active-class" exact>
            Contact
            <div className={`arrowAnim ${nav6?"sh":""}`}>
              <div className="arrowSliding">
                <div className="arrow"></div>
              </div>
              <div className="arrowSliding delay1">
                <div className="arrow"></div>
              </div>
              <div className="arrowSliding delay2">
                <div className="arrow"></div>
              </div>
              <div className="arrowSliding delay3">
                <div className="arrow"></div>
              </div>
            </div>
          </NavLink>
        </li>
      </ul>
      <footer className="footer">
        <p></p>
      </footer>
    </NavigationStyled>
  );
}

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--primary-color);
  .avatar {
    width: 100%;
    border-bottom: 1px solid var(--primary-color);
    text-align: center;
    padding: 1rem 0;
    img {
      width: 70%;
      border-radius: 50%;
      border: 5px solid var(--primary-color);
    }
  }

  .nav-items {
    width: 100%;
    text-align: center;
    .active-class {
      background-color: var(--primary-color-light);
      color: white;
    }
    li {
      position: relative;
      display: block;
      a {
        display: block;
        padding: 0.45rem 0;
        position: relative;
        z-index: 10;
        text-transform: uppercase;
        transition: all 0.4s ease-in-out;
        font-weight: 600;
        letter-spacing: 1px;
        transition: all 200ms ease-in-out;
        &:hover {
          cursor: pointer;
          color: var(--white-color);

          transition: all 200ms ease-in-out;
     
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 50%;
          background-color: var(--primary-color);
          transition: All 0.4s cubic-bezier(1, -0.2, 0.25, 0.95);
          opacity: 0.21;
          z-index: -1;
        }
      }

      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }

  footer {
    border-top: 1px solid var(--primary-color);
    width: 100%;
    p {
      padding: 1.3rem 0;
      font-size: 1.1rem;
      display: block;
      text-align: center;
    }
  }
`;
export default Navigation;
