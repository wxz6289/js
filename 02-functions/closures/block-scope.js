const func = function () {
  if (true) {
    let age = 25;
  }
  console.log(age); // ReferenceError
}

func();