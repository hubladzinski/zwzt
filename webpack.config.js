module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/app.js",
  output: {
    filename: "app.js",
  },
  devServer: {
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },
};
