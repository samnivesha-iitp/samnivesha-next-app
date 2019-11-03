import React from "react";
import Link from "next/link";
// import "../public/css/style.css";

const styles = {
  nav: {
    backgroundColor: "#f5f5f5"
  }
};
const Header = () => {
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
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarTopMain"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className="navbar-menu" id="navbarTopMain">
          <div className="navbar-end">
            <Link href="/blog">
              <a className="navbar-item has-text-weight-semibold">
                <span>Blog</span>
                <span className="tag is-success m-l-5">NEW</span>
              </a>
            </Link>
            <Link href="/about">
              <a className="navbar-item has-text-weight-semibold">About</a>
            </Link>
            <Link href="/contact">
              <a className="navbar-item has-text-weight-semibold">Contact Us</a>
            </Link>
            <Link href="/schedule">
              <a className="navbar-item has-text-weight-semibold">Schedule</a>
            </Link>
            <div className="navbar-item">
              <Link href="/login">
                <a className="button is-primary">Sign in</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
