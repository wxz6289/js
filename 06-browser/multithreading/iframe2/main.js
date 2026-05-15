const mainBtn = document.querySelector("#main-send");

window.addEventListener("message", (msg) => {
  console.log("in main:", msg.data);
});

mainBtn.addEventListener('click', () => {
  document.innerFrame.postMessage("from main.js")
});
