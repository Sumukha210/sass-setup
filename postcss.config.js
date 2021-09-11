module.exports = {
  plugins: [
    require("postcss-uncss")({
      html: ["./pages/index.html"],
    }),
  ],
};
