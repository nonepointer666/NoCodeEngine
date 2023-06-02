import { optimize } from 'webpack';
import VueLoaderPlugin from 'vue-loader/lib/plugin';

export const module = {
  rules: [
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      loaders: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader'
        }
      ]
    },
    {
      test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
      loader: 'url-loader?limit=8192'
    }
  ]
};
export const plugins = [
  new optimize.ModuleConcatenationPlugin(),
  new VueLoaderPlugin()
];
