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
    "revision": "c87a2a0eee88d29733a1f523450cba50"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "3db1a80191f3be743bca3f11fea93967"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "e61db433b6a36eed4a0dffdfcf344911"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "d63daf7b4f6431a3238b28d1bdcac5fd"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "ba9f8ce8d2f168f9eee7065c94868056"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "c47592e08c3390754dbbefaece1278d0"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "3178e477795a347ec429e93d75bdefac"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "64d17e78d94b352e896cf86bfbafc6cb"
  },
  {
    "url": "index.html",
    "revision": "89dd10963ee927744a5f7ab68e464439"
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
workbox.routing.registerRoute(/^https:\/\/use\.fontawesome\.com.*/, workbox.strategies.staleWhileRevalidate({ cacheName: "fontawesome", plugins: [] }), 'GET');
