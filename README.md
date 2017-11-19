![Base JavaScript SDK](https://user-images.githubusercontent.com/893057/32996594-b56d420c-cdaa-11e7-9c73-584310205012.png)

[![Code Quality](https://img.shields.io/scrutinizer/g/TeamBaseHQ/base-javascript-sdk.svg?style=flat-square)](https://scrutinizer-ci.com/g/TeamBaseHQ/base-javascript-sdk/?branch=master) 
[![Build Status](https://img.shields.io/scrutinizer/build/g/TeamBaseHQ/base-javascript-sdk.svg?style=flat-square)](https://scrutinizer-ci.com/g/TeamBaseHQ/base-javascript-sdk/build-status/master)
[![NPM Version](https://img.shields.io/npm/v/base-javascript-sdk.svg?style=flat-square)](https://www.npmjs.com/package/base-javascript-sdk)
[![NPM Downloads](https://img.shields.io/npm/dt/base-javascript-sdk.svg?style=flat-square)](https://www.npmjs.com/package/base-javascript-sdk)
[![Maintenance](https://img.shields.io/maintenance/yes/2018.svg?style=flat-square)](https://github.com/TeamBaseHQ/base-javascript-sdk)
[![License](https://img.shields.io/github/license/teambasehq/base-javascript-sdk.svg?style=flat-square)](https://github.com/TeamBaseHQ/base-javascript-sdk/blob/master/LICENSE)

Base JavaScript SDK
===================
Official JavaScript SDK for Base.

### Development
```bash
npm run dev
```

Runs the app in development mode using Webpack dev server and Webpack Dashboard.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Production
```
npm run build
```

Two separate folders, `browser` and `module` will be created inside the `/dist` folder.

#### browser
The `/browser` folder will contain three files, all of which are transpiled from TypeScript to ES5. Thus they will directly work in the browser, 
without having to run a transpiler like Babel.

- app.bundle.js: Contains the core library.
- vendor.bundle.js: Contains the library's dependencies.
- index.html: A placeholder page with both the above files linked.

#### module
The `/module` folder will contain all the files and modules, transpiled from TypeScript to ES5. However, the folder will also contain
TypeScript definitions for all the classes. This would make integrating this library in to your existing TypeScript app, seamless.

**[📖 Detailed Documentation](https://js-sdk.baseapp.in)**
