const ID = Math.floor(Math.random() * 10000);
console.log("shared-worker.js", ID, self.name);

const ports = new Set();

self.onconnect = (event) => {
  const port = event.ports[0];
  ports.add(port);
  console.log('CONN:', ID, ports.size);

  port.onmessage = (event) => {
    console.log("MESSAGE:", ID, event.data);

    for (const p of ports) {
      p.postMessage([ID, event.data]);
    }
    // 端口仍然存在移除不掉的情况，beforeunload事件没有触发或者出发时发生错误，或者页面以意外的方式崩溃
    if (event.data == 'close') {
      ports.delete(port);
      return
    }
  }
}