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
    "url": "icons/icon-128x128.png",
    "revision": "261f718ea9c64c88651f9196cd86a65d"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "37a2516608d76f42be3818058a3fc192"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "42e3735685450f2dd5065169f8247b77"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "3bb8cde12b592f0c32f31f2d9f5c876f"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "92849bc0e4db5935575fdc516e66301e"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "31cc80d5e43f45636a4d2616834c4cc3"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "562778c62561a2a1d38d808c46afb85f"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "889460d4e230bc27f81b00e171564d56"
  },
  {
    "url": "index.html",
    "revision": "59b7779fa8e224279411a0d6c5b13e5e"
  },
  {
    "url": "style.css",
    "revision": "de72a9fffd7c667adb0856fa2feafcae"
  },
  {
    "url": "main.js",
    "revision": "35a4d0b0381bed9ea9fb9ad4d07fffca"
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
workbox.routing.registerRoute(/^https:\/\/use\.fontawesome\.com.*/, workbox.strategies.staleWhileRevalidate({ cacheName: "fontawesome", plugins: [] }), 'GET');
