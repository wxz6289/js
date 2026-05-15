const send = document.querySelector("#send");

send.addEventListener('click', () => {
  window.parent.postMessage("from inner.html");
})

window.addEventListener('message', (msg) => {
  console.log("inner:", msg.data);
})