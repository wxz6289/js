function invertedObj(obj) {
  const result = {};
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (obj[key] in result) {
      const valueKey = obj[key];
      if (Array.isArray(result[valueKey])) {
        result[valueKey].push(key);
      } else {
        const existValue = result[valueKey];
        result[valueKey] = [existValue, key];
      }
    } else {
      result[obj[key]] = key;
    }
  }
  return result;
}

console.log(invertedObj({ "a": "1", "b": "2", "c": "2", "d": "4" }));
console.log(invertedObj(["1", "2", "3", "4"]));