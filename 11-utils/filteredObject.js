function filteredObject(obj, filter) {
  if (Array.isArray(obj)) {
    const result = [];
    for (const item of obj) {
      if (typeof item !== 'object') {
        if (filter(item)) {
          result.push(item);
        }
      } else if (item !== null) {
        const subArray = filteredObject(item, filter);
        if (subArray != undefined && subArray.length) {
        result.push(subArray);
        }
      }
    }
    return result.length ? result: undefined;
  } else {
    const result = {};
    const keys = Object.keys(obj);

    for (const key of keys) {
      const value = obj[key];
      if (typeof value !== 'object') {
        if (filter(value)) {
          result[key] = obj[key];
        }
      } else if (value !== null) {
        const subObj = filteredObject(value, filter);
        if (subObj != undefined && Object.keys(subObj).length) {
          result[key] = subObj;
        }
      }
    }
  return Object.keys(result).length ? result: undefined;
  }
}

console.log(filteredObject([-5, -4, -3, -2, -1, 0, 1], (x) => x > 0));
console.log(filteredObject({ "a": 1, "b": "2", "c": 3, "d": "4", "e": 5, "f": 6, "g": { "a": 1 } }, (x) => typeof x === "string"))
console.log(filteredObject([-1, [-1, -1, 5, -1, 10], -1, [-1], [-5]], x => x > 0));
console.log(filteredObject([[[[5]]]], x => Array.isArray(x)));