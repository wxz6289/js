console.log("worker");
self.addEventListener("message", ({ data }) => {
  console.log("in worker: ", data);
});

self.postMessage("from worker");

console.log("worker.js end");