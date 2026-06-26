function truncate(str, maxLength) {
  if (typeof str !== 'string') throw new Error('str must be string!');
  if (!str) return str;
  if (str.length > maxLength) {
    return `${str.substring(0, maxLength - 1)}...`;
  }
  return str;
}

console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate('Hi everyone!', 20));
