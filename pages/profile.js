import React, { Component } from "react";
import Layout from "../components/layout";
require("isomorphic-fetch");

class Profile extends Component {
  static async getInitialProps({ req }) {
    if (typeof window === "undefined") {
      const { userId } = req.session;
      const response = await fetch(`http://localhost:3000/users/${userId}`);
      const data = await response.json();
      // console.log('@@@@@@',req.session)
      // console.log('@@@@@',data);
      return { session: data };
    }
    if (typeof window !== "undefined") {
      return { session: window.__APP_USER_PROFILE__ };
    }
    // return {
    //   session: {
    //     username: "aman29271",
    //     firstName: "Aman",
    //     lastName: "Kumar",
    //     college: "IIT Patna",
    //     email: "aman29271@gmail.com"
    //   }
    // };
  }
  constructor(props) {
    super(props);
    if (typeof window === "undefined") {
      this.state = {
        username: props.session.username,
        fullName: props.session.firstName + " " + props.session.lastName,
        college: props.session.college,
        email: props.session.email
      };
    }
    if (typeof window !== "undefined") {
      this.state = {
        username: window.__APP_USER_PROFILE__.username,
        fullName:
          window.__APP_USER_PROFILE__.firstName +
          " " +
          window.__APP_USER_PROFILE__.lastName,
        college: window.__APP_USER_PROFILE__.college,
        email: window.__APP_USER_PROFILE__.email
      };
    }
  }
  componentDidMount() {
    window.__APP_USER_PROFILE__ = this.props.session;
    // console.log("window", window.__APP_USER_PROFILE__);
  }
  render() {
    return (
      <Layout>
        <main className="main">
          <section className="hero is-medium">
            <div className="hero-body">
              <div className="container">
                <h1 className="title is-4">Welcome, {this.state.fullName}</h1>
                <h2 className="title is-5">
                  Samnivesha Id : {this.state.username}
                </h2>
                <h2 className="title is-5">College : {this.state.college}</h2>
                <h2 className="title is-5">Email: {this.state.email}</h2>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    );
  }
}
export default Profile;
