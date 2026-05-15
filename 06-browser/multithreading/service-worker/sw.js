let counter = 0;
self.oninstall = (event) => {
  console.log("service worker install");
}

self.onactivate = (event) => {
  console.log("service worker activate");
  // self.clients.claim() 页面第一次创建service worker后实例化,页面随即被service worker控制
  event.waitUntil(self.clients.claim());
}

self.onfetch = (event) => {
  const url = event.request.url
  console.log("fetch ", url);
  if (url.endsWith('/data.json')) {
    counter++;
    event.respondWith(
      new Response(JSON.stringify({ counter }), {
        headers: {
          "Content-Type": "application/json"
        }
      })
    );
    return;
  }
  event.respondWith(fetch(event.request));
}