# vue-webpack-init
A scaffold template for the first step.


## Usage
```
git clone https://github.com/banama/vue-webpack-init && cnpm install

npm run dev // run on dev mode

npm run pro // run on pro mode

npm run live // run on lvie and develop mode (hmr and so on)
```

or

[vue-cli](https://github.com/vuejs/vue-cli)

## Other

`Vue-template-init` is a scaffold. It will bring a template project for you.
* vue.js
* webpack
* [webpack-boost](https://github.com/banama/webpack-boost)(A simple lib for config webpack.)
* postcss (cssnano | autoprefixer)
* babel
* scss/stylus/less
* vue-loader

## Branch

There are some version scaffold.

* master (vue + webpack)
 
> git clone https://github.com/banama/vue-webpack-init

* SPA  (Vue + Webpack + Vue-router)

> git  -b SPA clone https://github.com/banama/vue-webpack-init

* SPA-vuex  (Vue + Webpack + Vue-router + Vuex)

> git -b SPA-vuex clone https://github.com/banama/vue-webpack-init

* SPA-redux  (Vue + Webpack + Vue-router + Redux)

> git -b SPA-redux clone https://github.com/banama/vue-webpack-init

## Tree (master)

```
├── LICENSE
├── README.md
├── build.js
├── components
│   └── index.js
├── lib
│   └── rem.js
├── node_modules
├── package.json
├── src
│   ├── main.js
│   └── main.vue
├── style
│   └── main.style
├── template
│   └── index.html
└── test
```

## License
https://opensource.org/licenses/mit-license.php
