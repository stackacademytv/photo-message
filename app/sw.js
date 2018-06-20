/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.3.0/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "0694e2093a5ae23b8c20ba2d55990629"
  },
  {
    "url": "manifest.json",
    "revision": "990c3bc2e973c82d0052638d1ab53aa1"
  },
  {
    "url": "style.css",
    "revision": "de72a9fffd7c667adb0856fa2feafcae"
  },
  {
    "url": "main.js",
    "revision": "d0c9ed7c950ed4e66f7e1d9b80267449"
  },
  {
    "url": "Classes/Camera.js",
    "revision": "caaf9be7dcfcf6c10e58600e0cde35d6"
  },
  {
    "url": "Classes/Message.js",
    "revision": "a9f2050b1bee121552487c6fcc7918be"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(css|js)/, workbox.strategies.cacheFirst(), 'GET');
workbox.routing.registerRoute(/^https:\/\/use\.fontawesome\.com.*/, workbox.strategies.cacheFirst({ cacheName: "fontawesome", plugins: [] }), 'GET');
