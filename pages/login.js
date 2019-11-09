import React, { Component } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCheck, faLock } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Layout from "../components/layout";

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
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleSubmit(e) {
    // e.preventDefault();
    // axios.post("/login/verify", this.state).then(res => {
    //   console.log(res);
    // });
  }
  render() {
    return (
      <Layout title="Login Here">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-black">Login</h3>
              <hr className="login-hr" />
              <p className="subtitle has-text-black">
                Please login to proceed.
              </p>
              <div className="box">
                <form
                  onSubmit={this.handleSubmit}
                  action="/login/verify"
                  method="post"
                >
                  <div className="field">
                    <p className="control has-icons-left has-icons-right">
                      <input
                        className="input"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                      />
                      <span className="icon is-small is-left">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                      <span className="icon is-small is-right">
                        <FontAwesomeIcon icon={faCheck} />
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
                        onChange={this.onChangePassword}
                        value={this.state.password}
                      />
                      <span className="icon is-small is-left">
                        <FontAwesomeIcon icon={faLock} />
                      </span>
                    </p>
                  </div>
                  <div className="field">
                    <p className="control">
                      <button className="button is-success">Login</button>
                    </p>
                  </div>
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
