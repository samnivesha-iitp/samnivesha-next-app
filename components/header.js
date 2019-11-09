import React from "react";
import Link from "next/link";
// import "../public/css/style.css";

const styles = {
  nav: {
    backgroundColor: "#f5f5f5"
  }
};
const Header = ({ user }) => {
  return (
    <nav
      className="navbar is-transparent is-spaced"
      role="navigation"
      aria-label="main navigation"
      style={styles.nav}
    >
      <div className="container">
        <div className="navbar-brand">
          <Link href={user ? "/profile" : "/"}>
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
            {!user && (
              <>
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
                  <a className="navbar-item has-text-weight-semibold">
                    Contact Us
                  </a>
                </Link>
              </>
            )}
            {user && (
              <>
                <Link href="/events">
                  <a className="navbar-item has-text-weight-semibold">Events</a>
                </Link>
                <Link href="/schedule">
                  <a className="navbar-item has-text-weight-semibold">
                    Schedule
                  </a>
                </Link>
              </>
            )}

            {user && (
              <div className="navbar-item">
                <Link href="/logout">
                  <a className="button is-primary">Logout</a>
                </Link>
              </div>
            )}
            {!user && (
              <div className="navbar-item">
                <Link href="/login">
                  <a className="button is-primary">Sign in</a>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <style global jsx>{`
        .sub-section {
          margin-bottom: 60px;
        }
        .rb-card {
          border: none;
          border-radius: 4px;
          box-shadow: 5px 5px 16px 0 rgba(0, 0, 0, 0.13);
          cursor: pointer;
          transition: all 0.2s ease-in-out;
          position: relative;
          overflow: hidden;
        }
        .rb-card a {
          color: #515f6a;
        }
        .rb-card:hover {
          transform: scale(1.05);
        }
        .m-l-5 {
          margin-left: 5px !important;
        }
        .m-t-10 {
          margin-top: 10px !important;
        }
        .m-t-30 {
          margin-top: 30px !important;
        }
        .p-t-30 {
          padding-top: 30px !important;
        }
        .p-b-30 {
          padding-bottom: 30px !important;
        }
        .m-t-50 {
          margin-top: 50px !important;
        }
        .m-t-60 {
          margin-top: 60px !important;
        }
        .b-t {
          border-top: 1px solid #e2e8ef;
        }
        .ellipsis {
          display: block;
          display: -webkit-box;
          margin: 0 auto;
          line-height: 1.4;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .is-ellipsis-1 {
          -webkit-line-clamp: 1;
        }
        .is-ellipsis-2 {
          -webkit-line-clamp: 2;
        }
        h1,
        h2,
        h3,
        h4 {
          font-family: Montserrat, sans-serif;
          font-weight: 600;
        }
        .title {
          font-weight: 600;
        }
        .field.has-shadow-field {
          -webkit-box-shadow: 0 5px 30px hsla(224, 8%, 64%, 0.25) !important;
          box-shadow: 0 5px 30px hsla(224, 8%, 64%, 0.25) !important;
        }
        .subtitle {
          font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          font-weight: 500;
        }
        .hero.is-light .subtitle,
        .subtitle {
          color: #99a6b3;
        }
        .input {
          box-shadow: none;
          -webkit-box-shadow: none;
        }
        .input:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 30px #fff inset;
        }
        .input:invalid {
          outline: none;
          -webkit-box-shadow: none;
          box-shadow: none;
        }
        .input:active,
        .input:focus {
          -webkit-box-shadow: none;
          box-shadow: none;
        }
        .button {
          -webkit-transition: all 0.3s ease-out;
          transition: all 0.3s ease-out;
          font-family: Montserrat, sans-serif;
          font-weight: 500;
        }
        .button.is-shadowy {
          box-shadow: 0 5px 30px hsla(224, 8%, 64%, 0.25);
          -webkit-box-shadow: 0 5px 30px hsla(224, 8%, 64%, 0.25);
          -moz-box-shadow: 0 5px 30px hsla(224, 8%, 64%, 0.25);
        }
        .button.is-shadowy:hover {
          -webkit-box-shadow: 0 16px 43px 2px rgba(0, 0, 0, 0.2);
          box-shadow: 0 16px 43px 2px rgba(0, 0, 0, 0.2);
        }
        a {
          -webkit-transition: color 0.3s ease-out;
          transition: color 0.3s ease-out;
        }
        .navbar.is-transparent {
          background-color: transparent;
          background-image: none;
        }
      `}</style>
    </nav>
  );
};
export default Header;
