import React, { Component } from "react";
import Layout from "../components/layout";
import styles from "../components/css/loader.style";
const axios = require("axios");
import Notification from "../components/notification";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      msg: "",
      errorMsg: "",
      successMsg: "",
      isloading: false
    };
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleMsg = this.handleMsg.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleName(e) {
    this.setState({ name: e.target.value });
  }
  handleEmail(e) {
    this.setState({ email: e.target.value });
  }
  handleMsg(e) {
    this.setState({ msg: e.target.value });
  }
  handleSubmit() {
    const sendTo = "samniveshaiitp@gmail.com";
    const subject = `Contact Form submission by ${this.state.name}`;
    const body = `This is a response send to Samnivesha Node js server from ${this.state.name}
    Email: ${this.state.email}
    Message Body: ${this.state.msg} `;
    this.setState({ isloading: true });
    axios
      .post("/mail", { sendTo, subject, body })
      .then(res => {
        if (res.status == 200) {
          this.setState({
            successMsg: "Successfully submitted",
            isloading: false,
            name: "",
            email: "",
            msg: ""
          });
          setTimeout(() => {
            this.setState({ successMsg: null });
          }, 5000);
        }
      })
      .catch(err => {
        this.setState({
          errorMsg: "An Error Occured.",
          name: "",
          email: "",
          msg: "",
          isloading: false
        });
      });
  }
  render() {
    const status = this.state.successMsg
      ? "is-success"
      : this.state.errorMsg
      ? "is-danger"
      : "is-hidden";
    const loadingStatus = this.state.isloading ? "is-loading" : "";
    return (
      <Layout title="Contact Page">
        <section className="hero is-fullheight is-light">
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="columns is-8 is-variable ">
                <div className="column is-two-thirds has-text-left">
                  <h1 className="title is-1">Contact Us</h1>
                  <h2 className="title is-4">
                    <u>Reach to Us</u>
                  </h2>
                  <p className="is-size-5">
                    <b>Yash Rawal </b>
                    <span className="span  is-size-6">
                      : yash.ce17@iitp.ac.in - 9166062338
                    </span>
                  </p>

                  <p className="is-size-5">
                    <b>Rakesh Raushan </b>
                    <span className="span  is-size-6">
                      : rakesh.ce17@iitp.ac.in - 7261038443
                    </span>
                  </p>
                  {/* <span>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14400.146344673823!2d84.84692729999999!3d25.5371582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed577f6954a4ab%3A0x6ce8f1b9fc2aa02a!2sIndian%20Institute%20of%20Technology%20Patna!5e0!3m2!1sen!2sin!4v1577370879685!5m2!1sen!2sin"
                      width="600"
                      height="450"
                      frameborder="0"
                      style={{ border: 0 }}
                      allowfullscreen=""
                    ></iframe>
                  </span> */}
                </div>
                <div className="column is-one-third has-text-left">
                  <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                      <input
                        className="input is-medium"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleName}
                        required
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                      <input
                        className="input is-medium"
                        type="text"
                        value={this.state.email}
                        onChange={this.handleEmail}
                        required
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Message</label>
                    <div className="control">
                      <textarea
                        className="textarea is-medium"
                        value={this.state.msg}
                        onChange={this.handleMsg}
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="control">
                    <button
                      type="submit"
                      className={`button is-link is-fullwidth has-text-weight-medium is-medium ${loadingStatus}`}
                      onClick={this.handleSubmit}
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Notification
          status={status}
          successMsg={this.state.successMsg}
          errorMsg={this.state.errorMsg}
        />

        <style global jsx>
          {`
            ${styles.style}
          `}
        </style>
      </Layout>
    );
  }
}
export default Contact;
