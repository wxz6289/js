// 递归实现 flat（演示默认参数）

function flat(arr, depth = 1) {
  if (depth === 0) return arr;
  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc.push(...flat(item, depth - 1));
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
}

const nested = [1, 2, [3, 4, [5, 6]]];
console.log(flat(nested, 0));       // 原样
console.log(flat(nested, 1));       // [1, 2, 3, 4, [5, 6]]
console.log(flat(nested, 2));       // 完全展开一层嵌套
console.log(flat(nested, Infinity)); // 全部展开
