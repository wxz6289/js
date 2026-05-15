console.log("main.js");

const worker = new Worker("./worker.js", { name: 'worker', type: "module" });

worker.postMessage("form main");
worker.addEventListener("message", ({ data }) => {
  console.log(data);
});

const sharedworker = new SharedWorker('shared-worker.js', { name: "main-shared-worker" });

console.log(sharedworker);

sharedworker.port.onmessage = (event) => {
  console.log("EVENT:", event.data);
}

sharedworker.port.postMessage("form main.js  shared worker");

window.addEventListener("beforeunload", () => {
  worker.port.postMessage('close');
});

console.log("main.js end");