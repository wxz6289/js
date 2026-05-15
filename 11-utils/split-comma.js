/* function _comma(number) {
  const str = String(number);
  const strArr = [];
  for (let i = str.length - 1; ; i -= 3) {
    if (i >= 3) {
      strArr.unshift(str.slice(i - 2, i + 1));
    } else {
      strArr.unshift(str.slice(0, i + 1));
      break;
    }
  }
  if (strArr[0].length == 1 && Number.isNaN(+strArr[0].charAt(0))) return strArr[0] + strArr.slice(1).join(',');
  return strArr.join(',');
} */

function _comma(number) {
  const str = String(number);
  return str.replace(/\d{1,3}(?=(\d{3})+$)/g, v => v + ',');
}


console.log(_comma(-123495995));