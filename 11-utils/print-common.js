function printCommon(num) {
  let numStr = num.toString();
  let numStrArray = [...numStr].reverse();
  let newStr = [];
  for (let i = 0, len = numStrArray.length; i < len; i++) {
    newStr.push(numStrArray[i]);
    if ((i + 1) % 3 == 0 && (i + 1) < len) {
      newStr.push(',');
    }
  };
  return newStr.reverse().join('');
}

function printCommon2(num) {
  let numStr = [...String(num)];
  for (let i = numStr.length - 3; i > 0; i -= 3) {
    numStr.splice(i, 0, ',');
  }
  return numStr.join('');
}

console.log(printCommon2(1232));