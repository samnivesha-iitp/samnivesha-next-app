import React, { Component } from "react";
import Layout from "../components/layout";

class Profile extends Component {
  static async getInitialProps({ req }) {
    console.log("Query Object", req.session);
    return {
      session: {
        username: "aman29271",
        firstName: "Aman",
        lastName: "Kumar",
        college: "IIT Patna",
        email: "aman29271@gmail.com"
      }
    };
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
        <div className="container">
          <h1 className="title is-4">Hi {this.state.fullName}</h1>
          <h2 className="title is-5">College : {this.state.college}</h2>
          <h2 className="title is-5">Email: {this.state.email}</h2>
        </div>
      </Layout>
    );
  }
}
export default Profile;
