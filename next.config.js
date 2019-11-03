// next.config.js
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

module.exports = withSass();
module.exports = withCSS();
module.exports = {
  distDir: "build"
  // webpack: (config, options) => {
  //   config.module.rules.push({
  //     test: /\.css$/,
  //     use: ["css-loader", "style-loader"]
  //   });
  // }
};
