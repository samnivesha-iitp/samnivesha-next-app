import React, { Component } from "react";
import Layout from "../components/layout";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faExclamationTriangle,
  faUser,
  faCheck
} from "@fortawesome/free-solid-svg-icons";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      college: "",
      isUserExists: null,
      isEmailExists: null,
      successMsg: "",
      errorMsg: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleCollege = this.handleCollege.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
  }
  handleFirstName(e) {
    this.setState({
      firstName: e.target.value
    });
  }
  handleLastName(e) {
    this.setState({
      lastName: e.target.value
    });
  }
  handleEmail(e) {
    this.setState({
      email: e.target.value
    });
    axios.post("/users/findByEmail", { email: e.target.value }).then(res => {
      if (res.status == 200) {
        this.setState({ isEmailExists: res.data });
      }
    });
  }
  handleCollege(e) {
    this.setState({
      college: e.target.value
    });
  }
  handlePassword(e) {
    this.setState({
      password: e.target.value,
      passwordClassName:
        e.target.value.length > 6 ? "input is-success" : "input is-danger"
    });
  }
  handleUsername(e) {
    this.setState({
      username: e.target.value
    });
    axios
      .post("/users/findByUsername", { username: e.target.value })
      .then(res => {
        if (res.status == 200) {
          this.setState({ isUserExists: res.data });
        }
      });
  }
  handleSubmit(e) {
    e.preventDefault();
    axios
      .post("/users/add", this.state)
      .then(res => {
        if (res.status == 200) {
          this.setState({
            successMsg: "You have successfully registered."
          });
        }
      })
      .catch(err => {
        this.setState({ errorMsg: "An error occured" }), console.log(err);
      });
  }
  render() {
    return (
      <Layout title="Signup Here">
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-4 is-offset-4">
                <h3 className="title has-text-black">Signup</h3>
                <div className="box">
                  {this.state.successMsg && (
                    <div className="notification is-success">
                      <button
                        className="delete"
                        onClick={() => this.setState({ successMsg: "" })}
                      ></button>
                      <strong>{this.state.successMsg}</strong>
                    </div>
                  )}
                  {this.state.errorMsg && (
                    <div className="notification is-danger">
                      <button
                        className="delete"
                        onClick={() => this.setState({ errorMsg: "" })}
                      ></button>
                      <strong>{this.state.errorMsg}</strong>
                    </div>
                  )}

                  <form onSubmit={this.handleSubmit}>
                    <div className="field">
                      <label className="label">First Name</label>
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          placeholder="first name"
                          name="firstName"
                          onChange={this.handleFirstName}
                          value={this.state.firstName}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Last Name</label>
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          placeholder="last Name"
                          name="lastName"
                          onChange={this.handleLastName}
                          value={this.state.lastName}
                        />
                      </div>
                    </div>

                    <div className="field">
                      <label className="label">Username</label>
                      <div className="control has-icons-left has-icons-right">
                        <input
                          className={
                            this.state.isUserExists
                              ? "input is-danger"
                              : this.state.isUserExists == null
                              ? "input"
                              : "input is-success"
                          }
                          type="text"
                          placeholder="Username"
                          value={this.state.username}
                          name="username"
                          onChange={this.handleUsername}
                        />
                        <span className="icon is-small is-left">
                          <FontAwesomeIcon icon={faUser} />
                        </span>
                        <span className="icon is-small is-right">
                          <FontAwesomeIcon icon={faCheck} />
                        </span>
                      </div>
                      {this.state.isUserExists ? (
                        <p className="help is-danger">
                          This username is not available
                        </p>
                      ) : (
                        <p className="help is-danger"></p>
                      )}
                    </div>

                    <div className="field">
                      <label className="label">Email</label>
                      <div className="control has-icons-left has-icons-right">
                        <input
                          className={
                            this.state.isEmailExists
                              ? "input is-danger"
                              : this.state.isEmailExists == null
                              ? "input"
                              : "input is-success"
                          }
                          type="email"
                          placeholder="Email input"
                          value={this.state.email}
                          name="email"
                          onChange={this.handleEmail}
                        />
                        <span className="icon is-small is-left">
                          <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                        <span className="icon is-small is-right">
                          <FontAwesomeIcon icon={faExclamationTriangle} />
                        </span>
                      </div>
                      {this.state.isEmailExists ? (
                        <p className="help is-danger">
                          email is already registered
                        </p>
                      ) : (
                        <p className="help is-danger"></p>
                      )}
                    </div>
                    <div className="field">
                      <label className="label">College Name</label>
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          placeholder="College"
                          name="college"
                          value={this.state.college}
                          onChange={this.handleCollege}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Password</label>
                      <div className="control">
                        <input
                          className={
                            this.state.passwordClassName
                              ? this.state.passwordClassName
                              : "input"
                          }
                          type="password"
                          placeholder="Password"
                          name="password"
                          value={this.state.password}
                          onChange={this.handlePassword}
                        />
                      </div>
                      {/* <progress
                        class="progress is-primary is-small"
                        value="15"
                        max="100"
                      >
                        15%
                      </progress> */}
                    </div>

                    <div className="field is-grouped">
                      <div className="control">
                        <button
                          className="button is-link"
                          disabled={
                            this.state.isUserExists || this.state.isEmailExists
                          }
                        >
                          Submit
                        </button>
                      </div>
                      <div className="control">
                        <button
                          className="button is-link is-light"
                          onClick={() => {}}
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
      </Layout>
    );
  }
}
export default Login;
