# react-bootstrap-boilerplate

Explore Bootstrap with React with this basic boilerplate. The boilerplate aims to try to introduce you to bootstrap components as react components.

Made with :blue_heart: by [Even Stensberg](https://twitter.com/ev1stensberg) :ocean:
##Motivation

It is really hard to start off with react, and this boilerplate aims to get you started with few prerequisites while you are still making advanced craft. Before you start diving into your project, I recommend NOT using a boilerplate. A boilerplate should be used if you are lazy to write dependencies yourself or want to try a library.

##Features

- [**Babel**](https://github.com/babel/babel) This project uses babel to load your jsx files with ES6 and transpile them into ES5. This makes the code viable for all browsers, though you can do some code yourself to make this not-so-compatible. Note that css module loaders are implemented, so you can use css as modules. 

- [**React**](https://github.com/facebook/react) This project uses React for you to make client-side coding. This framework works similar to Angular's "Shadow DOM" and creates a fast & safe environment for your app to run in.

- [**Webpack**](https://github.com/webpack) This project uses module loading and code splitting, making your code fast and more performance-friendly. It uses code-splitting to require modules whenever you need it in your code. 

- [**React-Bootstrap**](https://github.com/react-bootstrap/react-bootstrap) This project uses react-bootstrap. Manage bootstrap as react components and optimize your react workflow! 

- [**ES6**](https://github.com/lukehoban/es6features) This project uses ES6 module loading through import statements rather than require, which is also modern JavaScript.


##Quickstart

1. Clone this repo using `git clone https://github.com/ev1stensberg/react-bootstrap-boilerplate.git`.

2. Delete the existing git repository by running `rm -rf .git`. , delete the license, readme and you are set.

3. Run `npm install` to install the dependencies.

4. Run `npm build` to build the script files. Run `webpack` in the terminal, if you don't get any new scripts in `/public/`

5. Run `npm start` to start the project, and you should see some really awesome stuff in the terminal.

6. Go to `http://localhost:8080/webpack-dev-server/` and you should see the app running if you navigate to `/public/index.html` while at the dashboard in your browser, otherwise, click on index.html in your folder and open it manually. 

7. You're set to explore the future on your own! :100:


##React-Bootstrap

React-Bootstrap manages your bootstrap components as react components. It also allows you to drop the jQuery so you don't have to require jQuery in the global namespace. It also allows you to implement your design more as react components. Note that the bootstrap.min.css is custom-made for my project. If you wish to make your own css file that makes you have a strict set of css from bootstrap, check out the links at the end of this paragraph. To read more about Bootstrap & React: 

- [**React-bootstrap DOCS**](https://react-bootstrap.github.io/)
- [**Bootstrap**](http://getbootstrap.com/)
- [**Make your own bootstrap css**](http://getbootstrap.com/customize/)
- [**Medium**](https://medium.com/@ev1stensberg/react-bootstrap-unifying-the-two-hottest-front-end-frameworks-7008636ed56f#.t2zxusu5x)

##Setting up React-Bootstrap on your own

In order for react-bootstrap to function, you need the library installed with the usual ´npm install --save <package>´.
You also need to include a bootstrap.min.js/bootstrap.js file where the styling is. This can either be from an external source(CDN) or you can customize this on your own. The way you do this is just by going to [**Bootstrap**](http://getbootstrap.com/customize/) and make your own sheet. Later you just place the bootstrap file where in your project you want it and include it as a stylesheet in your html. 

If this is confusing, check out this: [React-Bootstrap-get-started](https://react-bootstrap.github.io/getting-started.html)

##A Special Thanks To

I'd like to thank [React-Bootstrap contributors](https://twitter.com/react_bootstrap) for taking the same to publish and maintain this.


##Contribution
To contribute to this repo, please be humble, and submit specific, detailed issues, where you clearly point out the error.
