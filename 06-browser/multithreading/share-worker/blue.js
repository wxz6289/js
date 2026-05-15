console.log("blue.js");
const worker = new SharedWorker('shared-worker.js', { name: "blue-shared-worker"});
worker.port.onmessage = (event) => {
  console.log("EVENT:", event.data);
}

worker.port.postMessage("from shared worker");