console.log("hello from worker.js");

self.onmessage = msg => {
  console.log('in worker ', msg.data);
  self.postMessage("from worker");
}

const subWorker = new Worker("./subworker.js");

subWorker.postMessage("from worker");
subWorker.onmessage = ({ data }) => {
  console.log("in worker:", data);
  // subWorker.terminate();
}
subWorker.onerror = (e) => {
  console.log("catch error for subworker", e);
  e.preventDefault();
}