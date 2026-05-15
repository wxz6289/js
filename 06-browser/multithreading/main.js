console.log("hello from main.js");

const worker = new Worker('./worker.js', { type: "module" });

worker.postMessage('Hello world');

worker.onmessage = msg => {
  console.log('in main ', msg.data);
}

worker.onerror = (e) => {
  console.log("catch error for worker", e);
}

console.log("hello from end of main.js")