import React, { Component } from "react";
import Layout from "../components/layout";
import Link from "next/link";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
    console.log(this.state);
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <Layout stylesheet="/css/login.css" title="Login Here">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-black">Login</h3>
              <hr className="login-hr" />
              <p className="subtitle has-text-black">
                Please login to proceed.
              </p>
              <div className="box">
                <figure className="avatar">
                  <img src="https://placehold.it/128x128" />
                </figure>
                <form onSubmit={this.handleSubmit}>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-large"
                        type="email"
                        placeholder="Your Email"
                        autoFocus=""
                        onChange={this.onChangeEmail}
                        value={this.state.email}
                      />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-large"
                        type="password"
                        placeholder="Your Password"
                        onChange={this.onChangePassword}
                        value={this.state.password}
                      />
                    </div>
                  </div>
                  <button className="button is-block is-info is-large is-fullwidth">
                    Login <i className="fa fa-sign-in" aria-hidden="true"></i>
                  </button>
                </form>
              </div>
              <p className="has-text-grey">
                <Link href="/signup">
                  <a>Sign Up</a>
                </Link>
                <Link href="/forgotPassword">
                  <a> &nbsp;·&nbsp; Forgot Password</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
export default Login;
