const obj = {
  *generateNumber() {
    let index = 0;
    while (true) {
      yield index++;
    }
  },

  sum2() {

  },

  factor: function factor() {

  },
  
  async sum() {

  }
}


for (const number of obj.generateNumber()) {
  console.log('generateNumber:', number)
  if (number > 10) {
    break;
  }
}