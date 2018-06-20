
// Require build tools
const {generateSW} = require('workbox-build');

generateSW({
  swDest: 'app/sw.js',
  globDirectory: "app/",
  globPatterns: [
    "**/*.{html,json,css}",
    "main.js",
    "Classes/*.js"
  ],
  skipWaiting: true,
  clientsClaim: true,
  runtimeCaching: [
    {
      urlPattern: /\.(css|js)/,
      handler: 'cacheFirst'
    },
    {
      urlPattern: /^https:\/\/use\.fontawesome\.com.*/,
      handler: 'cacheFirst',
      options: {
        cacheName: 'fontawesome'
      }
    }
  ]

}).then(({count, size}) => {
  console.log(`Generated new service worker, with ${count} precached files, totaling ${size} bytes.`);
}).catch(console.errror);
