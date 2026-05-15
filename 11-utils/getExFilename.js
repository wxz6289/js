function getExtension(filename) {
  const position = filename.lastIndexOf('.');
  return filename.substring(position + 1);
}

console.log(getExtension('text.jsx.txt'));