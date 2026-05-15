const _shouldUpdate = (oldVersion, newVersion) => {
  const oldV = oldVersion.split('.').map((v) => Number.parseInt(v, 10));
  const newV = newVersion.split('.').map((v) => Number.parseInt(v, 10));
  for (let vi = 0; vi < newV.length; vi++) {
    if (newV[vi] > oldV[vi]) {
      return true;
    }
  }
  return false;
}

let shoudUpdate = _shouldUpdate('9.0.1', '9.1.0');
console.log(shoudUpdate);