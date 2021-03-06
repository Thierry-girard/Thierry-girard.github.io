importScripts('/js/static/workbox/workbox-sw.js');

if (workbox) 
{
  workbox.setConfig({
    modulePathPrefix: '/js/static/workbox/'
  });

  workbox.precaching.precacheAndRoute([
  {
    "url": "images/bubble.png",
    "revision": "0d29b4cf4414a6cf1f3440b50c75fc58"
  },
  {
    "url": "images/icon/icon.png",
    "revision": "aaccfd4e0fa161adb4ffba6c3d422c89"
  },
  {
    "url": "images/icon/pwa-192x192.png",
    "revision": "0833f29c4010912c4b951b43915618b0"
  },
  {
    "url": "images/icon/pwa-512x512.png",
    "revision": "82982c40c03c0370d838829fc6ec469b"
  },
  {
    "url": "images/spirit_level.png",
    "revision": "3b297e5d3b8fc4e77c6a5cc5a6e2a5f2"
  },
  {
    "url": "index.html",
    "revision": "e0fd92902ed696f4132f2b1ad82745e5"
  },
  {
    "url": "js/static/p5.min.js",
    "revision": "571339230a0f0aee23593ce24996a8aa"
  },
  {
    "url": "js/static/workbox/workbox-background-sync.dev.js",
    "revision": "36533f650dbb06e4d479e3543e324be8"
  },
  {
    "url": "js/static/workbox/workbox-background-sync.prod.js",
    "revision": "d78e2364e41d7fce06419042c1c595c1"
  },
  {
    "url": "js/static/workbox/workbox-broadcast-cache-update.dev.js",
    "revision": "776bc201b74b14f8637ab428df9b63cf"
  },
  {
    "url": "js/static/workbox/workbox-broadcast-cache-update.prod.js",
    "revision": "934891f61b11e9c051906f53324d159a"
  },
  {
    "url": "js/static/workbox/workbox-cache-expiration.dev.js",
    "revision": "1d94eca0a0c20d5c02521cf752545d9d"
  },
  {
    "url": "js/static/workbox/workbox-cache-expiration.prod.js",
    "revision": "33750d9ba165fe23f9dea02272db4eda"
  },
  {
    "url": "js/static/workbox/workbox-cacheable-response.dev.js",
    "revision": "8b7d6e583bdbc2aba21c560e90beb986"
  },
  {
    "url": "js/static/workbox/workbox-cacheable-response.prod.js",
    "revision": "82e09431bd4f19afddee2ade24911529"
  },
  {
    "url": "js/static/workbox/workbox-core.dev.js",
    "revision": "1d245db4168ad653c8f5f5d6e63ad2ca"
  },
  {
    "url": "js/static/workbox/workbox-core.prod.js",
    "revision": "d63d487fd91e4223a1f5bf87f994cd8d"
  },
  {
    "url": "js/static/workbox/workbox-google-analytics.dev.js",
    "revision": "f8633eb9a13ae40486537890fd6db049"
  },
  {
    "url": "js/static/workbox/workbox-google-analytics.prod.js",
    "revision": "d246feb57451b67393ef0775cc2362fb"
  },
  {
    "url": "js/static/workbox/workbox-precaching.dev.js",
    "revision": "e5aeb8620f27d3c775b1708e25dd2188"
  },
  {
    "url": "js/static/workbox/workbox-precaching.prod.js",
    "revision": "047b5fda9a8c02de8c16a7dd13b5b829"
  },
  {
    "url": "js/static/workbox/workbox-routing.dev.js",
    "revision": "5a3a5b3ec0d8cb345b90cc31ffeed751"
  },
  {
    "url": "js/static/workbox/workbox-routing.prod.js",
    "revision": "129f5adfcbedb0a93121814e68164439"
  },
  {
    "url": "js/static/workbox/workbox-strategies.dev.js",
    "revision": "9775b2b9f0af5db8252d614f2807a124"
  },
  {
    "url": "js/static/workbox/workbox-strategies.prod.js",
    "revision": "5c404cfe1333803c885a50af87fb90c4"
  },
  {
    "url": "js/static/workbox/workbox-sw.js",
    "revision": "060adeb4aef35c5028563db0c51afa34"
  },
  {
    "url": "manifest.json",
    "revision": "7100dd3f1f49ad1594e03347f78f0960"
  },
  {
    "url": "style/style.css",
    "revision": "b2c1dd84e7048473d1ba17e85b3837aa"
  }
]);

  workbox.routing.registerRoute(
    new RegExp('/js/sketch.js'),
    workbox.strategies.networkFirst(
      {
        cacheName : 'sketch',
        plugins: [
          new workbox.expiration.Plugin({
            maxAgeSeconds: 0,
          }),
        ],
      }
    )
  );

  workbox.routing.registerRoute(
    new RegExp('index.html'),
    workbox.strategies.networkFirst(
      {
        cacheName : 'index',
        plugins: [
          new workbox.expiration.Plugin({
            maxAgeSeconds: 0,
          }),
        ],
      }
    )
  );
} 