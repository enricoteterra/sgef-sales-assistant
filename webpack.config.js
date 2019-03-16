/* eslint-disable-next-line*/
const path = require("path");
/* eslint-disable-next-line*/
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProduction = typeof NODE_ENV !== "undefined" && NODE_ENV === "production";
const mode = isProduction ? "production" : "development";
const devtool = isProduction ? false : "inline-source-map";

module.exports = {
    entry: "./src/index.tsx",
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            {
                test: /.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
                options: {
                    compilerOptions: {
                        sourceMap: !isProduction,
                    },
                },
            },
            {
                test: /\.css$/,
                loader: "style-loader",
            },
            {
                test: /\.css$/,
                loader: "css-loader",
                query: {
                    modules: true,
                    localIdentName: "[name]__[local]___[hash:base64:5]",
                },
            },
        ],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
    target: "web",
    mode,
    devtool,
};
