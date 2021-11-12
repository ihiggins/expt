module.exports = {
   node: {
    __dirname: true,
    __filename: true,
  },
  entry: "./src/index.ts",
  module: {
    rules: require("./webpack.rules"),
  },
  resolve: {
    fallback: { stream: require.resolve("stream-browserify") },
    extensions: [
      ".js",
      ".ts",
      ".jsx",
      ".tsx",
      ".css",
      ".json",
      ".scss",
      ".sass",
    ],
  },
};
