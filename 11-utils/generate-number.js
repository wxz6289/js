const _getUniqueNums = (start, end, n) => {
  let result = [];
  for (let i = 0; i < n;) {
    const gen = start + Math.floor(Math.random() * (end - start));
    if (!result.includes(gen)) {
      result.push(gen);
      i++;
    }
  }
  return result;
}

console.log(_getUniqueNums(3, 10, 4));