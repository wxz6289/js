importScripts("./test.js");

console.log(sum(2, 3), ' in subworker');

self.onmessage = (res) => {
  console.log(res);
  console.log(res.data);
}

self.postMessage("from subworker");

setTimeout(() => {
  throw new Error("oops from subworker");
}, 2000);