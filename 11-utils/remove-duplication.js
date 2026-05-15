function removeDuplicates(array) {
  return array.reduce((pre, cur) => {
    if (pre.includes(cur)) return pre;
    return pre.concat(cur);
  }, []);
}

console.log(removeDuplicates([1, 1, 2, 3, 2, 1, 2, 3, 6, 4, 2, 6]));
