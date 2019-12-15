import React, { Component } from "react";
import Layout from "../components/layout";
require("isomorphic-fetch");

class Profile extends Component {
  static async getInitialProps({ req }) {
    const { userId } = req.session;
    // console.log(userId)
    const response = await fetch(`http://localhost:3000/users/${userId}`);
    const data = await response.json();
    // console.log('@@@@@',data);
    return { session: data };

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
    this.state = {
      username: props.session.username,
      fullName: props.session.firstName + " " + props.session.lastName,
      college: props.session.college,
      email: props.session.email
    };
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
