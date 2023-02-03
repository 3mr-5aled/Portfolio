// const pug = require("pug")
module.exports = function (eleventyConfig) {
  eleventyConfig.setPugOptions({ pretty: true })
  return {
    dir: {
      input: "src",
      output: "build",
    },
  }
}
