'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6b292177805a556fa66966987ae784ca",
"assets/AssetManifest.bin.json": "59ae639aa5f0aaf70b8ddbea4558680f",
"assets/assets/icons/icon-caution@3x.png": "8f984d63371c3c065a6600c8a3ce4610",
"assets/assets/icons/icon-close@3x.png": "acd36d73c212b0340765271095d4ab7a",
"assets/assets/icons/icon-correct@2x-green.png": "70325b6ace4a1fb08f6cdae73f72bb74",
"assets/assets/icons/icon-down_4@3x.png": "f7bd2048bda76031dc2c9f1c1851e39c",
"assets/assets/icons/icon-error@3x.png": "e5b60c16a6694859a9a342e66dc09609",
"assets/assets/icons/icon-info@3x.png": "f14fc07d89153a98cc979979c02757d8",
"assets/assets/icons/icon-notifications.png": "01e90e91bd50b2eb166784bac884b7e3",
"assets/assets/images/91000440.png": "e18413efefeec413e357c606f632406d",
"assets/assets/images/91000441.png": "9d2a72b3bf3af880ad2e0bc2ac6eeec8",
"assets/assets/images/91000442.png": "b8862f2dbd3557ae1b469b77609a60c4",
"assets/assets/images/91000443.png": "b19185145258881fb01e7327350b9c0c",
"assets/assets/images/91000444.png": "55e153f1354958ff474dcd31063c2fac",
"assets/assets/images/91000445.png": "9dfeb968205a6a00fbfdcfe519cbf022",
"assets/assets/images/91000446.png": "7f7125d21500a23e947bd106371e3758",
"assets/assets/images/91000447.png": "436f0325c043621141c7bde1a3175f4d",
"assets/assets/images/91000448.png": "bd4e1ac6e4685173f13fd45d1ed2f0a2",
"assets/assets/images/91000451.png": "a12aa61afbe787dcb51eb8a0e96c318d",
"assets/assets/images/91000452.png": "1a1d1428456c2439d23e508f4c0a5628",
"assets/assets/images/91000453.png": "0c9d2b5fae4488cc1ca6fe88f7944f44",
"assets/assets/images/91000454.png": "78c50075c1066be95657be1b753be659",
"assets/assets/images/91000455.png": "8b97e5d3ca9e9a46c1d45737fad7accc",
"assets/assets/images/91000456.png": "2b066e9d3684302274eb738115467629",
"assets/assets/images/91000457.png": "894a4ba32056a9f35a097335b43ff571",
"assets/assets/images/91000479.png": "43a2c7458042794ad51d9aa8014a5d11",
"assets/assets/images/91000480.png": "eeb481f1abfb333616951918ee8b8f15",
"assets/assets/images/91000481.png": "e8ada6aa9544818decfffc7da15b4835",
"assets/assets/images/91000482.png": "139857ba6ad0ad8c164ef3fe605332d6",
"assets/assets/images/91000483.png": "16c458b45e3f8c94c6541ecf17476ba1",
"assets/assets/images/91000484.png": "af97aa2f21fd502cdc075ec6b5023da8",
"assets/assets/images/91000486.png": "0e20b3a4b35d11cedf46b543909f2780",
"assets/assets/images/91000487.png": "c8a488a70b8f47affc382b768e651164",
"assets/assets/images/91000488.png": "be3089a37d328926b722f1de9f663e88",
"assets/assets/images/91000489.png": "454b47d1ac0902147f2cb51a6f142356",
"assets/assets/images/91000490.png": "a4151ac6eb6d0440ecb9b7942f95f657",
"assets/assets/images/91000491.png": "bbdb5d9c05478d9090cfaa1b60b13be1",
"assets/assets/images/91000494.png": "102fe6650b90e4a11a117496adecf45c",
"assets/assets/images/91000495.png": "8282641af1fb86d1b96a4b8c163ec533",
"assets/assets/images/91000496.png": "bf3254e06e499a1f1fdca35bc5670bf1",
"assets/assets/images/91000497.png": "059deb6a91fa8f47ef0f4b33ce4f5e8d",
"assets/assets/images/91000498.png": "84374b3ed7ef66c8631f9ed9842fe0fe",
"assets/assets/images/91000514.png": "018d741387387e648f42409fd4fba634",
"assets/assets/images/91000543.png": "8998c393d0a45313e79d7aff63a71cf7",
"assets/assets/images/91000544.png": "8998c393d0a45313e79d7aff63a71cf7",
"assets/assets/images/91000546.png": "1896d4eea20dfd9e909106e677f5aa8a",
"assets/assets/images/91000547.png": "494e4830181429b49ab1d44dc7fa3493",
"assets/assets/images/91000548.png": "b375e5af6c220fb2ae7dca38308bca69",
"assets/assets/images/91000549.png": "289e867e3008803efb8b940f65e1c1d0",
"assets/assets/images/91000550.png": "51d3151b2bc52765f46c8fe79525595d",
"assets/assets/images/91000551.png": "f60c1e2ca2cc4c249abe3a9e190b46a9",
"assets/assets/images/91000552.png": "e8580e6c7d94609f098b3c7dc59e4a37",
"assets/assets/images/91000553.png": "db4aec23776fd57dd2cba5f2b354dfc5",
"assets/assets/images/91000554.png": "8860de033e4c35dcd85cefb3f903293b",
"assets/assets/images/91000568.png": "4013cfe1a67a9cdfedaf86b145b07cbc",
"assets/assets/images/91000569.png": "993aa15ab4a738ee1232ecc727c2dcee",
"assets/assets/images/91000570.png": "a84f3a2c4162e420e9bf6be932c6fe2c",
"assets/assets/images/91000571.png": "587d1151d06c00f92541193075adca2d",
"assets/assets/images/91000572.png": "2b9276835eb93cfed6419736ff3d6291",
"assets/assets/images/91000573.png": "2cc8d4d09a95b4537f544d53fb244fbc",
"assets/assets/images/91000575.png": "588a799c84e4b225c3533a9021099763",
"assets/assets/images/91000576.png": "283160d763a0f6ca9ae97bd461e1630e",
"assets/assets/images/91000577.png": "9fea37bf43e072564d5b0d8707f32d55",
"assets/assets/images/91000578.png": "5e5e8bbe9a638df2b026a6da295401f4",
"assets/assets/images/91000579.png": "682011c513ee0d7c28948963c66c605a",
"assets/assets/images/91000580.png": "ed7a6c0c31b77cd18fed7e596731afd0",
"assets/assets/images/91000582.png": "f5f3305e8ee7da06ce1262873b9c8b5f",
"assets/assets/images/91000583.png": "779528d5f829e74030ebdb61ac3f6c42",
"assets/assets/images/91000584.png": "699e519e7ea7c470a596b870e36bacfb",
"assets/assets/images/91000588.png": "b0e1bc04e7af2eea595385899f504120",
"assets/assets/images/91000590.png": "63db6b5741d128128611986d5642a6dd",
"assets/assets/images/91000592.png": "7278bd6564ca2373d88da6494dc346ab",
"assets/assets/images/91000623.png": "63d2ecd83bb225c1dbb3d94edfd3b232",
"assets/assets/images/91000727.png": "030cbb3b0165acc282f989ff37b4ba84",
"assets/assets/images/91000728.png": "645e9cc2dea3b6f686c9e36c3b48f6ab",
"assets/assets/images/91000729.png": "c66759b3031b84360b5808dce968a9fb",
"assets/assets/images/91000758.png": "0a98878f7774dbeeae42b2d16cc2012e",
"assets/assets/images/91000794.png": "98ac106f63b7d5d253ab419a222cab12",
"assets/assets/images/91000801.png": "7f7125d21500a23e947bd106371e3758",
"assets/assets/images/91000802.png": "436f0325c043621141c7bde1a3175f4d",
"assets/assets/images/LOGO.NEW.png": "6c5e90f3a6d7793651ae96a21318a911",
"assets/assets/images/logo.png": "6c5e90f3a6d7793651ae96a21318a911",
"assets/assets/images/logo_tpk.png": "6c5e90f3a6d7793651ae96a21318a911",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "56a455c488af8f2005a2af63c767c252",
"assets/NOTICES": "3e45e30aadc1105f0d2b817cbadf5cf0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "8576e3ef7b019ce9ef0bfdc31b35802e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c2ce1c9d77804ab5b4841b747f4f8c7f",
"/": "c2ce1c9d77804ab5b4841b747f4f8c7f",
"main.dart.js": "7270e0cb397cb85560b479124e5a74be",
"manifest.json": "e875afea49b634ea01ade7c516dc4cf5",
"version.json": "7f86edf6c13624ed15391b7ecd82e7d0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
