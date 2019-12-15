import React, { Component } from "react";
import Layout from "../components/layout";
import unsplashUrl from "../utils/fetchImage";
// import ImageLoader from "../utils/fetchImage";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  render() {
    return (
      <Layout title="About Us">
        <main className="main">
          <section
            className="hero background-image is-large"
            style={{
              backgroundColor: "#fff",
              backgroundImage: `url(${unsplashUrl})`,
              backgroundRepeat: "repeat-x"
            }}
          >
            <div
              className="hero-body"
              style={{ backgroundColor: "#9E9E9E", opacity: "0.5" }}
            >
              <div className="container has-text-centered">
                <h1 className="title is-size-1 has-text-white">Coming Soon</h1>
                <h2 className="subtitle has-text-white">
                  We're currently working on creating something fantastic. We'll
                  be here soon.
                </h2>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    );
  }
}
export default About;
