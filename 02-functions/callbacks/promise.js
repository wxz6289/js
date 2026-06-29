function step(value) {
  return new Promise((resolve, reject) => {
    if (value < 10) {
      resolve(`${value}success`);
    } else {
      reject(new Error(`${value}error`));
    }
  });
}

try {
  await step(22);
  await step(32);
} catch (err) {
  console.error(err);
}
