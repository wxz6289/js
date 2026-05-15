import { createServer } from 'http';
import RpcWorkerPool from './rpc-worker-pool.js';

const worker = new RpcWorkerPool('./rpc-worker.js', Number(process.env.THREADS), process.env.STRATEGY);

const server = createServer(async (req, res) => {
  const value = Math.floor(Math.random() * 100_000_000);
  const sum = await worker.exec('square_sum', value);
  res.end(JSON.stringify({ sum, value }));
});

server.listen(1337, (err) => {
  if (err) throw err;
  console.log('http://localhost:1337');
});