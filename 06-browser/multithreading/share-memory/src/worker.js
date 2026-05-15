self.onmessage = (e) => {
  const views = new Uint8Array(e.data);
  console.log('worker', views[0]);
  views[0] = 1;
  e.data.foo = 'bar';
  self.postMessage(e.data);
}