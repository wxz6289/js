// default 可写在 case 之前；缺少 break 导致 fall-through

function convert(x) {
  switch (typeof x) {
    default:
      console.log('other');
      break;
    case 'number':
      console.log(x, 'is number');
      break;
    case 'string':
      console.log(x, 'is a string');
    // 无 break — 穿透到 bigint
    case 'bigint':
      console.log(x, 'is bigint');
  }
}

convert(2);
convert(true);
convert('hello');
convert(null);
convert(12n);
