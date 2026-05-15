function lookDuplicate(array) {
  return array
    .filter((item, index) => array.indexOf(item) !== index)
    .reduce((pre, cur) => {
      if (pre.includes(cur)) return pre;
      return pre.concat(cur);
    }, []);
}

console.log(lookDuplicate([1, 1, 2, 3, 2, 1, 2, 3, 6, 4, 2, 6]));
