// next.config.js
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

module.exports = withCSS({});
module.exports = {
  // withSass({
  // webpack: config => {
  //   config.module.rules.push({
  //     test: /\.css$/,
  //     use: ["style-loader", "css-loader"]
  //   });
  // }
  // })
};
