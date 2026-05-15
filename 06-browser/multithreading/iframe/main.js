const mainBtn = document.querySelector("#main-send");

const channnel = new BroadcastChannel("test");

channnel.addEventListener("message", (msg) => {
  console.log("in main:", msg.data);
});

mainBtn.addEventListener('click', () => {
  channnel.postMessage("from main.js")
});
