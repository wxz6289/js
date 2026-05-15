const send = document.querySelector("#send");

const channnel = new BroadcastChannel("test");


send.addEventListener('click', () => {
  channnel.postMessage("from inner.html");
})

channnel.addEventListener('message', (msg) => {
  console.log("inner:", msg.data);
})