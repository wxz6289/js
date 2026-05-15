async function fetchSeries(urls) {
  const result = [];
  for (const url of urls) {
    const response = await fetch(url);
    if (response.ok) {
      result.push(await response.json())
    } else {
      throw new Error(`fetch ${url} occusr error status ${response.status}`);
    }
  }
  return result
}

const results = await fetchSeries(['data/1.json', 'data/2.json', 'data/3.json']);
console.log(results);

/* (async () => {
  const results = await fetchSeries(['data/1.json', 'data/2.json', 'data/3.json']);
  console.log(results);
})() */

