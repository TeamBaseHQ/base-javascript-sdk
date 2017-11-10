Base JavaScript SDK
===================
#### `npm start` or `npm run server:prod`

Runs the app in development / production mode using Webpack dev server.
Open [http://localhost:3000](http://localhost:3000) 🎉 to view it in the browser.

#### `npm run build` or `npm run build:prod`
Build a development release

After build phase, 3 files are generated into the `dist` folder:
- `app.bundle.js` - contains the core of the application. From the entry point `src/index.ts`
- `vendor.bundle.js` - contains the vendor dependencies. From the entry point `src/vendor.ts`
- `index.html` - html page referencing these files
