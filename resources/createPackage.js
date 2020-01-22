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
    "checkjs": "tsc",
    "clean": "rimraf dist/*",
    "format": "prettier --write ./src/js",
    "lint": "eslint --config ./.eslintrc.json src/js",
    "start": "npm run build",
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "devDependencies": {
    "@babel/core": "^7.8.3",
    "@babel/plugin-proposal-nullish-coalescing-operator": "^7.8.3",
    "@babel/plugin-proposal-optional-chaining": "^7.8.3",
    "@babel/plugin-transform-parameters": "^7.4.4",
    "@babel/plugin-transform-react-jsx": "^7.3.0",
    "@babel/preset-env": "^7.8.3",
    "@composi/are-equal": "^1.0.9",
    "@composi/clone": "^1.2.3",
    "@composi/core": "^2.7.5",
    "@composi/gestures": "^1.0.9",
    "@composi/get-type": "^1.0.11",
    "@composi/idb": "^1.0.9",
    "@composi/router": "^0.7.5",
    "@composi/styler": "^1.0.9",
    "@composi/uuid": "^1.0.8",
    "@types/node": "^12.12.17",
    "babel-eslint": "^10.0.1",
    "browser-sync": "^2.26.7",
    "cssnano": "^4.1.10",
    "eslint": "^4.19.1",
    "eslint-plugin-react": "^7.14.3",
    "gulp": "^4.0.2",
    "gulp-clean": "^0.4.0",
    "gulp-gzip": "^1.4.2",
    "gulp-postcss": "^8.0.0",
    "gulp-sourcemaps": "^2.6.5",
    "prettier": "^1.19.1",
    "rollup": "^1.21.4",
    "rollup-plugin-babel": "^4.3.3",
    "rollup-plugin-babel-minify": "^9.0.0",
    "rollup-plugin-commonjs": "^10.1.0",
    "rollup-plugin-node-resolve": "^5.2.0",
    "rollup-plugin-resolve": "0.0.1-predev.1",
    "typescript": "^3.7.3"
  },
  "prettier": {
    "tabWidth": 2,
    "semi": false,
    "singleQuote": true
  }
}
`
}
