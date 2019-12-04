import React from "react";
import Layout from "../components/layout";
import unsplashUrl from "../utils/fetchImage";

const About = () => {
  return (
    <Layout title="Sponsor Page">
      <main className="main">
        <section
          className="hero background-image is-large"
          style={{
            backgroundColor: "#1e0000",
            backgroundImage: `url(
              ${unsplashUrl}
            )`,
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
};
export default About;
