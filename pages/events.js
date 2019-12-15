import React, { Component } from "react";
import ReactDOM from "react-dom";
import Layout from "../components/layout";
import "bootstrap/scss/bootstrap.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCheck, faLock } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./CSS/events.scss";
import unsplashUrl from "../utils/fetchImage";

export default class events extends Component {
  show = e => {
    let element = document.getElementById("register");
    let body = document.getElementById("body");
    body.style.opacity = 0.4;
    element.classList.remove("hide");
    // console.log(element.classList);
  };

  hide = () => {
    let element = document.getElementById("register");
    element.classList.add("hide");
    let body = document.getElementById("body");
    body.style.opacity = 1;
    // console.log(element.classList);
  };

  render() {
    return (
      <Layout title="Event Details">
        <div className="bg-white py-5" id="body">
          <div className="container py-5">
            <div className="row align-items-center mb-5">
              <div className="col-lg-6 order-2 order-lg-1">
                <i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                <h2 className="font-weight-light">
                  Lorem ipsum dolor sit amet
                </h2>
                <p className="font-italic text-muted mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button
                  className="btn btn-light px-5 rounded-pill shadow-sm"
                  onClick={this.show}
                >
                  Register
                </button>
              </div>
              <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
                <img
                  src="https://res.cloudinary.com/mhmd/image/upload/v1556834139/img-1_e25nvh.jpg"
                  alt=""
                  className="img-fluid mb-4 mb-lg-0"
                />
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-5 px-5 mx-auto">
                <img
                  src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/img-2_vdgqgn.jpg"
                  alt=""
                  className="img-fluid mb-4 mb-lg-0"
                />
              </div>
              <div className="col-lg-6">
                <i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
                <h2 className="font-weight-light">
                  Lorem ipsum dolor sit amet
                </h2>
                <p className="font-italic text-muted mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button
                  onClick={this.show}
                  className="btn btn-light px-5 rounded-pill shadow-sm"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =========================Register========================= */}
        <div id="register" className="hide">
          <section className="hero">
            <div className="hero-body">
              <div className="container has-text-centered">
                <div className="column is-4 is-offset-4">
                  {/* <h3 className="title has-text-black">Login</h3> */}
                  <hr className="login-hr" />
                  {/* <p className="subtitle has-text-black">
                    Please login to proceed.
                  </p> */}
                  <div className="box">
                    <form action="/login/verify" method="post">
                      <div className="field">
                        <p className="control has-icons-left has-icons-right">
                          <input
                            className="input"
                            type="email"
                            placeholder="ACE ID"
                            name="ID"
                          />
                          <span className="icon is-small is-left">
                            <FontAwesomeIcon icon={faEnvelope} />
                          </span>
                        </p>
                      </div>

                      <div className="field">
                        <p className="control has-icons-left">
                          <input
                            className="input"
                            type="password"
                            name="password"
                            placeholder="Password"
                          />
                          <span className="icon is-small is-left">
                            <FontAwesomeIcon icon={faLock} />
                          </span>
                        </p>
                      </div>
                      <div className="field">
                        <div className="control">
                          <button className="button btn btn-success">
                            Register
                          </button>

                          <button
                            className="button btn btn-danger"
                            onClick={this.hide}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}
