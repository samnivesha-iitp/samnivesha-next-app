import React, { useState } from "react";
import Link from "next/link";
import headerStyles from "./css/header.style";
// import "../public/css/style.css";

const styles = {
  nav: {
    backgroundColor: "unset",
    position: "absolute",
    width: "100%"
  }
};
const Header = ({ user }) => {
  const [isMobile, setIsMobile] = useState("");
  const hideMenu = () => {
    setIsMobile("");
  };
  const showMenu = () => {
    setIsMobile("is-active");
  };
  return (
    <nav
      className="navbar is-transparent is-spaced"
      role="navigation"
      aria-label="main navigation"
      style={styles.nav}
    >
      <div className="container">
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item">
              <img
                src="/images/samnivesha.png"
                alt="Bulma Rent"
                width="34"
                height="20"
              />
            </a>
          </Link>

          <a
            role="button"
            className={`navbar-burger burger ${isMobile}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarTopMain"
            onClick={() => {
              if (isMobile == "is-active") {
                hideMenu();
              } else {
                showMenu();
              }
            }}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className={`navbar-menu ${isMobile}`} id="navbarTopMain">
          <div className="navbar-end">
            <Link href="/blog">
              <a
                className="navbar-item has-text-weight-semibold"
                onClick={hideMenu}
              >
                <span>Blog</span>
                <span className="tag is-success m-l-5">NEW</span>
              </a>
            </Link>

            <Link href="/events">
              <a
                className="navbar-item has-text-weight-semibold"
                onClick={hideMenu}
              >
                Events
              </a>
            </Link>
            <Link href="/workshop">
              <a
                className="navbar-item has-text-weight-semibold"
                onClick={hideMenu}
              >
                Guest Lecture
              </a>
            </Link>
            {/* <Link href="/schedule">
              <a className="navbar-item has-text-weight-semibold">Schedule</a>
            </Link> */}

            {user && (
              <>
                <Link href="/profile">
                  <a
                    className="navbar-item has-text-weight-semibold"
                    onClick={hideMenu}
                  >
                    Profile
                  </a>
                </Link>
                <div className="navbar-item">
                  <Link href="/logout">
                    <a className="button is-info" onClick={hideMenu}>
                      Logout
                    </a>
                  </Link>
                </div>
              </>
            )}
            {!user && (
              <>
                <Link href="/sponsors">
                  <a
                    className="navbar-item has-text-weight-semibold"
                    onClick={hideMenu}
                  >
                    Sponsors
                  </a>
                </Link>
                <Link href="/about">
                  <a
                    className="navbar-item has-text-weight-semibold"
                    onClick={hideMenu}
                  >
                    About
                  </a>
                </Link>
                <Link href="/contact">
                  <a
                    className="navbar-item has-text-weight-semibold"
                    onClick={hideMenu}
                  >
                    Contact Us
                  </a>
                </Link>
                <div className="navbar-item">
                  <Link href="/signup">
                    <a className="button is-primary" onClick={hideMenu}>
                      Register
                    </a>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <style global jsx>{`
        ${headerStyles.style}
      `}</style>
    </nav>
  );
};
export default Header;
