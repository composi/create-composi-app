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
    "clean": "rimraf dist/{css/*,js/*,images/*}",
    "format": "prettier --no-semi --single-quote --write ./src/js/*",
    "lint": "eslint --config ./.eslintrc.json src/js",
    "start": "npm run build",
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "devDependencies": {
    "@babel/core": "^7.0.1",
    "@babel/plugin-transform-parameters": "^7.1.0",
    "@babel/plugin-transform-react-jsx": "^7.0.0",
    "@babel/preset-env": "^7.1.0",
    "@composi/core": "^0.5.5",
    "@composi/datastore": "^1.0.3",
    "@composi/fragment": "^1.0.2",
    "babel-eslint": "^10.0.1",
    "browser-sync": "^2.24.7",
    "eslint": "^4.19.1",
    "eslint-plugin-react": "^7.11.1",
    "gulp": "^4.0.0",
    "gulp-clean": "^0.4.0",
    "gulp-cssnano": "^2.1.3",
    "gulp-gzip": "^1.4.2",
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