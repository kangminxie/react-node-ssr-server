[![CircleCI](https://circleci.com/gh/mountkingx/react-node-ssr-server/tree/main.svg?style=svg)](https://circleci.com/gh/mountkingx/react-node-ssr-server/tree/main)

# react-node-ssr-server
Personal development for react server side rendering with the help of Node.js

### Modules
* api-server: please see instruction in the module/README
* rendering-server: node.js as the rendering server as the root

### Command line flow starting from scratch

```bash
$ npm init --y
$ npm install --save wepack-cli webpack typescript ts-loader declaration-bundler-webpack-plugin copy-webpack-plugin clean-webpack-plugin @types/node @types/webpack
$ touch tsconfig.json
$ mkdir src
$ npm install --save webpack-merge webpack-node-externals
$ npm install --save express @types/express
$ npm install --save npm-run-all nodemon
$ npm install --save-dev react @types/react react-dom @types/react-dom
$ npm install --save-dev react-router-dom @types/react-router-dom
$ npm install --save-dev react-router-config @types/react-router-config
$ npm install --save-dev express-http-proxy @types/express-http-proxy
$ npm install --save babel-polyfill
```

### How to run local-dev and watching changes
* check package.json for detail scripts
* need a matching API server to run at localhost:8080, see `../api-server/README.md`
```bash
$ npm run dev
===> Node server is listening on port 3000
```

### ready for PROD
```bash
$ npm run build
```

### heroku information
- https://salty-refuge-79764.herokuapp.com/
- git.heroku.com/salty-refuge-79764.git main
- https://dashboard.heroku.com/apps/salty-refuge-79764

Reference:

- https://gist.github.com/rupeshtiwari/e7235addd5f52dc3e449672c4d8b88d5
