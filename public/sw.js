let cacheData = "appV1";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      return cache.addAll([
        "/index.html",
        "/css/style.css",
        "/static/js/main.chunk.js",
        "/static/js/bundle.js",
        "/static/js/0.chunk.js",
      ]);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).then((response) => {
        // If response is valid, cache it for future use
        if (
          !response ||
          response.status !== 200 ||
          response.type !== "basic"
        ) {
          return response;
        }

        const responseToCache = response.clone();

        caches.open(cacheData).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});



// let cacheData = "appV1";
// this.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches.open(cacheData).then((cache) => {
//       cache.addAll([
//         "/index.html",
//         "/css/style.css",
//         "/static/js/main.chunk.js",
//         "/static/js/bundle.js",
//         "/static/js/0.chunk.js",
//       ])
//       })
//     )
//     });

// this.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request).then((result)=>{
//         if(result){
//             return result
//         }
//          return fetch(event.request);
//     })
//   )
//   })


