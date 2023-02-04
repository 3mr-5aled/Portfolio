module.exports = function (eleventyConfig) {
  eleventyConfig.setPugOptions({ pretty: true })
  eleventyConfig.addPassthroughCopy("src/admin")
  return {
    dir: {
      input: "src",
      output: "public",
    },
  }
}
