function convert(x) {
  switch (typeof x) {
    default:
      console.log("other");
      break;
    case 'number':
      console.log(x, 'is number');
      break;
    case 'string':
      console.log(x, 'is a string');
    case 'bigint':
      console.log(x, ' is bigint ');
  }
}

convert(2);
convert(true);
convert('hello');
convert(null);
convert(12n);
