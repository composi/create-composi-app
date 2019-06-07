module.exports = opts => {
  return `
{
  "name": "${opts.name}",
  "version": "1.0.0",
  "description": "Put your description here.",
  "main": "app.js",
  "author": "${opts.user}",
  "repository": "foo",
  "license": "MIT",
  "scripts": {
    "build": "gulp",
    "build:fresh": "gulp fresh-build",
    "build:production": "gulp production",
    "clean": "rimraf dist/*",
    "format": "prettier --no-semi --single-quote --write ./src/js/*",
    "lint": "eslint --config ./.eslintrc.json src/js",
    "start": "npm run build",
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "devDependencies": {
    "@babel/core": "^7.2.2",
    "@babel/plugin-transform-parameters": "^7.2.0",
    "@babel/plugin-transform-react-jsx": "^7.2.0",
    "@babel/preset-env": "^7.2.3",
    "@composi/are-equal": "^1.0.4",
    "@composi/core": "^1.6.1",
    "@composi/datastore": "^1.2.7",
    "@composi/fragment": "^1.0.5",
    "@composi/gestures": "^1.0.6",
    "@composi/get-type": "^1.0.5",
    "@composi/idb": "^1.0.3",
    "@composi/router": "^0.7.1",
    "@composi/styler": "^1.0.5",
    "@composi/uuid": "^1.0.4",
    "babel-eslint": "^10.0.1",
    "browser-sync": "^2.26.4",
    "cssnano": "^4.1.10",
    "eslint": "^4.19.1",
    "eslint-plugin-react": "^7.11.1",
    "gulp": "^4.0.0",
    "gulp-clean": "^0.4.0",
    "gulp-gzip": "^1.4.2",
    "gulp-postcss": "^8.0.0",
    "gulp-sourcemaps": "^2.6.4",
    "prettier": "1.14.3",
    "rollup": "^0.66.2",
    "rollup-plugin-babel": "^4.0.3",
    "rollup-plugin-babel-minify": "^6.0.0",
    "rollup-plugin-commonjs": "^9.1.8",
    "rollup-plugin-node-resolve": "^3.4.0",
    "rollup-plugin-resolve": "0.0.1-predev.1"
  }
}
`
}
