import { readFile } from 'fs/promises';

async function getNum(fileName) {
  return parseInt(await readFile(fileName, 'utf8'), 10);
}

try {
  const promises = [1, 2, 3].map((i) => getNum(`test/${i}.txt`));
  const numbers = await Promise.all(promises);
  const result = numbers.reduce((pre, cur) => pre + cur);
  console.log('result: ', result);
} catch (e) {
  console.error('Error:', e);
}